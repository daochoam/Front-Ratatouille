import { expect } from "chai";
import request from "supertest";
import { User } from "../models/user.model";
import app from "../app";
import configDataBase from '../src/configDataBase.js';
const env = process.env.NODE_ENV || 'development';