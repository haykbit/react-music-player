<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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
            ->take(10)
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
            ->take(10)
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
            ->take(10)
            ->get();
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $newSongs
        ]);
    }

    public function new_song(Request $request)
    {
        $songData = $request->songStats;
        $newSong = DB::table('songs')->insert(
            array(
                'original_id' => $songData['_id'],
                'artist' => $songData['owner'],
                'genre' => $songData['genre'],
                'created_at' =>  Carbon::now(),
                'updated_at' =>  Carbon::now()
            )
        );

        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $newSong
        ]);
    }

    public function like_song(Request $request, $id)
    {
        $likes = DB::table('songs')->where('original_id', $id)->get(['likes']);
        DB::table('songs')->where('original_id', $id)->update([
            'likes' => $likes[0]->likes + 1
        ]);

        return response()->json([
            'success' => true,
            'message' => 'OK',
        ]);
    }

    public function dislike_song(Request $request, $id)
    {
        $likes = DB::table('songs')->where('original_id', $id)->get(['likes']);
        if ($likes[0]->likes >= 0) {

            DB::table('songs')->where('original_id', $id)->update([
                'likes' => $likes[0]->likes - 1
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'OK',
        ]);
    }

    public function reproduced_song(Request $request, $id)
    {
        $plays = DB::table('songs')->where('original_id', $id)->get(['played']);
        DB::table('songs')->where('original_id', $id)->update([
            'played' => $plays[0]->played + 1
        ]);

        return response()->json([
            'success' => true,
            'message' => 'OK',
        ]);
    }

    public function remove_song(Request $request, $id)
    {
        $deletedSong = DB::table('songs')->where('original_id', $id)->delete();

        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $deletedSong
        ]);
    }
}
