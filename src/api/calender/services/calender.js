'use strict';

/**
 * calender service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calender.calender');
