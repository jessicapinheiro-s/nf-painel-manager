import { useModalStore } from "../../store/modal-store";

export const MessageModal = () => {
    const { item } = useModalStore();
    return (
        <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                {item.title
                    .replaceAll("-", " ")
                    .split(" ")
                    .map((i: string) => i.charAt(0).toUpperCase() + i.slice(1))
                    .join(" ")}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {item.description || "Sem descrição"}
            </p>
        </div>
    )
}