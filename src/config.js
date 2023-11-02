// config.js
const crypto = require('crypto');

// Function to generate a secure secret key
function generateSecretKey() {
  return crypto.randomBytes(32).toString('hex');
}

// Export the generated secret key
module.exports = {
  secretKey: generateSecretKey(),
};