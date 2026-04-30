import type { PropsUserRegister } from "../types/types-global";

export const registerUser = async ({ email, password }: PropsUserRegister) => {
  const URL = import.meta.env.VITE_URL_API;

  try {
    const response = await fetch(`${URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    return;
  } catch (error) {
    throw error;
  }
};
