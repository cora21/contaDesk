<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->foreignId('proveedor_id')->constrained('proveedores');
            $table->integer('numero_operacion');
            $table->date('fecha_factura');
            $table->string('numero_factura');
            $table->string('numero_control');
            $table->string('tipo_transaccion'); // 01-Registro, etc.
            $table->decimal('total_incluye_iva', 15, 2);
            $table->decimal('compras_sin_derecho_credito', 15, 2)->default(0);
            $table->decimal('base_imponible', 15, 2);
            $table->decimal('porcentaje_alicuota', 5, 2); // Ej: 16.00
            $table->decimal('impuesto_iva', 15, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compras');
    }
};
