<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HistoController;


Route::get('/', function () {
    //return view('welcome');
});

Route::get('/getAll', [App\Http\Controllers\HistoController::class, 'getAll']);
Route::get('/get2Lasts', [App\Http\Controllers\HistoController::class, 'get2Lasts']);
