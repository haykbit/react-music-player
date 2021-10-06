const mongoose = require("mongoose");
const db = require("../models");
let ObjectId = require("mongodb").ObjectID;

async function seedUsers() {
  try {
    db.User.insertMany([
      {
        firstName: "Admin",
        lastName: "DontModify",
        email: "admin@mail.com",
        firebase_id: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jdoe@mail.com",
        firebase_id: "XwUad1gLFSdk7oCarUxhDLfmQtl1",
      },
      {
        firstName: "Roger",
        lastName: "Centollo",
        email: "centollo@mail.com",
        firebase_id: "E1NcRyh2etcGOrfrCBYQBQRFwPi1",
      },
      {
        firstName: "Mike",
        lastName: "Soprano",
        email: "soprano@mail.com",
        firebase_id: "CxYYshpGWbeEy7zdgjd6ckrWBNZ2",
      },
      {
        firstName: "Xavi",
        lastName: "Tol",
        email: "xavi@mail.com",
        firebase_id: "zuvAukoB7ogMj7DHaimzKqEFI3C3",
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
        title: "Admin Song - Don't modify",
        genre: "Electronic dance music (EDM) ",
        artist: "Admin",
        duration: 187,
        url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
        owner: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
      },
      {
        title: "Plume",
        genre: "Electronic dance music (EDM) ",
        artist: "Caravan Palace",
        duration: 187,
        url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1633001063/k73nlagzz8cxif3bvhqh.mp3",
        owner: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
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
      email: "admin@mail.com",
    }).lean();

    const songExists = await db.Song.findOne({
      url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
    }).lean();

    if (!userExists) {
      mongoose.connection.collection("users").drop();
      seedUsers();
    }

    if (!songExists) {
      mongoose.connection.collection("songs").drop();
      seedSongs();
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
