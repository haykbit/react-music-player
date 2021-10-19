<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SongsController;

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

Route::get('/songs', [SongsController::class, 'get_all_songs']);
Route::get('/popular-songs', [SongsController::class, 'get_popular_songs']);
Route::get('/liked-songs', [SongsController::class, 'get_liked_songs']);
Route::get('/new-songs', [SongsController::class, 'get_new_songs']);
