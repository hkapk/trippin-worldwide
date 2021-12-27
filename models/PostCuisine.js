const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class PostCuisine extends Model {

}

PostCuisine.init(
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
        cuisine_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cuisine',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_cuisine'
    }
);

module.exports = PostCuisine;