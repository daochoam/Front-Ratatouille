"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Diet extends Model {
        static associate(models) {
            // define association here
            this.belongsToMany(models.Recipe, {
                through: 'Recipe_Diet',
                as: 'diets', // Nombre de la tabla intermedia
                foreignKey: 'dietId',
                onDelete: 'CASCADE'
            });
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