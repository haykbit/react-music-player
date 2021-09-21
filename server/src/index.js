const app = require("./server");
const config = require("./config/config");
const connect = require("./db/connect");

connect().then(async function onServerInit() {
  config.log("DB Connected");

  app.listen(config.app.PORT, () => {
    config.log(`Server running at http://localhost:${config.app.PORT}`);
  });
});
