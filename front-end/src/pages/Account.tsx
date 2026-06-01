import { Camera, LogOut, Mail, User } from "lucide-react";
import { useUserStore } from "../store/user-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { update_user_data } from "../repository/user-repository";
import { AvatarCrop } from "../components/ui/AvatarCrop";
import { useState } from "react";
import { logOut } from "../repository/auth-repository";

const personalUserDataSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email()
});

type PersonalUserData = z.infer<typeof personalUserDataSchema>;

export const Account = () => {
    const { user, setUser } = useUserStore();
    const [isEditing, setIsEditing] = useState(false);

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
        if (!user || !user.id) return;

        try {
            const res = await update_user_data({
                id: user.id,
                name: data.name
            });

            if (res.sucess) {
                setUser((prev: any) => ({
                    ...prev,
                    name: data.name
                }));
            }

        } catch (error) {
            console.log(error);
        }
    };

    const onLogOut = async() => {
        await logOut();
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white rounded-[32px] shadow-2xl overflow-hidden border border-zinc-200">

                {/* HEADER */}
                <div className="relative bg-gray-900 px-8 py-10">
                    <div className="absolute top-6 right-6">
                        <button
                            className="
                            w-11 h-11 rounded-full
                            bg-white/10 hover:bg-white/20
                            transition flex items-center justify-center
                        "
                        onClick={onLogOut}
                        >
                            <LogOut size={20} className="text-white" />
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                        {/* AVATAR */}
                        <div className="relative">
                            <AvatarCrop />
                        </div>

                        {/* USER INFO */}
                        <div className="flex flex-col justify-center text-center md:text-left">
                            <h1 className="text-3xl font-bold text-white tracking-tight">
                                {user?.name ?? user?.email?.split("@")[0]}
                            </h1>

                            <p className="text-zinc-300 mt-1">
                                {user?.email}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing((prev) => !prev)}
                                    className="
                                    px-5 py-2.5 rounded-xl
                                    bg-white text-gray-900
                                    font-medium text-sm
                                    hover:scale-[1.02]
                                    active:scale-[0.98]
                                    transition
                                "
                                >
                                    {isEditing ? "Cancel Editing" : "Edit Information"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-8 space-y-6"
                >

                    {/* ACCOUNT TITLE */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                My Account
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                Manage your personal information
                            </p>
                        </div>
                    </div>

                    {/* NAME */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Name
                        </label>

                        <div
                            className={`
                            flex items-center rounded-2xl px-4 border transition
                            ${isEditing
                                    ? "bg-white border-gray-300 focus-within:border-gray-900 shadow-sm"
                                    : "bg-gray-100 border-gray-100"}
                        `}
                        >
                            <User size={18} className="text-zinc-400" />

                            <input
                                type="text"
                                {...register("name")}
                                disabled={!isEditing}
                                placeholder="Your name"
                                className="
                                w-full px-3 py-4 bg-transparent
                                outline-none text-gray-900
                                disabled:text-gray-500
                            "
                            />
                        </div>

                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Email
                        </label>

                        <div className="flex items-center rounded-2xl px-4 bg-gray-100 border border-gray-100">
                            <Mail size={18} className="text-zinc-400" />

                            <input
                                type="email"
                                {...register("email")}
                                disabled
                                className="
                                w-full px-3 py-4 bg-transparent
                                text-gray-500 cursor-not-allowed
                                outline-none
                            "
                            />
                        </div>

                        <p className="text-xs text-gray-400">
                            Email cannot be changed.
                        </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="pt-4 flex gap-4">
                        <button
                            type="submit"
                            disabled={!isEditing || isSubmitting}
                            className="
                            flex-1 bg-gray-900 text-white
                            font-semibold py-4 rounded-2xl
                            hover:opacity-90 transition
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                        "
                        >
                            {isSubmitting ? "Saving..." : "Save Changes"}
                        </button>

                        {isEditing && (
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="
                                px-6 rounded-2xl border
                                border-gray-300 text-gray-700
                                hover:bg-gray-100 transition
                            "
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};