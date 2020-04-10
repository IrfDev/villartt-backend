'use strict';

/**
 * Categorias.js controller
 *
 * @description: A set of functions called "actions" for managing `Categorias`.
 */

module.exports = {

  /**
   * Retrieve categorias records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.categorias.search(ctx.query);
    } else {
      return strapi.services.categorias.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a categorias record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.categorias.fetch(ctx.params);
  },

  /**
   * Count categorias records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.categorias.count(ctx.query, populate);
  },

  /**
   * Create a/an categorias record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.categorias.add(ctx.request.body);
  },

  /**
   * Update a/an categorias record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.categorias.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an categorias record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.categorias.remove(ctx.params);
  }
};
