

// const config = {
// 	host: "localhost",
// 	port: "5432",
// 	database: "jusoshd-db",
// 	user: "jusoshd",
// 	password: "b90a56021845dc03222a1bf140954dba9ac6e9d82f7756302ab587bb444365cd",
// 	ssl: false,
// 	}

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: config.ssl,
//     },
//     debug: false,
//   },
// });

//       ssl: {
//         rejectUnauthorized: false
//       },

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: "localhost",
      port: "5432",
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      ssl: false,
    },
    debug: false,
  },
});
