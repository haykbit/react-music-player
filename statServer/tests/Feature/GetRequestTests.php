<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetRequestTests extends TestCase
{

    /** @test **/
    function all_songs_request()
    {
        $response = $this->get('/songs');
        $response->assertStatus(200);
        $response->assertSee('Ok');
    }
}
