import { useState } from "react";
import { Card, CardBody } from "../components/ui/Card";
import { Header } from "../components/Header";

const mockData = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    name: `NF-${i + 1}`,
    status: i % 3 === 0 ? "processando" : i % 2 === 0 ? "aprovada" : "pendente",
}));

const statusStyles = {
    processando: "bg-orange-100 text-orange-600",
    aprovada: "bg-green-100 text-green-600",
    pendente: "bg-gray-200 text-gray-600",
};

export const DashboardNF = () => {
    const [nfs, setNfs] = useState(mockData);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const total = nfs.length;
    const processing = nfs.filter((nf) => nf.status === "processando").length;
    const approved = nfs.filter((nf) => nf.status === "aprovada").length;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = nfs.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(nfs.length / itemsPerPage);
    const cards = [
        {
            title: "Total",
            text: "Todas as Notas Fiscais cadastradas nesse portal.",
            value: 45,
            colorText: "text-gray-500",
            colorTextPrincipal: "text-yellow-600",
            bg: "bg-white",
        },
        {
            title: "Processando",
            text: "Notas fiscais cadastradas em fase de processamento pelo financeiro.",
            value: 45,
            colorText: "text-gray-500",
            colorTextPrincipal: "text-blue-600",
            bg: "bg-white",
        },
        {
            title: "Aprovadas",
            text: "Notas Fiscais que já foram aprovadas pelo financeiro.",
            value: 45,
            colorText: "text-gray-500",
            colorTextPrincipal: "text-green-600",
            bg: "bg-white",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6 space-y-8">
            <Header/>
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Dashboard de Notas Fiscais
                </h1>
                <p className="text-gray-500">
                    Controle e acompanhamento das NFs do sistema
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    cards.map((card, index) => (
                        <Card className={card.bg} key={index}>
                            <CardBody>
                                <div className="w-full flex flex-row items-start justify-between">
                                    <div >
                                        <h1 className={`text-xl font-bold mb-2 ${card.colorTextPrincipal}`}>
                                            {card.title}
                                        </h1>

                                        <p className={`text-sm ${card.colorText}`}>
                                           {card.text}
                                        </p>
                                    </div>
                                    <div >
                                        <h2 className={`text-2xl font-bold mb-2 ${card.colorTextPrincipal}`}>{card.value}</h2>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))
                }
            </div>

            {/* Lista */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Notas Fiscais
                    </h2>
                    <p className="text-sm text-gray-500">
                        Lista completa das NFs cadastradas
                    </p>
                </div>

                {/* Header da lista */}
                <div className="grid grid-cols-2 px-4 py-2 text-sm text-gray-400 border-b">
                    <span>Nome</span>
                    <span className="text-right">Status</span>
                </div>

                {/* Itens */}
                <div className="divide-y">
                    {currentItems.map((nf) => (
                        <div
                            key={nf.id}
                            className="grid grid-cols-2 items-center px-4 py-3 hover:bg-gray-50 transition"
                        >
                            <span className="font-medium text-gray-700">
                                {nf.name}
                            </span>

                            <div className="flex justify-end">
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusStyles[nf.status] || "bg-gray-100 text-gray-500"
                                        }`}
                                >
                                    {nf.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paginação */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                    >
                        Anterior
                    </button>

                    <span className="text-sm text-gray-500">
                        Página <strong>{currentPage}</strong> de{" "}
                        <strong>{totalPages}</strong>
                    </span>

                    <button
                        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                    >
                        Próxima
                    </button>
                </div>
            </div>
        </div >
    );
};