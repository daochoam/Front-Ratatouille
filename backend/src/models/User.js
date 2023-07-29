"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) { // define association here
            User.belongsToMany(models.Recipe, { through: "Favorites" });
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            full_name: DataTypes.STRING,
            is_admin: DataTypes.BOOLEAN,
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            refresh_token: {
                type: DataTypes.STRING(1200),
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'User',
            timestamps: false
        }
    );
    return User;
};