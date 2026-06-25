<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_customer_can_register(): void
    {
        $response = $this->withHeader('Origin', 'http://localhost:5173')->postJson('/api/register', [
            'first_name' => 'Alex',
            'last_name' => 'Morgan',
            'email' => ' ALEX@example.com ',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertCreated()
            ->assertJsonPath('email', 'alex@example.com')
            ->assertJsonMissingPath('password')
            ->assertJsonMissingPath('remember_token');

        $this->assertAuthenticated();
        $this->assertDatabaseHas('users', ['email' => 'alex@example.com']);
    }

    public function test_registration_rejects_duplicate_email(): void
    {
        User::factory()->create(['email' => 'alex@example.com']);

        $this->postJson('/api/register', [
            'first_name' => 'Alex',
            'last_name' => 'Morgan',
            'email' => 'ALEX@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ])->assertUnprocessable()
            ->assertJsonValidationErrors('email');
    }

    public function test_customer_can_login(): void
    {
        User::factory()->create([
            'email' => 'alex@example.com',
            'password' => Hash::make('password123'),
        ]);

        $this->withHeader('Origin', 'http://localhost:5173')->postJson('/api/login', [
            'email' => 'alex@example.com',
            'password' => 'password123',
            'remember' => true,
        ])->assertOk()
            ->assertJsonPath('email', 'alex@example.com');

        $this->assertAuthenticated();
    }

    public function test_invalid_login_returns_unauthorized(): void
    {
        User::factory()->create(['email' => 'alex@example.com']);

        $this->postJson('/api/login', [
            'email' => 'alex@example.com',
            'password' => 'wrong-password',
        ])->assertUnauthorized()
            ->assertJsonPath('message', 'The provided credentials are incorrect.');
    }

    public function test_authenticated_customer_can_get_their_profile(): void
    {
        $user = User::factory()->create();

        $this->withHeader('Origin', 'http://localhost:5173')
            ->actingAs($user)
            ->getJson('/api/user')
            ->assertOk()
            ->assertJsonPath('id', $user->id)
            ->assertJsonMissingPath('password');
    }

    public function test_guest_cannot_get_a_profile(): void
    {
        $this->getJson('/api/user')->assertUnauthorized();
    }

    public function test_customer_can_logout(): void
    {
        $user = User::factory()->create();

        $this->withHeader('Origin', 'http://localhost:5173')
            ->actingAs($user)
            ->postJson('/api/logout')
            ->assertOk();

        $this->assertGuest('web');
    }

    public function test_customer_can_update_their_profile(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->putJson('/api/user/profile', [
                'first_name' => 'Jordan',
                'last_name' => 'Lee',
                'email' => 'jordan@example.com',
            ])->assertOk()
            ->assertJsonPath('first_name', 'Jordan')
            ->assertJsonPath('email', 'jordan@example.com');

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'email' => 'jordan@example.com',
        ]);
    }

    public function test_guest_cannot_update_a_profile(): void
    {
        $this->putJson('/api/user/profile', [
            'first_name' => 'Jordan',
            'last_name' => 'Lee',
            'email' => 'jordan@example.com',
        ])->assertUnauthorized();
    }
}
