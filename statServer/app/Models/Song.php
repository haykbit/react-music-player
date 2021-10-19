<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;
    protected $fillable = [
        "original_id",
        "artist",
        "genre",
        "likes",
        "played"
    ];

    // Setting up the values by default
    protected $attributes = [
        'likes' => 0,
        'played' => 0,
    ];
};
