'use strict';

/**
 * Shortoverview.js controller
 *
 * @description: A set of functions called "actions" for managing `Shortoverview`.
 */

module.exports = {

  /**
   * Retrieve shortoverview records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.shortoverview.search(ctx.query);
    } else {
      return strapi.services.shortoverview.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a shortoverview record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.shortoverview.fetch(ctx.params);
  },

  /**
   * Count shortoverview records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.shortoverview.count(ctx.query);
  },

  /**
   * Create a/an shortoverview record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shortoverview.add(ctx.request.body);
  },

  /**
   * Update a/an shortoverview record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shortoverview.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shortoverview record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shortoverview.remove(ctx.params);
  }
};
