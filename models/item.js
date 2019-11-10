const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		required: true
	},
	updatedAt: {
		type: Date,
		default: Date.now(),
		required: true
	}
})

const Item = mongoose.model('item', ItemSchema)
module.exports = Item
