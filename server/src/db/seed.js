const mongoose = require("mongoose");
const db = require("../models");

async function seedUsers() {
  try {
    db.User.insertMany([
      {
        firstName: "Admin",
        lastName: "Doe",
        email: "admin@mail.com",
        firebase_id: "I3wKx6kfyXZykQ77pAAMQK3vQ7s1",
      },
      {
        firstName: "Jane",
        lastName: "Doette",
        email: "jdoette@mail.com",
        firebase_id: "QkVnUTPyCTelrls3YD56hzQMyhN2",
      },
    ]);
  } catch (err) {
    console.log(err);
  }
}

async function seedDatabase() {
  try {
    const userExists = await db.User.findOne({
      firebase_id: "I3wKx6kfyXZykQ77pAAMQK3vQ7s1",
    }).lean();
    if (!userExists) {
      await mongoose.connection.collection("users").drop();
      seedUsers();
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedDatabase;
