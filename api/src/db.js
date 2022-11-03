require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs')
const path = require('path')

const {
  PG_DBNAME, PG_DIALECT, PG_HOST, PG_HOST_PORT, PG_PASSWORD, PG_USER
} = process.env

const db = new Sequelize(`${PG_DIALECT}://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_HOST_PORT}/${PG_DBNAME}`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);
const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  });

modelDefiners.forEach(model => model(db));

let entries = Object.entries(db.models)
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
db.models = Object.fromEntries(capsEntries);


const { User, Meeting, Invitation } = db.models

User.belongsToMany(Meeting, { through: 'user_meeting' })
Meeting.belongsToMany(User, { through: 'user_meeting' })

Meeting.hasMany(Invitation)
Invitation.belongsTo(Meeting)

Invitation.belongsTo(User)
User.hasMany(Invitation)
/*
const {modelo} = db.models

belongsToMany
belongsTo
hasMany
*/

db.authenticate()
  .then(() => console.log('conectado'))
  .catch((e) => console.log(e))

module.exports = {
  ...db.models,
  db,
}