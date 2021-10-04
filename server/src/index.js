const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");
const seed = require("./db/seed");

connect().then(async () => {
  console.log(`DB connected!`);
  // await seed();

  app.listen(config.app.PORT, () => {
    console.log(`Server running at http://localhost:${config.app.PORT}`);
  });
});
