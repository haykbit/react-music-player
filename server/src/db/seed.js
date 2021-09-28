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

async function seedSongs() {
  try {
    db.Song.insertMany([
      {
        name : "SongNAme",
        description : "It talks about dady issues",
        ratings : 4.5,
        images : [{
            public_id : "products/dsvbpny402gelwugv2le",
            url : "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg"
        }],
        category : "K-pop",
        author : "Pepe Author",
        numOfReviews : 32,
        reviews: []
    }

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
    const songExists = await db.Sing.findOne({ id:"_id"}).lean();


    if (!userExists) {
      await mongoose.connection.collection("users").drop();
      seedUsers();
    }
    if (!songExists) {
      await mongoose.connection.collection("songs").drop();
      seedSongs();
    }
  } catch (err) {
    console.log(err);
  }
}


module.exports = seedDatabase;

