const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");

connect().then(async () => {
  console.log(`DB connected!`);

  app.listen(config.app.PORT, () => {
    console.log(`Server running at http://localhost:${config.app.PORT}`);
  });
});
