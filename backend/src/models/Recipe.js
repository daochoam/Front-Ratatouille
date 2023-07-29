"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Recipe extends Model {
        static associate(models) {
            // define association here
            Recipe.belongsToMany(models.Diet, { through: "RecipeDiet" });
            Recipe.belongsToMany(models.Ingredient, { through: "RecipeIngredients" });
            Recipe.belongsToMany(models.User, { through: "Favorites" });
        }
    }
    Recipe.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                initialAutoIncrement: 10000, // Valor inicial del campo autoincremental

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
                    not: {
                        args: /\.(jpg|jpeg|svg|png)$/i,
                        msg: 'Please enter a valid image URL with jpg, jpeg, svg, or png format.'
                    }
                }
            },
            healtScore: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 100
                }
            },
            sumaryOfDish: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            stepByStep: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Recipe',
            timestamps: false
        });
    return Recipe;
};