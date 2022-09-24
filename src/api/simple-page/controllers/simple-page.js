"use strict";

/**
 *  homepage controller
 */


const schema = require(`../content-types/simple-page/schema.json`);
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController(`api::simple-page.simple-page`, schema);