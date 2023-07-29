"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Ingredient extends Model {
        static associate(models) { // define association here
            Ingredient.belongsToMany(models.Recipe, { through: "RecipeIngredients" });
        }
    }
    Ingredient.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please enter a name for the ingredient.'
                    }
                }
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    not: {
                        args: /\.(jpg|jpeg|svg|png)$/i,
                        msg: 'Please enter a valid image URL with jpg, jpeg, svg, or png format.'
                    }
                }
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1
                }
            },
            measures: {
                type: DataTypes.JSONB,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'Ingredient',
            timestamps: false
        });
    return Ingredient;
};