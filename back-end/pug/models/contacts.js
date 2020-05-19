'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define('Contacts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    phone2: DataTypes.INTEGER
  }, {
    timestamps: true
  });
  Contacts.associate = function(models) {
    // associations can be defined here
  };
  return Contacts;
};