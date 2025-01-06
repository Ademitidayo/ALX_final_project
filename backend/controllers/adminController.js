const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  const mockAdmin = { username: 'admin', password: 'password123' };

  if (!admin) {
    return res.status(400).json({ message: 'Admin not found' });
  }

  const isMatch = await admin.matchPassword(password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

  res.json({ token });
};

module.exports = { loginAdmin };