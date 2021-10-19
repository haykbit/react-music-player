<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class GenresController extends Controller
{
    public function get_all_genres()
    {
        $genres = Genre::all();
        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $genres

        ]);
    }

    public function get_popular_genres()
    {
        $popularGenres = DB::table('genres')
            ->orderBy('played', 'desc')
            ->take(10)
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $popularGenres

        ]);
    }

    public function get_liked_genres()
    {
        $likedSongs = DB::table('genres')
            ->orderBy('likes', 'desc')
            ->take(10)
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'OK',
            'data' => $likedSongs
        ]);
    }

    public function update_genres()
    {
        $genres = DB::table('genres')->get();

        foreach ($genres as $genre) {
            // Get all songs from a genre
            $genreSongs = DB::table('songs')->where('genre', $genre->name)->get(['original_id'])->toArray();
            $songs = [];
            foreach ($genreSongs as $song) {
                array_push($songs, $song->original_id);
            }

            // Add total likes of songs on genre
            $totalLikes = 0;
            $genreLikes = DB::table('songs')->where('genre', $genre->name)->get(['likes'])->toArray();
            foreach ($genreLikes as $songLikes) {
                $totalLikes += $songLikes->likes;
            }

            // Add total reproductions of songs on genre
            $totalReproductions = 0;
            $genreReps = DB::table('songs')->where('genre', $genre->name)->get(['played'])->toArray();
            foreach ($genreReps as $songReps) {
                $totalReproductions += $songReps->played;
            }


            DB::table('genres')->where('name', $genre->name)->update(['songs' => $songs, 'likes' => $totalLikes, 'popularity' => $totalReproductions]);
        }
    }
}
