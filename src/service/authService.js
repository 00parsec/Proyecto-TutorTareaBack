const bcrypt = require('bcrypt');
const User = require('../models/user');

const loginUser = async (email, password) => {
  const user = await User.findByEmail(email);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Contraseña incorrecta');
  }
  return user; 
};

module.exports = {
  loginUser,
};
