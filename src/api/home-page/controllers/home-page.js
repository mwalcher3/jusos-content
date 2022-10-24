'use strict';

/**
 *  home-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::home-page.home-page');

module.exports = createCoreController('api::home-page.home-page', ({strapi}) =>({
    async find(ctx) {

        console.log("this is the ctx!", ctx.query)
      const { data, meta } = await super.find(ctx);
      // some more logic


  
      return { data, meta };
    }
  
  }));
  