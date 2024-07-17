'use strict';

/**
 * mylist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mylist.mylist');
