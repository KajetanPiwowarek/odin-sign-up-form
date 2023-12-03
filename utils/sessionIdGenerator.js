const uuid = require('uuid');

function generateNewSessionId() {
  return uuid.v4();
}

module.exports = generateNewSessionId;
