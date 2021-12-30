const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class PostActivity extends Model {

}

PostActivity.init(
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
        activity_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'activity',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_activity'
    }
);

module.exports = PostActivity;