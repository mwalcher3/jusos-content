'use strict';

/**
 *  pop-up controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::pop-up.pop-up');
module.exports = createCoreController('api::pop-up.pop-up', ({strapi}) =>({
    async find(ctx) {
  
      const { data, meta } = await super.find(ctx);
      // some more logic
      const popups= data

         
               return { popups, meta };
                   }
                    
  }));
