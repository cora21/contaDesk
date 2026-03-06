<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedores'; // Le indicamos el nombre exacto de la tabla
    protected $fillable = ['rif', 'razon_social', 'tipo_proveedor'];

    // Un proveedor tiene muchas compras
    public function compras()
    {
        return $this->hasMany(Compra::class);
    }
}