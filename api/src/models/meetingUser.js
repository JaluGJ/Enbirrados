const { DataTypes, UUIDV4 } = require('sequelize')

module.exports = (db) => {
  db.define('meeting', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    beer: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Done', 'Canceled', 'On Going'),
      allowNull: false
    },
    detail: {
      type: DataTypes.STRING,
    },
    hostId:{
      type: DataTypes.UUID,
      allowNull: false
    },
    hostName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    hostPic:{
      type: DataTypes.STRING,
      allowNull:false
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}