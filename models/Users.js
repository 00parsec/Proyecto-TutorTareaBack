const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'nombre_usuario' 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true, // Permitir que el campo email sea nulo
    unique: true,
    field: 'correo_electronico' 
  },
  role: {
    type: DataTypes.STRING, 
    allowNull: true // Permitir que el campo role sea nulo
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true 
  }
});

module.exports = User;



/*
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false

    //unique: true
  
  },
  rol: {
    type: DataTypes.STRING
    // Puedes agregar más opciones de configuración según tus necesidades
  },
  telefono: {
    type: DataTypes.STRING
    // Puedes agregar más opciones de configuración según tus necesidades
  },
  direccion: {
    type: DataTypes.STRING
    // Puedes agregar más opciones de configuración según tus necesidades
  },
  ciudad: {
    type: DataTypes.STRING
    // Puedes agregar más opciones de configuración según tus necesidades
  },
  edad: {
    type: DataTypes.INTEGER
    // Puedes agregar más opciones de configuración según tus necesidades
  }
});

module.exports = User;


*/