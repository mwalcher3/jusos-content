module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19b3c8c7776793812daf9d4b633cf5ac'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
