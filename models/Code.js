const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Code extends Model {

}

Code.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        country_code_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'code'
    }
);

module.exports = Code;