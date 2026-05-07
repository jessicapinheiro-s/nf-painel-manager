import type { PropsFileUpload } from "../types/types-global";

const URL = import.meta.env.VITE_URL_API;
export const uploadFile = async ({ userId, file }: PropsFileUpload) => {
  try {
    const response = await fetch(`${URL}/file/upload`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accepted: "application/json",
      },
      body: JSON.stringify({ userId, file }),
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
