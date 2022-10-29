//  path: config/plugins.js

module.exports = ({ env }) => ({
    // ...
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET')
    },
    },
    // ...

    graphql: {
      config: {
         endpoint: "/graphql",
         shadowCRUD: true,
         playgroundAlways: true,
         depthLimit: 100,
         apolloServer: {
           tracing: false,
           },
         },
      }, 


      menus: {
        config: {
          layouts: {
            menuItem: { // This is the menu item edit panel.
              link: [ // This is the "link" tab in the menu item edit panel.
                {
                  input: {
                    label: 'hide header',
                    name: 'hide_from_header',
                    type: 'bool',
                    description: 'This item will be omitted from the header',
                  },
                  grid: {
                    col: 6,
                  },
                },
              ],
            },
          },
        },
      },
      
  });
  
  