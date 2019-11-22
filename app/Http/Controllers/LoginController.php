<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index() {
        return view('index');
    }
    public function login(Request $request) {
        //echo '<pre>';print_r($request->all());exit;
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            //'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Invalid Credentials',
                'status' =>false
            ], 401);
        $user = $request->user();
        return response()->json([
            'user' => $user
        ]);
    }
    public function logout(Request $request) {
        return $request->all();
        $user = Auth::user();
        Auth::logout();
        return response()->json([
            //'user' => $user,
            'success' => true,
            'message' => 'Logout Successful'
        ]);
    }
}
