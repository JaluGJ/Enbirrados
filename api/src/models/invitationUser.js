const { DataTypes ,UUIDV4 } = require("sequelize")

module.exports = (db) => {
  db.define('invitation', {
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
    status: {
      type: DataTypes.ENUM('Rejected','Accepted','Waiting','Caduced','Canceled','Attended'),
      allowNull: false
    },
    info: {
      type: DataTypes.STRING,
    },
    is_deleted:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}