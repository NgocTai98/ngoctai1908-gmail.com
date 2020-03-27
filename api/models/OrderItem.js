/**
 * OrderItem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    orderId: {
     type: 'number'
    },
    productSizeColorId: {
      model: 'productsizecolor'
    },
    price: {
      type: 'number'
    },
    total: {
      type: 'number'
    },
    createdAt: false,
    updatedAt: false,


  },

};

