import { motion } from "framer-motion"
import { useModalStore } from "../../store/modal-store"

export const LoandingModal = () => {
    const { item } = useModalStore();
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <h3 className="text-xl md:text-xl font-bold text-gray-900 leading-tight">
                {item.title}
            </h3>
            <motion.div
                className="w-10 h-10 border-8 border-black border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear"
                }}
            />
        </div>
    )
}