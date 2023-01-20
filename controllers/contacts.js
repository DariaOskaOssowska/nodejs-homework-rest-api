const service = require('../service')
const { contactValidator } = require('./../utils/validators/validator')

const getAll = async (req, res) => {
	console.log('sruuuuuuu')
	const contacts = await service.getAllContacts()
	console.log('contacts: ', contacts)
	res.status(200).json(contacts)
}

const getById = async (req, res) => {
	console.log('srrrru', req.params)
	const { contactId } = req.params
	const contact = await service.getContactById(contactId)
	if (contact) {
		res.status(200).json(contact)
	} else {
		res.status(404).json({ message: 'Not found' })
	}
}

const addContact = async (req, res, next) => {
	console.log('psotek')
	const { name, email, phone } = req.body
	try {
		const result = await service.createContact({ name, email, phone })
		res.status(201).json(result)
	} catch (e) {
		console.warn(e)
		next(e)
	}
}

const updateContact = async (req, res, next) => {
	try {
		console.log('hej')
		const { error } = contactValidator(req.body)
		if (error) return res.status(400).json({ message: error.details[0].message })
		const { name, email, phone } = req.body
		const { contactId } = req.params
		const fields = req.body
		console.log('sru body', req.body)
		console.log('contact id', contactId)
		if (!name && !email && !phone) {
			res.status(400).json({ message: 'missing fields' })
		}
        const contact = await service.updateContact(contactId, fields)
        console.log(contact, 'contact');
		if (contact) {
			res.status(200).json(contact)
		} else {
			res.status(404).json({ message: 'Not found' })
		}
	} catch (error) {
		console.error(error.message)
		next(error)
	}
}

const removeContact = async (req, res, next) => {
	try {
		const { contactId } = req.params
		const contactToRemove = await service.deleteContact(contactId)
		if (!contactToRemove) {
			return res.status(404).json({ message: 'Not found contact' })
		} else {
			res.status(200).json({ message: 'Contact deleted' })
		}
	} catch (error) {
		console.log(`Error: ${error.message}`.red)
		next(error)
	}
}

module.exports = {
	getAll,
	getById,
	addContact,
	updateContact,
	removeContact,
}
