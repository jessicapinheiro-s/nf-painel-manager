import type { PropsUpdateUserData } from "../types/types-global";

const URL = import.meta.env.VITE_URL_API;

export const update_user_data = async ({ name, id }: PropsUpdateUserData) => {
    if(!name || !id) {
        return
    }

    try {
        const response = await fetch(`${URL}/user/update`, {
            method: "PATCH",
            headers: {
                "accept": "application/json"
            },
            body: JSON.stringify({name, id})
        });

        if(!response.ok) {
            return {
                sucess: false
            }
        }

        const data = await response.json();
        return data;
    }catch(error) {
        throw error;
    }
};


export const get_user_porfile_img = async() =>{
    try {

    }catch(error) {

    }
}