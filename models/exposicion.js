'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exposicion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exposicion.init({
    Nombre: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    Audio: DataTypes.STRING.BINARY
  }, {
    sequelize,
    modelName: 'Exposicion',
  });
  return Exposicion;
};