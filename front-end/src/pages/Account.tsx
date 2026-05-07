import { Camera, User } from "lucide-react";
import { useUserStore } from "../store/user-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { update_user_data } from "../repository/user-repository";

const personalUserDataSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email()
});

type PersonalUserData = z.infer<typeof personalUserDataSchema>;

export const Account = () => {
    const { user, setUser } = useUserStore();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<PersonalUserData>({
        resolver: zodResolver(personalUserDataSchema),
        defaultValues: {
            name: "",
            email: user?.email
        }
    });

    const onSubmit = async (data: PersonalUserData) => {
        if(!user || !user.id) return;

        try {
            const res = await update_user_data({
                id: user.id,
                name: data.name
            });

            setUser(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
            <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-8">
                
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img
                            src="https://i.pravatar.cc/200"
                            alt="Foto de perfil"
                            className="w-28 h-28 rounded-full object-cover border-4 border-zinc-800"
                        />

                        <div className="absolute bottom-0 right-0 bg-zinc-800 p-2 rounded-full border border-zinc-700">
                            <Camera size={16} className="text-zinc-300" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-white mt-4">
                        My Account
                    </h1>

                    <p className="text-zinc-400 text-sm">
                        Manage your personal account data
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >
                    {/* Name */}
                    <div>
                        <label className="text-zinc-300 text-sm mb-2 block">
                            Name
                        </label>

                        <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-xl px-4">
                            <User size={18} className="text-zinc-400" />

                            <input
                                type="text"
                                {...register("name")}
                                className="w-full bg-transparent outline-none text-white px-3 py-4"
                                placeholder="Your name"
                            />
                        </div>

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-zinc-300 text-sm mb-2 block">
                            Email
                        </label>

                        <input
                            type="email"
                            {...register("email")}
                            disabled
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-zinc-500 cursor-not-allowed"
                        />
                    </div>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Saving..." : "Save"}
                    </button>
                </form>
            </div>
        </div>
    );
};