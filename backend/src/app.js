import db from "./db.js";
import cors from 'cors'
import dotenv from 'dotenv';
import express from 'express'
import { config } from './config/index.js';
import routes from "./routes/index.js";

dotenv.config();
global.app = express()
global.config = config

app.use(express.json())
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

db.sequelize.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
//   .then(() => {
//   console.log(`Database synced successfully`); // eslint-disable-line no-console
// }).
//   catch(error => {
//     console.error("Unable to connect to the database:", error)
//   });

// app.listen(config.PORT, () => {
//   console.log('Server running on port ' + config.PORT)
// })
// db.sequelize
//   .authenticate()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Connected to database and app is listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });