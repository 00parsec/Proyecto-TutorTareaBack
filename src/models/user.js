const pool = require('../../config/database');

class User {
  static async findByEmail(email) {
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  static async create(userData) {
    const { nombre, email, password, tipo, rut, telefono, direccion, comuna, edad } = userData;
    const query = `INSERT INTO usuarios (nombre, email, password, tipo, rut, telefono, direccion, comuna, edad) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`;
    const values = [nombre, email, password, tipo, rut, telefono, direccion, comuna, edad];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = User;
