import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useModalStore } from "../../store/modal-store";
import { motion } from "framer-motion";
import { uploadFile } from "../../repository/file-repository";

type FormData = {
    file: FileList;
}

export const RegisterNfFormModal = () => {
    const nfSchema = z.object({
        file: z.any().refine((file) => file.length === 1, "File is required")
    })

    const { item } = useModalStore();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(nfSchema)
    });

    const file = watch("file");
    
    const onSubmit = async() => {
        const res = await uploadFile();
    }

    return (
        <div>
            <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {item.title
                        .replaceAll("-", " ")
                        .split(" ")
                        .map((i: string) => i.charAt(0).toUpperCase() + i.slice(1))
                        .join(" ")}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {item.description || "No description"}
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 justify-between h-full">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm text-slate-400">Invoice</span>
                        <motion.label
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="cursor-pointer border-2 border-dashed border-slate-600 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-slate-400 transition"
                        >
                            📎 Click here to attach your Invoice

                            <input
                                type="file"
                                {...register("file")}
                                className="hidden"
                            />
                        </motion.label>

                        {errors.file && (
                            <span className="text-red-500 text-sm">
                                {errors.file.message}
                            </span>
                        )}

                        {file?.[0] && (
                            <span className="text-xs text-slate-400">
                                {file[0].name}
                            </span>
                        )}
                    </label>
                    <button
                        type="submit"
                        className="bg-gray-900 text-white p-4 rounded-full text-sm hover:bg-gray-800 transition"
                    > {isSubmitting ? "Sending" : "Register Invoice"}</button>
                </div>
            </form>
        </div>
    )
}