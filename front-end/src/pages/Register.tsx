import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PropsUserRegister } from "../types/types-global";
import { registerUser } from "../repository/auth-repository";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../store/modal-store";

// Schema de validação
const registerSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Formato de email inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  confirmPassword: z.string().min(6, { message: "Confirme sua senha" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const {setClassName, setType, openModal, closeModal, setItem} = useModalStore()
  const navigate = useNavigate();
  const onSubmit = async ({ email, password }: PropsUserRegister) => {
    console.log(email, password)
    if (!email || !password) {
      console.error('no email ou no password')
      return
    }

    setItem("Creating Account", "", "")
    setClassName("w-[200px] max-h-[20vh]");
    setType("loanding");
    openModal();

    const res = await registerUser({ email, password })
    closeModal();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create an Account</h1>
          <p className="text-gray-500 mt-2">
            Please fill in the fields to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors
                ${errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                }`}
              placeholder="exemplo@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors
                ${errors.password
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                }`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirmar senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors
                ${errors.confirmPassword
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                }`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button onClick={() => navigate('/')} className="underline">Login</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;