import { prisma } from "../../prisma/prisma.js";

export const f_auth_register = async (info_req) => {
    
    const {
        email,
        password
    } = info_req.body;

    if(!email || !password) {
        throw new Error ("Some parameters are missing (email, password)")
    };

    return await prisma.user.create({
        data: {
            email:email,
            password: password
        }
    });
}
