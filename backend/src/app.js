import db from "./db.js";
import cors from 'cors'
import dotenv from 'dotenv';
import express from 'express'
import { config } from './config/index.js';
import routes from "./routes/index.js";

dotenv.config();
const app = express()

// express.json ==> Handle JSON data on incoming requests with a maximum limit of data.
// express.urlencoded ==> Express middleware for parsing and converting data encoded in application/x-www-form-urlencoded format into a JavaScript object, (such as data submitted via HTML forms)
app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))

app.all('*', function (request, response, next) {
  var whitelist = request.headers.origin;
  response.header('Access-Control-Allow-Origin', whitelist)
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
  response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  response.header("Access-Control-Allow-Credentials", "true");
  next()
})

app.use(cors({
  origin: function (origin, callback) {
    console.log(origin)
    if (!origin) return callback(null, true)

    if (config.listablanca.indexOf(origin) === -1) {
      return callback('error de cors', false)
    }
    return callback(null, true)
  }
}))

routes.forEach((route) => {
  app.use("/", route);
});

export { app }