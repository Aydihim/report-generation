'use strict';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    static associate() {}
  }
  Data.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      lastname: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      jobTitle: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Data',
    },
  );
  return Data;
};
