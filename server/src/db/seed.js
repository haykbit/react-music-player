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
        title: "idol",
        artist: "BTS",
        genre: "K-pop",
        duration: 3.5,
        url: [
          {
            public_id: "upload/v1632827814",
            url: "https://res.cloudinary.com/einartech/video/upload/v1632827814/music/TesseracT_-_Nocturne_P_O_R_T_A_L_S_128_kbps_tlj08b.mp3",
          },
        ],
        album: "fake1234fake1234fake1234",
        private: false,
        owner: "6152f26da11b50c0d609bdf3",
        popularity: 32,
        included_lists: [
          {
            playlist: "fake1234fake1234fake1234",
          },
        ],
      },
      {
        title: "Serindipity",
        artist: "BTS",
        genre: "K-pop",
        duration: 3.5,
        url: [
          {
            public_id: "upload/v1632827814",
            url: "https://res.cloudinary.com/einartech/video/upload/v1632827814/music/TesseracT_-_Nocturne_P_O_R_T_A_L_S_128_kbps_tlj08b.mp3",
          },
        ],
        album: "fake1234fake1234fake1234",
        private: false,
        owner: "6152f26da11b50c0d609bdf3",
        popularity: 32,
        included_lists: [
          {
            playlist: "fake1234fake1234fake1234",
          },
        ],
      },
      {
        title: "test",
        artist: "test",
        genre: "K-pop",
        duration: 3.5,
        url: [
          {
            public_id: "upload/v1632827814",
            url: "https://res.cloudinary.com/einartech/video/upload/v1632827814/music/TesseracT_-_Nocturne_P_O_R_T_A_L_S_128_kbps_tlj08b.mp3",
          },
        ],
        album: "fake1234fake1234fake1234",
        private: false,
        owner: "6152f26da11b50c0d609bdf3",
        popularity: 32,
        included_lists: [
          {
            playlist: "fake1234fake1234fake1234",
          },
        ],
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
