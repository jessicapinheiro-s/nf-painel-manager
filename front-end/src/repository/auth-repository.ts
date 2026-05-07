import type { PropsUserLogin, PropsUserRegister } from "../types/types-global";
const URL = import.meta.env.VITE_URL_API;

export const registerUser = async ({ email, password }: PropsUserRegister) => {
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
      return {
        sucess: false,
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async ({ email, password }: PropsUserLogin) => {
  if (!email || !password) {
    return;
  }

  try {
    const response = await fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return {
        sucess: false,
      };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
