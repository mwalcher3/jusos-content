'use strict';

/**
 *  general-topic-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::general-topic-page.general-topic-page', ({strapi}) =>({
    async findPopup(ctx) {
        if (ctx.request.url== '/api/general-topic-page/popup'){
            ctx.request.url= "/api/general-topic-page?populate[pop_ups][populate][0]=bulletPoints"
          }
  
      const { data, meta } = await super.find(ctx);
      // some more logic

      const popups= data.attributes.pop_ups.data

      console.log("this is the data", data)

  
      return { popups, meta };
    }
  
  }));
  