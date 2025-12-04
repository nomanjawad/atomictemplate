#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';

const execAsync = promisify(exec);

const TEMPLATE_REPO = 'https://github.com/nomanjawad/atomictemplate.git';

async function main() {
  console.log(chalk.bold.cyan('\n🚀 Create AtomicTemplate\n'));

  // Get project name
  const response = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'What is your project named?',
    initial: 'my-atomictemplate-app',
    validate: (value) => {
      if (!value) return 'Project name is required';
      if (!/^[a-z0-9-_]+$/i.test(value)) {
        return 'Project name can only contain letters, numbers, dashes, and underscores';
      }
      return true;
    },
  });

  if (!response.projectName) {
    console.log(chalk.red('\n❌ Project creation cancelled'));
    process.exit(1);
  }

  const projectName = response.projectName;
  const targetDir = path.resolve(process.cwd(), projectName);

  // Check if directory exists
  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`\n❌ Directory "${projectName}" already exists`));
    process.exit(1);
  }

  const spinner = ora('Cloning template...').start();

  try {
    // Clone the repository
    await execAsync(`git clone ${TEMPLATE_REPO} ${projectName}`, {
      cwd: process.cwd(),
    });
    spinner.succeed('Template cloned');

    // Remove .git folder
    spinner.start('Initializing fresh git repository...');
    const gitDir = path.join(targetDir, '.git');
    if (fs.existsSync(gitDir)) {
      fs.rmSync(gitDir, { recursive: true, force: true });
    }
    await execAsync('git init', { cwd: targetDir });
    spinner.succeed('Fresh git repository initialized');

    // Remove release automation and CLI files (not needed for end users)
    spinner.start('Cleaning up template files...');
    const filesToRemove = [
      path.join(targetDir, 'scripts', 'release.sh'),
      path.join(targetDir, '.github', 'workflows', 'release.yml'),
      path.join(targetDir, 'cli'),  // Remove entire CLI directory
    ];
    
    for (const file of filesToRemove) {
      if (fs.existsSync(file)) {
        fs.rmSync(file, { recursive: true, force: true });
      }
    }
    spinner.succeed('Template cleaned');

    // Update package.json
    spinner.start('Updating package.json...');
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    
    // Reset package.json to user's project
    packageJson.name = projectName;
    packageJson.version = '0.1.0';
    packageJson.private = true;
    delete packageJson.publishConfig;
    delete packageJson.files;
    delete packageJson.keywords;
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    spinner.succeed('package.json updated');

    // Ask for package manager preference
    const { packageManager } = await prompts({
      type: 'select',
      name: 'packageManager',
      message: 'Which package manager do you want to use?',
      choices: [
        { title: 'pnpm (recommended)', value: 'pnpm' },
        { title: 'npm', value: 'npm' },
        { title: 'yarn', value: 'yarn' },
        { title: 'Skip installation', value: 'skip' },
      ],
      initial: 0,
    });

    if (packageManager && packageManager !== 'skip') {
      spinner.start(`Installing dependencies with ${packageManager}...`);
      await execAsync(`${packageManager} install`, { cwd: targetDir });
      spinner.succeed('Dependencies installed');
    }

    // Success message
    console.log(chalk.green.bold('\n✅ Success! Your project is ready.\n'));
    console.log(chalk.cyan('Next steps:\n'));
    console.log(chalk.white(`  cd ${projectName}`));
    
    if (!packageManager || packageManager === 'skip') {
      console.log(chalk.white('  pnpm install'));
    }
    
    console.log(chalk.white(`  ${packageManager || 'pnpm'} dev`));
    console.log(chalk.gray('\n📚 Documentation: https://github.com/nomanjawad/atomictemplate\n'));
  } catch (error) {
    spinner.fail('Failed to create project');
    console.error(chalk.red('\n❌ Error:'), error.message);
    
    // Cleanup on failure
    if (fs.existsSync(targetDir)) {
      fs.rmSync(targetDir, { recursive: true, force: true });
    }
    
    process.exit(1);
  }
}

main();
