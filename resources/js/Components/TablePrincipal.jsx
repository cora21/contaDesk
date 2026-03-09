import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"; // Asegúrate de que la ruta coincida con tu carpeta

export default function TablePrincipal({ compras }) {
  // Calculamos el total de las facturas cargadas
  const totalGeneral = compras.reduce((acc, compra) => acc + parseFloat(compra.total_incluye_iva), 0);

  return (
    <Table>
      <TableCaption>Resumen del Libro de Compras actual.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Operación</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>RIF / Proveedor</TableHead>
          <TableHead>N° Factura</TableHead>
          <TableHead className="text-right">Base Imponible</TableHead>
          <TableHead className="text-right">IVA</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {compras.length > 0 ? (
          compras.map((compra) => (
            <TableRow key={compra.id}>
              <TableCell className="font-medium">{compra.numero_operacion}</TableCell>
              <TableCell>{compra.fecha_factura}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-bold text-xs">{compra.proveedor?.rif}</span>
                  <span className="text-gray-500 text-xs">{compra.proveedor?.razon_social}</span>
                </div>
              </TableCell>
              <TableCell>{compra.numero_factura}</TableCell>
              <TableCell className="text-right">{compra.base_imponible}</TableCell>
              <TableCell className="text-right">{compra.impuesto_iva}</TableCell>
              <TableCell className="text-right font-bold">{compra.total_incluye_iva}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-10 text-gray-400">
              No hay registros en el libro de compras.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6} className="font-bold">Total General</TableCell>
          <TableCell className="text-right font-bold text-lg text-indigo-600">
            ${totalGeneral.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}