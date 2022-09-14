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


db.Sala = require("./sala.js")(sequelize,Sequelize);
db.Exposicion = require("./exposicion.js")(sequelize,Sequelize);
db.Visitas = require("./visitas.js")(sequelize,Sequelize);
db.Guia = require("./guia.js")(sequelize,Sequelize);
db.Opinion = require("./opinion.js")(sequelize,Sequelize);
db.Turno = require("./turno.js")(sequelize,Sequelize);
db.Usuario = require("./usuario.js")(sequelize,Sequelize);
db.Visitante = require("./visitante.js")(sequelize,Sequelize);
db.Museo = require("./museo.js")(sequelize,Sequelize);

// db.Sala.hasMany(db.Exposicion, {
//   foreignKey: "IdSala"
// });
db.Sala.belongsToMany(db.Visitas, {
  through: "VisitasSalas",
  as: "visitas",
  foreignKey: "salaId"
})

db.Visitas.belongsToMany(db.Sala, {
  through: "VisitasSalas",
  as: "salas",
  foreignKey: "visitasId"
})







module.exports = db;
