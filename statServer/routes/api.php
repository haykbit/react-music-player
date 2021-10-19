<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SongsController;
use App\Http\Controllers\GenresController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/popular-songs', [SongsController::class, 'get_popular_songs']);
Route::get('/liked-songs', [SongsController::class, 'get_liked_songs']);
Route::get('/new-songs', [SongsController::class, 'get_new_songs']);
Route::patch('/song-like/{id}', [SongsController::class, 'like_song']);
Route::patch('/song-dislike/{id}', [SongsController::class, 'like_song']);
Route::patch('/song-played/{id}', [SongsController::class, 'reproduced_song']);
Route::get('/songs', [SongsController::class, 'get_all_songs']);
Route::post('/song', [SongsController::class, 'new_song']);
Route::delete('/delete-song/{id}', [SongsController::class, 'remove_song']);

Route::get('/popular-genres', [GenresController::class, 'get_popular_songs']);
Route::get('/liked-genres', [GenresController::class, 'get_liked_songs']);
Route::get('/new-genres', [GenresController::class, 'get_new_songs']);
Route::patch('/update-genres', [GenresController::class, 'update_genres']);
