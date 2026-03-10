import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TablePrincipal from '@/Components/TablePrincipal'; // IMPORTANTE: Sin esto fallará
import { Button } from '@/Components/ui/button'; // Usando el botón de shadcn
import { PlusCircle } from 'lucide-react'; // Icono opcional para que se vea más pro

export default function LibroCompras({ auth, compras }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Libro de Compras
                    </h2>
                </div>
            }
        >
            <Head title="Libro de Compras" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        {/* Tabla de shadcn con los datos de Laravel */}
                        <div className="rounded-md border">
                            <TablePrincipal compras={compras} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}