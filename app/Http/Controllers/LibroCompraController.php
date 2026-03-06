<?php

namespace App\Models;

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Compra;
use Inertia\Inertia;

class LibroCompraController extends Controller
{
    public function index()
    {
        // Traemos las compras con su proveedor, notas y retenciones (Eager Loading)
        // Esto evita que la base de datos trabaje de más.
        $compras = Compra::with(['proveedor', 'ajuste', 'retencion'])
            ->orderBy('fecha_factura', 'desc')
            ->get();

        // IMPORTANTE: Aquí enviamos los datos a React
        return Inertia::render('Contabilidad/LibroCompras', [
            'compras' => $compras
        ]);
    }
}
