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
