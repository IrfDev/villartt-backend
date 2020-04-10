'use strict';

/**
 * Pinturas.js controller
 *
 * @description: A set of functions called "actions" for managing `Pinturas`.
 */

module.exports = {

  /**
   * Retrieve pinturas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pinturas.search(ctx.query);
    } else {
      return strapi.services.pinturas.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pinturas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pinturas.fetch(ctx.params);
  },

  /**
   * Count pinturas records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.pinturas.count(ctx.query, populate);
  },

  /**
   * Create a/an pinturas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pinturas.add(ctx.request.body);
  },

  /**
   * Update a/an pinturas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pinturas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pinturas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pinturas.remove(ctx.params);
  }
};
