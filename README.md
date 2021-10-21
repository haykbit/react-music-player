# [React-music-player](#react-music-player)
## 📔 Description
**A Music player made with React and Node.js**
Listen to your favorite artists and bands, discover songs on other peoples playlists and enjoy yourself in this musical Oasis.

## Table of Contents <!-- omit in toc -->
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
    - [Branches](#branches)
    - [Structural elements](#structural-elements)
    - [Style elements](#style-elements)
  - [Screentshots](#screentshots)
  - [File Structure](#file-structure)
  - [Technology used](#technology-used)
## Requirements

This project runs with some specific technologies that require a previous installation to work with it:

| Function       | Technology                                      | Required |
| -------------- | ----------------------------------------------- | -------- |
| Code editor    | [VS Code](https://code.visualstudio.com/)       | True*    |
| Mongo DataBase | [MongoDB](https://www.mongodb.com/)             | True     |
| MongoDB Visual Interface | [Visual BD Helper](https://www.mongodb.com/products/compass)      | False |
| Web server stack package   | [XAMPP](https://www.apachefriends.org/es/index.html) / [MAMP](https://www.mamp.info/en/windows/) | True |
| Package manager for PHP   | [Composer](https://getcomposer.org/) | True     |
| Cloud file manager | [Cloudinary](https://cloudinary.com) | True |

*_You can choose between dozens of possibilities, VSCode is only a recommendation_

### ENV files

It's required to create .env files to store your environment and sensitive information.

For the __client__ .env is necessary to add the __Firebase__ configuration and credentials, your __Cloudinary__ path and credentials, and your access path to both Server.

For __main server__ .env is necessary to add the __Firebase Admin__ credentials, your __Mongo Databse__ connection information and the path to the __Client__.

For the __secondary server__ .env it is required to have the data related to the __Laravel configuration__ and to the __SQL Database__ connection.

## Getting Started
1. Clone the repository
   
   ```
   $ git clone https://github.com/haykbit/react-music-player.git
    ```
2. Installing
    ```
    $ yarn install
    ```
3. Start

- Open terminals for client

    ```
   $ yarn client  
   ``` 
   
- Open terminal for NodeJs server (don't forget to initialise MongoDB) 
   
   ```
   $yarn server
   ```
   
- And last but not least open terminal for Laravel server (and remember to start your XAMPP or MAMP package)
   
   ```
   $ yarn stats
   ``` 


## Dependencies
- [React](https://reactjs.org/)
- [React-Dom](https://reactjs.org/docs/react-dom.html)
- [React-Redux](https://react-redux.js.org/)
- [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-Spinners](https://github.com/davidhu2000/react-spinners)
- [React-Toastify](https://github.com/fkhadra/react-toastify)
- [React-Beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [React-easy-sort](https://github.com/ricardo-ch/react-easy-sort)
- [Redux](https://redux.js.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Firebase](https://firebase.google.com/)
- [Cross-env](https://github.com/kentcdodds/cross-env)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Body-parser](https://github.com/expressjs/body-parser)
- [Helmet](https://github.com/helmetjs/helmet)
- [CORS](https://github.com/expressjs/cors)
- [Lodash](https://lodash.com/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

## Contents and Branches Naming Strategy

This project has a naming strategy for its different elements to facilitate and unify the work between its Collaborators. These conventions are presented below.

### Branches
Branches are always preceded by a Category Word and a Number.

The category word tries to be descriptive and define the content of the branch: __F__ for __Features__, __FIX__ for __fixes__ and __error handling__, __DOC__ for __Documentation__ or __ENH__ for __Enhancements__.

This category word is followed by a number, that always correspond with the __issue number__ of the project. This is an easy an ordered system that allows the Collaborators to find and work easily on each task.

After this featured code, you can find a short but descriptive name that is separated by hyphens.

By this rule this is a real case of the Branch name that you can find in this same project: _F01/user-authentication_.

### Structural elements
Structural element names have a strict policy to be simple, clear and descriptive. This element includes React components and pages as well as all the main elements of Servers, and normally have to be written with __camelCase__ convention. The exception to this are React components, who are written using __PascalCase__ convention.

### Style elements
Style elements, that includes all _scss_ files and _classes_ have the same rules: lowercase connected by hyphens. The names need to be __descriptive__ but __short__ and, in case they are nested components or classes, should have a reference of their __parent element__ on the name.

## Main Features
* Log in with your email or a __Google Account__ with total security.

* Create your personal _Playlists_ and add as many tracks as you want.

[![Image from Gyazo](https://i.gyazo.com/40b387cfb51de9084eb5ab4deb38ff5e.gif)](https://gyazo.com/40b387cfb51de9084eb5ab4deb38ff5e)

* Save your most loved songs: you can find all of them on your ***Favorite*** section!

* You don't remember the title of that song? Search by song name, playlist or band!

[![Image from Gyazo](https://i.gyazo.com/ae675b20d2d3dbbd61ec93484364389b.gif)](https://gyazo.com/ae675b20d2d3dbbd61ec93484364389b)

* Upload your own songs, only for your ears to enjoy.

* Discover the latest hits, the most beloved music and the best of each genre on this incredible homepage.

[![Image from Gyazo](https://i.gyazo.com/8e57d8d5bf262c6b4bd50f9e34dd10d8.gif)](https://gyazo.com/8e57d8d5bf262c6b4bd50f9e34dd10d8)

* Are you an artist? Share your music with the world!

## File Structure
- Front-end
```
📦client
 ┣ 📂node_modules
 ┣ 📂src
 ┃ ┣ 📂__tests__
 ┃ ┃ ┗ 📜web.test.js
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜api.js
 ┃ ┃ ┗ 📜stats-api.js
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📂albums
 ┃ ┃ ┃ ┣ 📂background
 ┃ ┃ ┃ ┗ 📂icons
 ┃ ┃ ┗ 📂music
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂AddToPlaylist
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┃ ┣ 📜addToPlaylist.css
 ┃ ┃ ┃ ┃ ┣ 📜addToPlaylist.css.map
 ┃ ┃ ┃ ┃ ┗ 📜addToPlaylist.scss
 ┃ ┃ ┃ ┣ 📜AddToPlaylist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂AlbumExplorer
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜AlbumExplorer.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Buttons
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜Button.test.js
 ┃ ┃ ┃ ┣ 📜Button.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂CreatePlaylistModal
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜CreatePlaylistModal.test.js
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜CreatePlaylistModal.js
 ┃ ┃ ┃ ┣ 📜FormSchema.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂DeleteConfirmation
 ┃ ┃ ┣ 📂FavSongsPlaylist
 ┃ ┃ ┃ ┣ 📂FavPlaylistStack
 ┃ ┃ ┃ ┃ ┣ 📜FavPlaylistStack.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📜FavSongsPlaylist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂GeneralList
 ┃ ┃ ┣ 📂IndividualSong
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📂Checkboxes
 ┃ ┃ ┃ ┃ ┣ 📜Checkbox.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂Textarea
 ┃ ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┃ ┣ 📜Textarea.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜Input.test.js
 ┃ ┃ ┃ ┣ 📜Input.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂LoginForm
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂Navbar
 ┃ ┃ ┣ 📂PasswordRecovery
 ┃ ┃ ┣ 📂PaymentInfo
 ┃ ┃ ┣ 📂Playlist
 ┃ ┃ ┃ ┣ 📂EditPlaylistModal
 ┃ ┃ ┃ ┣ 📂PlaylistContextMenu
 ┃ ┃ ┃ ┣ 📂PlaylistDeleteConfirmation
 ┃ ┃ ┃ ┣ 📂PlaylistStack
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜Playlist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂PlaylistCarrusel
 ┃ ┃ ┣ 📂PlaylistGrid
 ┃ ┃ ┣ 📂PlaylistUser
 ┃ ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┃ ┗ 📜PlaylistUser.test.js
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜PlaylistUser.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂ProfileInfo
 ┃ ┃ ┣ 📂RegisterForm
 ┃ ┃ ┣ 📂RightClickMenu
 ┃ ┃ ┣ 📂SearchEngine
 ┃ ┃ ┣ 📂SongBar
 ┃ ┃ ┣ 📂Spinner
 ┃ ┃ ┣ 📂SubscriptionInfo
 ┃ ┃ ┣ 📂UploadInfo
 ┃ ┃ ┣ 📂UploadedSongsPlaylist
 ┃ ┃ ┃ ┣ 📂SongEditModal
 ┃ ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┃ ┣ 📜FormSchema.js
 ┃ ┃ ┃ ┃ ┣ 📜SongEditModal.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂UploadedPlaylistStack
 ┃ ┃ ┃ ┃ ┣ 📜UploadedPlaylistStack.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📜UploadedSongsPlaylist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂UserProfile
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜useLockBodyScroll.js
 ┃ ┃ ┗ 📜useRightClickMenu.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Artist
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜Artist.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂FavSongs
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂IndividualPlaylist
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂MyPlaylists
 ┃ ┃ ┃ ┣ 📂__test__
 ┃ ┃ ┃ ┃ ┗ 📜MyPlaylists.test.js
 ┃ ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┣ 📜MyPlaylists.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂PlaylistUserInfo
 ┃ ┃ ┣ 📂Playlists
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📂Register
 ┃ ┃ ┗ 📂UploadedSongs
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜action.js
 ┃ ┃ ┃ ┣ 📜reducer.js
 ┃ ┃ ┃ ┣ 📜state.js
 ┃ ┃ ┃ ┗ 📜types.js
 ┃ ┃ ┣ 📂player
 ┃ ┃ ┣ 📂playlist
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┣ 📂song
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┣ 📜reducers.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂cloudinary
 ┃ ┃ ┃ ┣ 📜cloudinary.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂util
 ┃ ┃ ┣ 📜test-util.js
 ┃ ┃ ┗ 📜timeFormatter.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.env.local
 ┣ 📜.gitignore
 ┗ 📜package.json
```    
**Repeated file structure omitted*

- Back-end
```
📦server
 ┣ 📂node_modules
 ┃ ┗ 📂.bin
 ┃ ┃ ┗ 📜nodemon
 ┣ 📂src
 ┃ ┣ 📂__tests__
 ┃ ┃ ┗ 📜server.test.js
 ┃ ┣ 📂config
 ┃ ┃ ┣ 📜config.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜playlistController.js
 ┃ ┃ ┣ 📜songController.js
 ┃ ┃ ┗ 📜userController.js
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┗ 📜connect.test.js
 ┃ ┃ ┗ 📜connect.js
 ┃ ┣ 📂middleware
 ┃ ┃ ┣ 📜authMiddleware.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜playlistModel.js
 ┃ ┃ ┣ 📜songModel.js
 ┃ ┃ ┗ 📜userModel.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜playlistRoutes.js
 ┃ ┃ ┣ 📜songRoutes.js
 ┃ ┃ ┗ 📜userRoutes.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜firebase.js
 ┃ ┃ ┃ ┗ 📜verifyIdToken.js
 ┃ ┃ ┗ 📂tests
 ┃ ┣ 📜index.js
 ┃ ┗ 📜server.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜package.json
 ┗ 📜yarn-error.log
```
## Technology used
<details>
<summary>Front-end</summary>

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)
</details>
<details>
<summary>Back-end</summary>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=Nodemon&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=PHP&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)
</details>
