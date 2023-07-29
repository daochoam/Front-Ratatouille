"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Diet extends Model {
        static associate(models) {
            // define association here
            Diet.belongsToMany(models.Recipe, { through: "RecipeDiet" });
        }
    }
    Diet.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please enter a name for the Diet.'
                    }
                }
            },
        },
        {
            sequelize,
            modelName: 'Diet',
            timestamps: false
        });
    return Diet;
};