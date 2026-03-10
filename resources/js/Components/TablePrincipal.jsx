import React from 'react';

export default function TablePrincipal({ compras }) {
    return (
        <div className="overflow-x-auto bg-white p-2">
            {/* ANCHO: Usa 'min-w-full' para que ocupe todo el espacio 
                BORDE: 'border-collapse' para que las líneas sean únicas (cuadradas)
            */}
            <table className="min-w-full border-collapse border border-gray-600 text-[10px]">
                <thead>
                    <tr className="bg-gray-100">
                        {/* 'border-gray-600' les da ese tono oscuro de formato impreso */}
                        <th className="border border-gray-600 p-1 font-bold text-center w-[10px]">
                            Op. N°
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            Fecha
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[60px]">
                            RIF
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[120px]">
                            Razón Social
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[10px]">
                            Tipo Prov.
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            Número de Comprobante
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            N° de Factura
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            N° de Control
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            N° de Nota de Débito
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            N° de Nota de Crédito
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            Tipo de Trans
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            N° de Factura Afectada
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            Total de compras Incluye I.V.A.
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            Compras sin derecho a Crédito I.V.A.
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            Base Imponible
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[10px]">
                            % Alic
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            Impuesto I.V.A.
                        </th>
                        <th className="border border-gray-600 p-1 font-bold text-center w-[50px]">
                            I.V.A. Retencion al vendedor
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* FILA 1 */}
                    <tr className="hover:bg-gray-50">
                        <td className="border border-gray-600 p-1 text-center">
                            1
                        </td>
                        <td className="border border-gray-600 p-1 text-center font-mono">
                            26/12/2026
                        </td>
                        <td className="border border-gray-600 p-1 text-center font-mono text-[9px]">
                            J-12345678-9
                        </td>
                        <td className="border border-gray-600 p-1 uppercase text-[9px] w-[120px] whitespace-normal break-words leading-tight">
                            TORNILLERIA LA MEJOR DEL MUNDO MUNDIAL C.A.
                        </td>
                        <td className="border border-gray-600 p-1 text-center"></td>
                        <td className="border border-gray-600 p-1 text-center">
                            20260200000010
                        </td>
                        <td className="border border-gray-600 p-1 text-center">
                            000542
                        </td>
                        <td className="border border-gray-600 p-1 text-center">
                            00-123456
                        </td>
                        <td className="border border-gray-600 p-1 text-center">
                            -
                        </td>
                        <td className="border border-gray-600 p-1 text-center">
                            -
                        </td>
                        <td className="border border-gray-600 p-1 text-center">
                            01-REG
                        </td>
                        <td className="border border-gray-600 p-1 text-center">
                            -
                        </td>
                        <td className="border border-gray-600 p-1 text-right font-bold">
                            1,160.00
                        </td>
                        <td className="border border-gray-600 p-1 text-right">
                            0.00
                        </td>
                        <td className="border border-gray-600 p-1 text-right italic">
                            1,000.00
                        </td>
                        <td className="border border-gray-600 p-1 text-center">
                            16
                        </td>
                        <td className="border border-gray-600 p-1 text-right font-bold">
                            160.00
                        </td>
                        <td className="border border-gray-600 p-1 text-right text-red-600">
                            0.00
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}