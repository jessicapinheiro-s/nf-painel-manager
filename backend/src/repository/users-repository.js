import { prisma } from "../../prisma/prisma.js";

export const getUserByEmail = async(user_email) => {
    return await prisma.users.findUnique({
        where: {
            email: user_email
        }
    })
}