'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitante.init({
    Nombre: DataTypes.STRING,
    Email: DataTypes.STRING,
    Contrasenia: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Visitante',
  });
  return Visitante;
};