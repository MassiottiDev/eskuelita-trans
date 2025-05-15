
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
    
    // Create a temporary package.json with the required fields
    console.log('Setting up deployment configuration...');
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add homepage and scripts
    packageJson.homepage = `https://massiottidev.github.io/${repoName}`;
    
    // Write the updated package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    
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
