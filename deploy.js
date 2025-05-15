
// Simple deployment script for GitHub Pages

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get repository name from git
function getRepoName() {
  try {
    const remoteUrl = execSync('git config --get remote.origin.url').toString().trim();
    const match = remoteUrl.match(/([^\/]+?)(\.git)?$/);
    if (match && match[1]) {
      return match[1];
    }
  } catch (e) {
    console.log('Could not get repository name from git:', e.message);
  }
  return 'eskuelita-trans'; // Default to your repo name if we can't detect it
}

// Main function
function deploy() {
  try {
    console.log('Starting GitHub Pages deployment...');
    
    // Get repo name for base URL
    const repoName = getRepoName();
    
    // Build the project with correct base path
    console.log('Building the project...');
    console.log(`Using base path: /${repoName}/`);
    execSync(`BASE_URL=/${repoName}/ npm run build`, { stdio: 'inherit' });
    
    // Instead of modifying package.json, pass the homepage as an environment variable
    console.log('Deploying to GitHub Pages...');
    const homepage = `https://massiottidev.github.io/${repoName}`;
    execSync(`npx gh-pages -d dist --repo-url=${homepage}`, { stdio: 'inherit' });
    
    console.log('Deployment successful! Your site should be available soon at:');
    console.log(homepage);
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

deploy();
