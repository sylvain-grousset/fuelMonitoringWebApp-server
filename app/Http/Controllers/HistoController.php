<?php

namespace App\Http\Controllers;

use App\Models\Histo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HistoController extends Controller
{

    /**
     * Return all datas in histo table
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll()
    {
        $histo = Histo::all();

        return compact('histo');
    }

    public function get2Lasts()
    {
        $histo = Histo::orderBy('id','DESC')->limit(2)->get();

        return compact('histo');

    }

}
