module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  watchIgnoreFiles: [
  './nohup.out',
  '**/nohup.out']
});

//'19b3c8c7776793812daf9d4b633cf5ac'
