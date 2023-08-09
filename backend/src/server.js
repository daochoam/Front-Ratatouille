import { app } from './app.js';
import { config } from './config/index.js';
import db from './db.js';

(async () => {
    await db.sequelize.sync({ force: true })
        .then(() => {
            app.listen(config.PORT, () => {
                console.log('Server running on port ' + config.PORT)
            })
        })
        .catch((error) => {
            console.error("Unable to connect to the database:", error);
        });

})();