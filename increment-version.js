#!/usr/bin/env node

// Simple version increment script
const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, 'version.txt');

function incrementVersion() {
  try {
    // Read current version
    const currentVersion = fs.readFileSync(versionFile, 'utf8').trim();
    const [major, minor] = currentVersion.split('.').map(Number);
    
    // Increment minor version
    const newVersion = `${major}.${minor + 1}`;
    
    // Write new version
    fs.writeFileSync(versionFile, newVersion);
    
    console.log(`Version incremented from ${currentVersion} to ${newVersion}`);
    return newVersion;
  } catch (error) {
    console.error('Error incrementing version:', error);
    return '0.1';
  }
}

// Run if called directly
if (require.main === module) {
  incrementVersion();
}

module.exports = { incrementVersion };
