<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "songs",
        "popularity",
        "likes"
    ];

    // Setting up the values by default
    protected $attributes = [
        'popularity' => 0,
        'likes' => 0,
    ];

    // Telling laravel/eloquent how to process the songs json param
    // !Remember, when doing POST we need to send songs as a json (stringed array)
    protected $casts = [
        'songs' => 'array'
    ];
}
