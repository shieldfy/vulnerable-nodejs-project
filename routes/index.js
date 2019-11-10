const router = require('express').Router();

const { getItems, addItem, deleteItem, updateItem, search } = require('../controllers/itemController');

// crud on todo list
router.get('/', getItems)
router.post('/', addItem)

// search in the list
router.post('/search', search)

module.exports = router