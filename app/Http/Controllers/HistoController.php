<?php

namespace App\Http\Controllers;

use App\Models\Histo;
use Illuminate\Http\Request;


class HistoController extends Controller
{

    /**
     * Return all datas in histo table
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll()
    {
        $histo = Histo::all();

        return response()
            ->json(compact('histo'))
            ->header('Content-Type', 'application/json');
    }

}
