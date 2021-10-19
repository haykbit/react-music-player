<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

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
}
