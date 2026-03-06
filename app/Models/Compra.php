<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    protected $fillable = [
        'proveedor_id',
        'numero_operacion',
        'fecha_factura',
        'numero_factura',
        'numero_control',
        'tipo_transaccion',
        'total_incluye_iva',
        'compras_sin_derecho_credito',
        'base_imponible',
        'porcentaje_alicuota',
        'impuesto_iva'
    ];

    // Relaciones
    public function proveedor()
    {
        return $this->belongsTo(Proveedor::class);
    }

    public function ajuste()
    {
        return $this->hasOne(AjusteCompra::class);
    }

    public function retencion()
    {
        return $this->hasOne(RetencionCompra::class);
    }
}