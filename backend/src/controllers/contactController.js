import Contact from '../models/Contact.js';

// POST /api/contacts — guarda la consulta
export const createContact = async (req, res, next) => {
  try {
    const { name, phone, email, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ message: 'Nombre y teléfono son obligatorios' });
    }
    const contact = await Contact.create({ name, phone, email, message });
    res.status(201).json({ message: 'Consulta recibida', id: contact._id });
  } catch (err) { next(err); }
};

// GET /api/contacts  (admin — listar todas)
export const getContacts = async (_req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) { next(err); }
};
