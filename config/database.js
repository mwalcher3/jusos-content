const parse = require('pg-connection-string').parse;
const config = parse('postgres://yaggxeqxzwjhry:733e8602059d87eb1293080e672a1adb7312d0ec21a559f03c325b1a35ecdb13@ec2-54-204-28-187.compute-1.amazonaws.com:5432/dag58mk7fgmant');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});


