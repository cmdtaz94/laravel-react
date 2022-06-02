<?php

use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', function () {
    return redirect()->route('auth');
});

Route::group(
    ['middleware' => ['auth']],
    function () {

        Route::prefix('auth')->name('auth')->group(function () {
            Route::view('/{any?}', 'app')->where('any', '.*');
        });

        Route::resource('employees', EmployeeController::class);
        Route::get('auth-user', [UserController::class, 'index'])->name('authenticated-user');
    }
);
