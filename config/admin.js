module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6CnV3xUJbRlozPZuC2jNe/by2weRLWP2tu7e5RCvTX0='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});

//'19b3c8c7776793812daf9d4b633cf5ac'
