const { DataTypes, UUIDV4 } = require('sequelize')

module.exports = (db) => {
  db.define('user', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    profilePic:{
      type: DataTypes.STRING,
      allowNull: false
    },
    banned:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    test:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false 
    },
    is_deleted:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },{ timestamps: false})
}