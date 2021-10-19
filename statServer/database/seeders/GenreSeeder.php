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
            ["name" => "Country", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Electronic dance music (EDM)", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Hip-hop", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Indie rock", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Jazz", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "K-pop", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Metal", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Oldies", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Pop", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Rap", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Rhythm & blues (R&B)", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Rock", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Techno", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Folk", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Ska", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Reggae", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Punk", "songs" => "[]", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
        ];
        Genre::insert($genres);
    }
}
