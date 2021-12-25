const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    amount: Joi.number().required(),
    unit: Joi.string().required(),
    completed: Joi.boolean(),
    user: Joi.string().custom(objectId),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    amount: Joi.number(),
    unit: Joi.number(),
    completed: Joi.boolean(),
    user: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      amount: Joi.number(),
      unit: Joi.number(),
      completed: Joi.boolean(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
