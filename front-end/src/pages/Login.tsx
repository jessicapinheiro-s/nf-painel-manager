import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from "../repository/auth-repository";
import type { PropsUserRegister } from "../types/types-global";
import { useUserStore } from "../store/user-store";
import { useModalStore } from "../store/modal-store";

// Schema de validação
const loginSchema = z.object({
  email: z.string()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Formato de email inválido" }),
  password: z.string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
});



const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const { setClassName, setType, openModal, closeModal, setItem } = useModalStore();

  const onSubmit = async ({ email, password }: PropsUserRegister) => {
    if (!email || !password) {
      console.error('no email ou no password')
      return
    }
    setItem("Authenticating", "", "")
    setClassName("w-[400px] max-h-[30vh]");
    setType("loanding");
    openModal();

    const res = await login({ email, password });
    closeModal();
    setUser(res.data);
    if(res.sucess) {
      navigate('/dashboard-nf');
    }

    
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back!</h1>
          <p className="text-gray-500 mt-2">Please login to acess your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo de Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors
                ${errors.email
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
              placeholder="exemplo@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Campo de Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              {...register("password")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors
                ${errors.password
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Botão de Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md"
          >
            {isSubmitting ? "Carregando..." : "Entrar na conta"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Hadn't registered yet? <button onClick={() => navigate('/register')} className="underline">Create an Account</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;