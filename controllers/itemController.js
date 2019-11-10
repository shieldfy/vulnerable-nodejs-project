const Item = require('../models/item')

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
		return res.status(500).json({ message: 'something went wrong!', error: error.stack })
	}
}

const search = async (req, res) => {
    try {
        const result = await Item.find({ name: req.body.query })
        return res.status(200).json({ message: 'success', result })
	} catch (error) {
		return res.status(500).json({ message: 'something went wrong!', error: error.stack })
	}
}

module.exports = {
	getItems,
	addItem,
	search
}
