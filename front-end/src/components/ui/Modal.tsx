import { motion } from "framer-motion"
import { X } from "lucide-react";
import { RegisterNfFormModal } from "../modal/Register-NF";
import { LoandingModal } from "../modal/Loanding";
import { useModalStore } from "../../store/modal-store";
import { MessageModal } from "../modal/Message";


export default function Modal() {
    const { className, isOpen, closeModal, type } = useModalStore();
    return (
        isOpen && (
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
                    onClick={type !== "loanding" ? closeModal : undefined}
                />
                <motion.div
                    className={`fixed inset-0 m-auto w-[900px] max-h-[50vh] bg-white rounded-2xl p-5 flex flex-col  ${className}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0.2 }
                    }}
                >
                    {
                        type !== "loanding" && (
                            <div className="text-right">
                                <button onClick={closeModal}><X size={25} /></button>
                            </div>
                        )
                    }
                    <div className="w-full relative h-full flex flex-col px-6 gap-2 py-4 md:py-2 overflow-y-auto custom-scroll ">
                        {
                            type === "message" ? (
                                <MessageModal />
                            ) : type === "form-create-nf" ? (
                                <RegisterNfFormModal />
                            ) : (
                                <LoandingModal />
                            )
                        }


                    </div>
                </motion.div>
            </>
        )

    )
}