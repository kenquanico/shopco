<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request): UserResource
    {
        $user = User::create($request->validated());

        Auth::login($user);
        $request->session()->regenerate();

        return new UserResource($user);
    }

    public function login(LoginRequest $request): UserResource|JsonResponse
    {
        $credentials = $request->safe()->only(['email', 'password']);

        if (! Auth::attempt($credentials, $request->boolean('remember'))) {
            return response()->json(['message' => 'The provided credentials are incorrect.'], 401);
        }

        $request->session()->regenerate();

        return new UserResource($request->user());
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out.']);
    }
}
