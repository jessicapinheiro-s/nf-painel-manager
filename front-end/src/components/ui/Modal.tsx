import { motion } from "framer-motion"
import { X } from "lucide-react";
import type { ProjectModalProps } from "../../types/types-global";


export function Modal({ item, onClose, className }: ProjectModalProps) {
    return (
        <>
            <motion.div
                className="fixed inset-0 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    transition: { delay: 0.2 }
                }}
                transition={{ duration: 0.5, delay: 0 }}
                onClick={onClose}
            />
            <motion.div
                layoutId={`card-${item.id}`}
                className={`fixed inset-0 m-auto w-[900px] max-h-[80vh] bg-zinc-900 rounded-2xl p-5 flex flex-col  ${className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                exit={{
                    opacity: 0,
                    transition: { delay: 0.2 }
                }}
            >
                <button onClick={onClose}><X size={25} /></button>
                <div className="w-full relative h-full flex flex-col p-6 gap-2 py-4 md:py-6 overflow-y-auto custom-scroll ">
                    {/* HEADER */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden group">
                    </div>
                    <div className="mb-4">
                        {item.featured && (
                            <span className="inline-block px-3 py-1 bg-linear-to-r from-indigo-500/20 to-purple-600/20 text-indigo-300 text-xs font-semibold rounded-full mb-2 border border-indigo-500/30">
                                ⭐ Destaque
                            </span>
                        )}

                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            {item.name
                                .replaceAll("-", " ")
                                .split(" ")
                                .map((i: string) => i.charAt(0).toUpperCase() + i.slice(1))
                                .join(" ")}
                        </h3>

                        <p className="text-xs text-slate-500 mt-1">{item.name}</p>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                        {item.description || "Sem descrição"}
                    </p>

                    {/* TECH TAGS (se tiver topics futuramente melhor ainda) */}
                    {item.category && (
                        <div className="mb-4">
                            
                        </div>
                    )}

                    {/* STATS */}
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 flex-wrap">
                        {item.language && (
                            <div className="flex items-center gap-1">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{  }}
                                />
                                {item.language}
                            </div>
                        )}

                        <div className="flex items-center gap-1">
                            ⭐ {item.stars}
                        </div>

                        <div className="flex items-center gap-1">
                            🍴 {item.forks}
                        </div>
                    </div>

                    {/* LINKS (AGORA SIM IMPORTANTE) */}
                    <div className="flex gap-3 mt-auto">
                        {/* GitHub */}
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
                        >
                            <div className="flex items-center gap-2">
                                <span>GitHub</span>
                                <svg
                                    className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </div>
                        </a>

                        {/* Deploy */}
                        {item.homepage && (
                            <a
                                href={item.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition"
                            >
                                <div className="flex items-center gap-2">
                                    <span>Ver projeto</span>
                                    <svg
                                        className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </div>
                            </a>
                        )}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-4 text-xs text-slate-500">
                        Atualizado em {(item.updatedAt)}
                    </div>
                </div>
            </motion.div>
        </>
    )
}