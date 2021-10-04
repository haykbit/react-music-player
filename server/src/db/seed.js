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
        title: "idol",
        artist: "BTS",
        genre: "K-pop",
        duration: 3.5,
        url: [
          {
            public_id: "upload/v1632827814",
            url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
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
            url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1633001063/k73nlagzz8cxif3bvhqh.mp3",
          },
        ],
        album: "fake1234fake1234fake1234",
        // private: false,
        owner: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
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
            url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1633001063/test.mp3",
          },
        ],
        album: "fake1234fake1234fake1234",
        // private: false,
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
