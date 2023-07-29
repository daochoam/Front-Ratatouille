"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Favorites extends Model {
        static associate(models) {
            Favorites.belongsTo(models.Recipe, { foreignKey: 'recipeId', onDelete: 'CASCADE' });
        }
    }
    Favorites.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: 'Favorites',
            timestamps: false
        });
    return Favorites;
};