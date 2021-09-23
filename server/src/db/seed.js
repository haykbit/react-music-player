const mongoose = require("mongoose");
const db = require("../models");

async function seedUsers() {
  try {
    db.User.insertMany([
      {
        firstName: "John",
        lastNaem: "Doe",
        email: "jdoe@mail.com",
        firebase_id: "i6uvFci1zlShHRk33QDBTSzoAJU2",
      },
      {
        firstName: "Jane",
        lastNaem: "Doette",
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
      firebase_id: "i6uvFci1zlShHRk33QDBTSzoAJU2",
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
