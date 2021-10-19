<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Song;

class SongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { {
            //DB::table('users')->insert([
            $songs = [
                ["original_id" => "6169963e6f4479521c3b4672", "artist" => "CxYYshpGWbeEy7zdgjd6ckrWBNZ2", "genre" => "Rap", "likes" => 13, "played" => 14],
                ["original_id" => "6169963e6f4479521c3b4673", "artist" => "CxYYshpGWbeEy7zdgjd6ckrWBNZ2", "genre" => "Rap", "likes" => 2, "played" => 53],
                ["original_id" => "6169963e6f4479521c3b4674", "artist" => "CxYYshpGWbeEy7zdgjd6ckrWBNZ2", "genre" => "Rap", "likes" => 89, "played" => 67],
                ["original_id" => "6169963e6f4479521c3b4675", "artist" => "CxYYshpGWbeEy7zdgjd6ckrWBNZ2", "genre" => "Rap", "likes" => 0, "played" => 2],
                ["original_id" => "6169963e6f4479521c3b4676", "artist" => "CxYYshpGWbeEy7zdgjd6ckrWBNZ2", "genre" => "Rap", "likes" => 3, "played" => 5],
                ["original_id" => "6169963e6f4479521c3b4677", "artist" => "zuvAukoB7ogMj7DHaimzKqEFI3C3", "genre" => "Ska", "likes" => 104, "played" => 241],
                ["original_id" => "6169963e6f4479521c3b4678", "artist" => "zuvAukoB7ogMj7DHaimzKqEFI3C3", "genre" => "Ska", "likes" => 25, "played" => 92],
                ["original_id" => "6169963e6f4479521c3b4679", "artist" => "zuvAukoB7ogMj7DHaimzKqEFI3C3", "genre" => "Ska", "likes" => 2, "played" => 10],
                ["original_id" => "6169963e6f4479521c3b467a", "artist" => "zuvAukoB7ogMj7DHaimzKqEFI3C3", "genre" => "Ska", "likes" => 401, "played" => 549],
                ["original_id" => "6169963e6f4479521c3b467b", "artist" => "zuvAukoB7ogMj7DHaimzKqEFI3C3", "genre" => "Ska", "likes" => 13, "played" => 14],
                ["original_id" => "6169963e6f4479521c3b4672", "artist" => "zuvAukoB7ogMj7DHaimzKqEFI3C3", "genre" => "Ska", "likes" => 0, "played" => 0],
            ];
            Song::insert($songs);
        }
    }
}
