const bcrypt = require('bcryptjs');
const { User } = require('../models/User');

const register = async (req, res) => {
  try {
    const { username, password, email, role, phone, address, city, age } = req.body;

    console.log('Datos del usuario recibidos:', req.body); // Imprimir los datos del usuario recibidos

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, password: hashedPassword, email, role, phone, address, city, age });

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    if (error.name === 'SequelizeValidationError') {
      // Error de validación de Sequelize
      return res.status(400).json({ message: 'Error de validación al registrar el usuario', errors: error.errors });
    } else {
      // Otro tipo de error
      return res.status(500).json({ message: 'Error interno del servidor al registrar el usuario' });
    }
  }
};

module.exports = { register };
