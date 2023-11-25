const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");
require('dotenv').config();

const keyVaultName = "project-inz-keyVault";
const keyVaultUri = `https://${keyVaultName}.vault.azure.net`;

function getSecret(secretName) {
  // Ustalanie, czy kod jest uruchamiany lokalnie czy na Azure
  if (process.env.AZURE_FUNCTIONS_ENVIRONMENT === 'Development') {
    // Użyj process.env lokalnie
    return process.env[secretName];
  } else {
    // Użyj Azure Key Vault na platformie Azure
    const credential = new DefaultAzureCredential();
    const secretClient = new SecretClient(keyVaultUri, credential);
    const secret = secretClient.getSecret(secretName);
    return secret.value;
  }
}

// Wykorzystanie w kodzie Sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize(getSecret('dbName'), getSecret('dbUser'), getSecret('dbPassword'), {
  host: getSecret('dbHost'),
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

module.exports = sequelize;
