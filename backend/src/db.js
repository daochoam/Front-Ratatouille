"use strict";
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import * as configEnviroment from "../src/config/index.js";
dotenv.config();

const { __dirname, __ } = (await import('./config/fileDirName.js')).default(import.meta)

const env = process.env.NODE_ENV || "development";
const config = configEnviroment[env];
const db = {};

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const files = fs.readdirSync(path.join(__dirname, '/models'));
await Promise.all(
  files.map(async (file) => {
    if (file !== 'index.js' && file.slice(-3) === '.js') {
      const model = (await import(path.join(__dirname, '/models', file))).default(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
  })
);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;