const express = require('express')
const { listContacts, getContactById } = require('../../models/contacts')

const router = express.Router()

router.get('/', async (req, res, next) => {
	const contacts = await listContacts()
	res.status(200).json(contacts)
})

router.get('/:contactId', async (req, res, next) => {
	const { contactId } = res.params
	const contact = await getContactById(contactId)
	if (contact) {
		res.status(200).json(contact)
	} else {
		res.status(404).json({ message: 'Not found' })
	}
})

router.post('/', async (req, res, next) => {
const {}

	res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
	res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
	res.json({ message: 'template message' })
})

module.exports = router
