import { FilePlusCorner } from "lucide-react";
import { useModalStore } from "../store/modal-store";
import logo from '/online-payment.png'
export const Header = () => {
  const { openModal, setItem, setType } = useModalStore();

  const handleAddNF = () => {
    setType("form-create-nf");
    setItem("Register a new Invoice", 'Upload a new Invoice', '')
    openModal();
  }

  return (
    <header className="w-full bg-white border-b shadow-sm rounded-xl">
      <div className="mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nome */}
        <div className="flex items-center flex-row gap-2">
          <img src={logo} alt="logo" width={30} height={30}/>
          <h1 className="text-xl font-bold text-gray-800">
            NF System
          </h1>
        </div>


        {/* Ações */}
        <div className="hidden md:block">
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            onClick={handleAddNF}>
            Register an Invoice
          </button>
        </div>


        <button
          className="md:hidden fixed bottom-6 right-4 bg-gray-900 text-white p-4 rounded-full text-sm hover:bg-gray-800 transition"
          onClick={handleAddNF}>
          <FilePlusCorner size={25} />
        </button>
      </div>
    </header>
  );
};