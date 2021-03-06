<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Error;

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
            ->take(7)
            ->get(['original_id']);
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
            ->take(7)
            ->get(['original_id']);
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
            ->take(7)
            ->get(['original_id']);
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $newSongs
        ]);
    }

    public function new_song(Request $request)
    {
        $songData = $request->songData;
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

    public function reproduced_song(Request $request, $id)
    {
        try {
            $plays = DB::table('songs')->where('original_id', $id)->get();
            DB::table('songs')->where('original_id', $id)->update([
                'played' => $plays[0]->played + 1
            ]);

            return response()->json([
                'success' => true,
                'message' => 'OK',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong',
            ]);
        }
    }

    public function remove_song(Request $request, $id)
    {
        error_log($id);
        $deletedSong = DB::table('songs')->where('original_id', $id)->delete();

        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $deletedSong
        ]);
    }

    public function get_top_by_genre(Request $request)
    {
        $bestGenreSongs = DB::table('songs')
            ->where('genre', $request->genre)
            ->orderBy('played', 'desc')
            ->take(3)
            ->get(['original_id']);
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $bestGenreSongs
        ]);
    }
}
