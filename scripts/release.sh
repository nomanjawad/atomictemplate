#!/bin/bash

# AtomicTemplate Release Script
# Creates a git tag which triggers automated npm publishing via GitHub Actions

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

echo -e "${CYAN}🚀 AtomicTemplate Release Script${NC}\n"

# Check if version argument provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Version argument required${NC}"
    echo ""
    echo "Usage: ./scripts/release.sh <major|minor|patch|x.x.x>"
    echo ""
    echo "Examples:"
    echo "  ./scripts/release.sh patch    # 1.1.0 -> 1.1.1"
    echo "  ./scripts/release.sh minor    # 1.1.0 -> 1.2.0"
    echo "  ./scripts/release.sh major    # 1.1.0 -> 2.0.0"
    echo "  ./scripts/release.sh 1.5.0    # Specific version"
    exit 1
fi

VERSION_ARG=$1

# Get current version
CURRENT_VERSION=$(node -p "require('$TEMPLATE_DIR/package.json').version")
echo -e "${YELLOW}Current version: ${CURRENT_VERSION}${NC}"

# Calculate new version
cd "$TEMPLATE_DIR"
if [[ "$VERSION_ARG" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    NEW_VERSION=$VERSION_ARG
else
    NEW_VERSION=$(npm version $VERSION_ARG --no-git-tag-version | sed 's/v//')
    git checkout package.json  # Revert the change
fi

echo -e "${CYAN}New version: ${NEW_VERSION}${NC}\n"

# Confirmation
read -p "This will create tag v${NEW_VERSION} and trigger automated npm publish. Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Release cancelled${NC}"
    exit 1
fi

echo -e "\n${CYAN}Step 1: Updating package.json...${NC}"
npm version $NEW_VERSION --no-git-tag-version

echo -e "${CYAN}Step 2: Building template...${NC}"
pnpm build

echo -e "${CYAN}Step 3: Committing version bump...${NC}"
git add package.json
git commit -m "chore: bump version to ${NEW_VERSION}"

echo -e "${CYAN}Step 4: Pushing to GitHub...${NC}"
git push origin main

echo -e "${CYAN}Step 5: Creating and pushing tag v${NEW_VERSION}...${NC}"
git tag -a "v${NEW_VERSION}" -m "Release v${NEW_VERSION}"
git push origin "v${NEW_VERSION}"

echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ Release Triggered! ✨${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

echo -e "${CYAN}Version: ${NEW_VERSION}${NC}"
echo -e "${CYAN}Tag: v${NEW_VERSION}${NC}\n"

echo -e "${YELLOW}GitHub Actions is now:${NC}"
echo -e "  1. ✓ Building the template"
echo -e "  2. ✓ Updating CLI version"
echo -e "  3. ✓ Publishing create-atomictemplate@${NEW_VERSION} to npm"
echo -e "  4. ✓ Creating GitHub release\n"

echo -e "${YELLOW}Monitor progress:${NC}"
echo -e "${CYAN}https://github.com/nomanjawad/atomictemplate/actions${NC}\n"

echo -e "${GREEN}Once complete (usually 2-3 minutes), install with:${NC}"
echo -e "${CYAN}npx create-atomictemplate@${NEW_VERSION}${NC}\n"
