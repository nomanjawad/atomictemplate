#!/bin/bash

# ============================================
# @atomictemplate/slider Release Script
# ============================================
# Usage: ./scripts/release-slider.sh [major|minor|patch|x.x.x]
# Example: ./scripts/release-slider.sh patch
# ============================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Package directory
PACKAGE_DIR="packages/slider"

echo -e "${BLUE}🎠 @atomictemplate/slider Release Script${NC}\n"

# Check if version argument is provided
if [ -z "$1" ]; then
  echo -e "${RED}Error: Version argument required${NC}"
  echo "Usage: ./scripts/release-slider.sh [major|minor|patch|x.x.x]"
  echo "Example: ./scripts/release-slider.sh patch"
  exit 1
fi

VERSION_ARG=$1

# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./${PACKAGE_DIR}/package.json').version")
echo -e "Current version: ${YELLOW}${CURRENT_VERSION}${NC}"

# Checkout package.json to ensure clean state
git checkout ${PACKAGE_DIR}/package.json 2>/dev/null || true

# Calculate new version
if [[ $VERSION_ARG =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  NEW_VERSION=$VERSION_ARG
else
  cd $PACKAGE_DIR
  NEW_VERSION=$(npm version $VERSION_ARG --no-git-tag-version | tr -d 'v')
  cd ../..
fi

echo -e "New version: ${GREEN}${NEW_VERSION}${NC}\n"

# Confirm release
echo -e "This will create tag ${YELLOW}slider-v${NEW_VERSION}${NC} and trigger automated npm publish. Continue? (y/n)"
read -r CONFIRM
if [ "$CONFIRM" != "y" ]; then
  echo -e "${RED}Aborted${NC}"
  git checkout ${PACKAGE_DIR}/package.json 2>/dev/null || true
  exit 1
fi

echo ""

# Step 1: Update version
echo -e "Step 1: Updating package.json..."
cd $PACKAGE_DIR
npm version $NEW_VERSION --no-git-tag-version > /dev/null 2>&1 || true
cd ../..
echo -e "${GREEN}✓${NC} Updated to ${NEW_VERSION}"

# Step 2: Build the package
echo -e "\nStep 2: Building slider package..."
cd $PACKAGE_DIR
pnpm build
cd ../..
echo -e "${GREEN}✓${NC} Build complete"

# Step 3: Commit version bump
echo -e "\nStep 3: Committing version bump..."
git add ${PACKAGE_DIR}/package.json
git commit -m "chore(slider): bump version to ${NEW_VERSION}"
echo -e "${GREEN}✓${NC} Committed"

# Step 4: Push to GitHub
echo -e "\nStep 4: Pushing to GitHub..."
git push origin main

# Step 5: Create and push tag
echo -e "\nStep 5: Creating and pushing tag slider-v${NEW_VERSION}..."
git tag "slider-v${NEW_VERSION}"
git push origin "slider-v${NEW_VERSION}"

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ Slider Release Triggered! ✨${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "Package: ${BLUE}@atomictemplate/slider${NC}"
echo -e "Version: ${YELLOW}${NEW_VERSION}${NC}"
echo -e "Tag: ${YELLOW}slider-v${NEW_VERSION}${NC}"
echo ""
echo -e "GitHub Actions is now:"
echo -e "  1. ✓ Building the slider package"
echo -e "  2. ✓ Publishing @atomictemplate/slider@${NEW_VERSION} to npm"
echo -e "  3. ✓ Creating GitHub release"
echo ""
echo -e "Monitor progress:"
echo -e "${BLUE}https://github.com/nomanjawad/atomictemplate/actions${NC}"
echo ""
echo -e "Once complete, install with:"
echo -e "${GREEN}npm install @atomictemplate/slider@${NEW_VERSION}${NC}"
