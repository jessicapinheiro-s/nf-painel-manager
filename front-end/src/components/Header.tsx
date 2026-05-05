import { NavLink } from "react-router-dom";

export const Header = () => {
  const linkBase =
    "px-4 py-2 rounded-lg text-sm font-medium transition";

  const linkActive =
    "bg-gray-900 text-white";

  const linkInactive =
    "text-gray-600 hover:bg-gray-200";

  return (
    <header className="w-full bg-white border-b shadow-sm rounded-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Nome */}
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-bold text-gray-800">
            NF System
          </h1>

          {/* Navegação */}
          <nav className="flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/nfs"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Notas Fiscais
            </NavLink>
          </nav>
        </div>

        {/* Ações */}
        <div>
          <button 
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
          onClick={handleAddNF}>
            Adicionar Nota Fiscal
          </button>
        </div>
      </div>
    </header>
  );
};