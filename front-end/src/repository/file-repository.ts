const URL = import.meta.env.VITE_URL_API;
export const uploadFile = async () => {
  try {
    const response = await fetch(`${URL}/`);

    if (!response.ok) {
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
