<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Genre;
use Carbon\Carbon;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genres = [
            ["name" => "Country", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Electronic dance music (EDM)", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Hip-hop", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Indie rock", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Jazz", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "K-pop", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Metal", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Oldies", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Pop", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => 5, "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Rhythm & blues (R&B)", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Rock", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Techno", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Folk", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Ska", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Reggae", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Punk", "songs" => "[]", "popularity" => 5, "likes" => 13, "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
        ];
        Genre::insert($genres);
    }
}
