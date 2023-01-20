const Contact = require('./schemas/contacts')

const getAllContacts = async () => Contact.find()

const getContactById = async contactId => Contact.findById(contactId)

const createContact = async ({ name, email, phone }) => {
	return Contact.create({ name, email, phone })
}

const updateContact = async (contactId, fields) => {
	return Contact.findByIdAndUpdate(contactId, fields, { new: true, strict: 'throw', runValidators: true })
}

const deleteContact = async contactId => Contact.findByIdAndRemove(contactId)

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact }
