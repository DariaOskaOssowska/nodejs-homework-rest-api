const fs = require('fs/promises')
const path = require('path')
require('colors')

const contactsPath = path.join(__dirname, 'models', 'contacts.json')

const listContacts = async () => {
	try {
		const contacts = await fs.readFile(contactsPath, { encoding: 'utf-8' })
		return JSON.parse(contacts)
	} catch (error) {
		console.log(`Error: ${error.message}`.red)
	}
}

const getContactById = async contactId => {}

const removeContact = async contactId => {}

const addContact = async body => {}

const updateContact = async (contactId, body) => {}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
}
