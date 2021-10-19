<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class SongsController extends Controller
{

    public function get_all_songs()
    {
        $songs = Song::all();
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $songs

        ]);
    }

    public function get_popular_songs()
    {
        $popularSongs = DB::table('songs')
            ->orderBy('played', 'desc')
            ->take(20)
            ->get();
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $popularSongs
        ]);
    }

    public function get_liked_songs()
    {
        $likedSongs = DB::table('songs')
            ->orderBy('likes', 'desc')
            ->take(20)
            ->get();
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $likedSongs
        ]);
    }

    public function get_new_songs()
    {
        $newSongs = DB::table('songs')
            ->orderBy('created_at', 'desc')
            ->take(20)
            ->get();
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $newSongs
        ]);
    }

    public function new_song(Request $request)
    {
        $newSong = DB::table('songs');
    }
}
