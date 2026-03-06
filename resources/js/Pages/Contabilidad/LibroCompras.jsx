import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function LibroCompras({ auth, compras }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Libro de Compras</h2>}
        >
            <Head title="Libro de Compras" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        {/* Aquí es donde Windsurf o tú diseñarán la tabla profesional */}
                        <p>Tienes {compras.length} facturas registradas.</p>
                        
                        {/* Ejemplo rápido de cómo ver los datos */}
                        <pre className="text-xs bg-gray-100 p-4 mt-4">
                            {JSON.stringify(compras, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}