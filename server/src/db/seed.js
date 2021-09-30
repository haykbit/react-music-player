const mongoose = require("mongoose");
const db = require("../models");
let ObjectId = require("mongodb").ObjectID;

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
        name: "IDOL",
        description: "Best K-pop band",
        ratings: 4.5,
        images: [
          {
            public_id: "upload/v1632827962",
            url: "https://res.cloudinary.com/einartech/image/upload/v1632827962/music/download_yynaha.jpg",
          },
        ],
        multimedia: [
          {
            public_id: "upload/v1632827814",
            url: "https://res.cloudinary.com/einartech/video/upload/v1632827814/music/TesseracT_-_Nocturne_P_O_R_T_A_L_S_128_kbps_tlj08b.mp3",
          },
        ],
        category: "K-pop",
        band: "BTS",
        numOfReviews: 32,
        reviews: [],
        author: "6152f26da11b50c0d609bdf3",
      },
      {
        name: "Permision to dance on stage",
        description: "Best K-pop band",
        ratings: 4.5,
        images: [
          {
            public_id: "upload/v1632827962",
            url: "https://res.cloudinary.com/einartech/image/upload/v1632827962/music/download_yynaha.jpg",
          },
        ],
        multimedia: [
          {
            public_id: "upload/v1632827814",
            url: "https://res.cloudinary.com/einartech/video/upload/v1632827814/music/TesseracT_-_Nocturne_P_O_R_T_A_L_S_128_kbps_tlj08b.mp3",
          },
        ],
        category: "K-pop",
        band: "BTS",
        numOfReviews: 32,
        reviews: [],
        author: "6152f26da11b50c0d609bdf3",
      },
    ]);
  } catch (err) {
    console.log(err);
  }
}

async function seedDatabase() {
  //User
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
    console.log("user errorr");
  }

  //Song
  try {
    const songExists = await db.Song.findOne({
      id: "_id:6152f26da11b50c0d609bdf2",
    }).lean();

    if (!songExists) {
      await mongoose.connection.collection("songs").drop();
      seedSongs();
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedDatabase;
