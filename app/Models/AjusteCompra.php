<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AjusteCompra extends Model
{
    protected $table = 'ajustes_compras';
    protected $fillable = ['compra_id', 'numero_nota_credito', 'numero_nota_debito', 'factura_afectada'];

    public function compra()
    {
        return $this->belongsTo(Compra::class);
    }
}