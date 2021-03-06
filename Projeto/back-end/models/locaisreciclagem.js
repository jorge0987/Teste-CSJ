'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locaisReciclagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  locaisReciclagem.init({
    locaisReciclagem_Id: DataTypes.BIGINT,
    identificacao: DataTypes.STRING,
    Cep: DataTypes.STRING,
    logadouro: DataTypes.STRING,
    numeroEndereco: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    capacidade: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'locaisReciclagem',
  });
  return locaisReciclagem;
};