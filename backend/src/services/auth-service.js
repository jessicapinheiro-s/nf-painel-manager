import { getUserByEmail } from "src/repository/users-repository.js";
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

export const f_auth_login = async(info_req) => {
    const {
        email,
        password
    } = info_req.body;


    if(!email || !password){
        throw new Error('some properties are missing (email, password)');
    }

    const userExists = await getUserByEmail(email);

    if(!userExists) {
        throw new Error("User don't exist");
    }

    const user_payload = {
        id: userExists.id,
        email: userExists.email
    }
    const secret = process.env.JWT_TOKEN;
    
}

export const f_auth_logout = async(info_req) => {

}
