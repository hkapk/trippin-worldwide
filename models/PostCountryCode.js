const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class PostCountryCode extends Model {

}

PostCountryCode.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        country_code_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'countrycode',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_country_code'
    }
);

module.exports = PostCountryCode;