const Item = require('../models/item')
const moment = require('moment');

const getItems = async (req, res) => {
	try {
		const items = await Item.find().sort({ date: -1 })
		return res.status(200).json({ message: 'success', items })
	} catch (error) {
		return res.status(500).json({ message: 'something went wrong!', error })
	}
}

const addItem = async (req, res) => {
	try {
		const item = new Item({
			name: req.body.name,
			content: req.body.content,
			date: req.body.date
		})
		let newItem = await item.save()
		return res.status(200).json({ message: 'success', newItem })
	} catch (error) {
		return res.status(500).json({ message: 'something went wrong!', error })
	}
}

const deleteItem = async (req, res) => {
	try {
		await Item.findByIdAndDelete(req.body.id)
		return res.status(200).json({ message: 'success' })
	} catch (error) {
		return res.status(500).json({ message: 'something went wrong!', error })
	}
}

const updateItem = async (req, res) => {
	try {
		const { id, name, content, date } = req.body
        const updatedItem = await Item.findByIdAndUpdate(id, { name, content, date }, { new: true })
        return res.status(200).json({ message: 'success', updatedItem })
	} catch (error) {
		return res.status(500).json({ message: 'something went wrong!', error })
	}
}

const search = async (req, res) => {
    try {
		const { query } = req.body
        const result = await Item.find({ name: query })
        return res.status(200).json({ message: 'success', result })
	} catch (error) {
		return res.status(500).json({ message: 'something went wrong!', error })
	}
}

module.exports = {
	getItems,
	addItem,
	deleteItem,
	updateItem,
	search
}
