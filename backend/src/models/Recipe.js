"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Recipe extends Model {
        static associate(models) {
            // define association here
            this.belongsToMany(models.Diet, {
                through: 'Recipe_Diet',
                as: 'diets', // Nombre de la tabla intermedia
                foreignKey: 'recipeId',
                onDelete: 'CASCADE'
            });
            this.belongsToMany(models.User, {
                through: "User_Recipes",
                as: 'favorites',
                foreignKey: 'recipeId',
                onDelete: 'CASCADE'
            });
        }
    }
    Recipe.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please enter a name for the recipe.'
                    }
                }
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    is: {
                        args: /\.(jpg|jpeg|svg|png)$/i,
                        msg: 'Please enter a valid image URL with jpg, jpeg, svg, or png format.'
                    }
                }
            },
            healthScore: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isValue(value) {
                        if (value < 0 || value > 100) throw Error("The health score must be at least 0 and at most 100.")
                    }
                }
            },
            summaryOfDish: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            stepByStep: {
                type: DataTypes.JSON, // Puedes utilizar JSONB si estás utilizando una base de datos que soporta JSONB, como PostgreSQL
                allowNull: false,
                validate: {
                    isValidStepByStep(value) {
                        if (typeof value !== 'object' || Object.keys(value).length === 0) {
                            throw new Error('Step by step must be a non-empty object.');
                        }
                    }
                }
            }
        },
        {
            sequelize,
            modelName: 'Recipe',
            timestamps: false
        });
    return Recipe;
};