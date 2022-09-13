'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;






















db.sala = require("../models/sala.js")(sequelize,Sequelize);
db.exposicion = require("../models/exposicion")(sequelize,Sequelize);
db.visitas = require("../models/visitas")(sequelize,Sequelize);
db.guia = require("../models/guia")(sequelize,Sequelize);
db.opinion = require("../models/opinion")(sequelize,Sequelize);
db.turno = require("../models/turno")(sequelize,Sequelize);
db

db.sala.hasMany(db.exposicion, {
  foreignKey: "idsala"
});










module.exports = db;
