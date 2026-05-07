import { getUserByEmail } from "../repository/users-repository.js";
import { prisma } from "../../prisma/prisma.js";
import bcrypt from "bcrypt";
import { generate_jwt_token } from "../utils/utils.js"

export const f_auth_register = async (info_req) => {
    
    const {
        email,
        password
    } = info_req.body;

    if(!email || !password) {
        throw new Error ("Some parameters are missing (email, password)")
    };
    const hashedPassword = await bcrypt.hash(password, 10);

    return await prisma.user.create({
        data: {
            email:email,
            password: hashedPassword
        },
        select: {
            email: true
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
        throw new Error("User does not exist");
    }

    const isValidPassword = await bcrypt.compare(password, userExists.password);

    if(!isValidPassword) {
        throw new Error("wrong password");
    }

    const user_payload = {
        id: userExists.id,
        email: userExists.email
    }
    const secret = process.env.JWT_TOKEN;

    if(!secret) {
        throw new error ('problem to generate user token - secret is missing');
    }

    const token = generate_jwt_token(user_payload, secret, "1hr");
    const user = {
        email: userExists.email,
        id: userExists.id
    };

    if(!token) {
        throw new error ('problem to generate user token')
    }

    return {
        token,
        user
    };
}

export const f_auth_logout = async(info_req) => {

}

