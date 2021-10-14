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
    console.log("Seed Users OK");
  } catch (err) {
    console.log(err);
  }
}

async function seedSongs() {
  try {
    db.Song.insertMany([
      {
        title: "Admin Song - Don't modify",
        genre: "Electronic dance music (EDM)",
        artist: "Admin",
        duration: 187,
        url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
        album: "fake1234fake1234fake1234",
        private: false,
        owner: "615d7975e1b282b490fa251c",
        popularity: 32,
      },
      {
        title: "Plume",
        genre: "Electronic dance music (EDM)",
        artist: "Caravan Palace",
        duration: 187,
        url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1633001063/k73nlagzz8cxif3bvhqh.mp3",
        album: "fake1234fake1234fake1234",
        private: false,
        owner: "615b22fb93c39b954c27c9da",
        popularity: 32,
      },
      {
        title: "idol",
        genre: "K-pop",
        artist: "BTS",
        duration: 3.5,
        url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
        album: "fake1234fake1234fake1234",
        private: false,
        owner: "615b22fb93c39b954c27c9da",
        popularity: 32,
      },
      {
        title: "Serindipity",
        genre: "K-pop",
        artist: "BTS",
        duration: 3.5,
        url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1633001063/k73nlagzz8cxif3bvhqh.mp3",
        album: "fake1234fake1234fake1234",
        private: true,
        owner: "615b22fb93c39b954c27c9da",
        popularity: 32,
      },
      {
        title: "test",
        genre: "K-pop",
        artist: "test",
        duration: 3.5,
        url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1633001063/test.mp3",
        album: "fake1234fake1234fake1234",
        private: false,
        owner: "615b22fb93c39b954c27c9da",
        popularity: 32,
      },
    ]);
    console.log("Seed Songs OK");
  } catch (err) {
    console.log(err);
  }
}
async function seedPlaylist() {
  try {
    db.Playlist.insertMany([
      {
        title: "Sports Playlist",
        description: "Music to Work Out",
        songs: [],
        genre: "Techno",
        private: "false",
        owner: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
        playlistImage:
          "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",

        popularity: 10,
      },
      {
        title: "Sleep Playlist",
        description: "Music to Relax",
        songs: [],
        genre: "Oldies",
        private: "false",
        owner: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
        playlistImage:
          "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
        popularity: 15,
      },
      {
        title: "Test Playlist",
        description: "Music to Test",
        songs: [],
        genre: "Oldies",
        private: "false",
        owner: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
        playlistImage:
          "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
        popularity: 15,
      },
      {
        title: "Multiple Playlist",
        description: "Music to Test",
        songs: [],
        genre: "Oldies",
        private: "false",
        owner: "hNgne9CGnvbcwHokxnXgCRjUVVO2",
        playlistImage:
          "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
        popularity: 15,
      },
    ]);
    console.log("Seed Playlist OK");
  } catch (err) {
    console.log(err);
  }
}

async function seedDatabase() {
  try {
    //Const
    const userExists = await db.User.findOne({
      email: "admin@mail.com",
    }).lean();

    const songExists = await db.Song.findOne({
      url: "https://res.cloudinary.com/dzaxp8xwy/video/upload/v1632916940/popau9wxpbhd5akh0w1c.mp3",
    }).lean();

    const playlistExists = await db.Playlist.findOne({
      title: "testPlaylist",
    }).lean();

    //Conditions

    if (!userExists) {
      mongoose.connection.collection("users").drop();
      seedUsers();
    }

    if (!songExists) {
      mongoose.connection.collection("songs").drop();
      seedSongs();
    }
    if (!playlistExists) {
      mongoose.connection.collection("playlists").drop();
      seedPlaylist();
    }
  } catch (err) {
    console.log(err);
  }
  console.log("Seed ended");
}

module.exports = seedDatabase;
