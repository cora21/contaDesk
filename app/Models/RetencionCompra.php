<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetencionCompra extends Model
{
    protected $table = 'retenciones_compras';
    protected $fillable = ['compra_id', 'numero_comprobante', 'iva_retenido'];

    public function compra()
    {
        return $this->belongsTo(Compra::class);
    }
}