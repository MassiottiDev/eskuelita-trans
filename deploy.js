
// Simple deployment script for GitHub Pages

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get repository name from package.json or git
function getRepoName() {
  try {
    // Try to get from git remote
    const remoteUrl = execSync('git config --get remote.origin.url').toString().trim();
    const match = remoteUrl.match(/\/([^\/]+?)(?:\.git)?$/);
    if (match && match[1]) {
      return match[1];
    }
  } catch (e) {
    console.log('Could not get repository name from git. Using default.');
  }

  return '';
}

// Update vite.config.ts with the repository name
function updateViteConfig() {
  const repoName = getRepoName();
  const configPath = path.join(__dirname, 'vite.config.ts');
  let configContent = fs.readFileSync(configPath, 'utf-8');
  
  if (repoName) {
    // For GitHub Pages, the base URL is /<repo-name>/
    configContent = configContent.replace(
      /base: "\/"/,
      `base: "/${repoName}/"`
    );
    fs.writeFileSync(configPath, configContent);
    console.log(`Updated vite.config.ts with base: "/${repoName}/"`);
  } else {
    console.log('Could not determine repository name. Using default base path.');
  }
}

// Main function
function deploy() {
  try {
    console.log('Starting GitHub Pages deployment...');
    
    // Update Vite config
    updateViteConfig();
    
    // Build the project
    console.log('Building the project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Deploy to GitHub Pages
    console.log('Deploying to GitHub Pages...');
    execSync('npx gh-pages -d dist', { stdio: 'inherit' });
    
    console.log('Deployment successful! Your site should be available soon at your GitHub Pages URL.');
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

deploy();
