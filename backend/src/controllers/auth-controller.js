import { f_auth_register, f_auth_login, f_auth_logout } from "../services/auth-service.js";

export const auth_register = async(req, res) => {
    const response = await f_auth_register(req);

    res.status(200).json({
        sucess: true,
        data: response
    });
} 

export const auth_login = async(req, res) => {
    const response = await f_auth_login(req);

    res.status(200).json({
        sucess: true,
        data: response
    });
} 

export const auth_logout = async(req, res) => {
    const response = await f_auth_logout(req);

    res.status(200).json({
        sucess: true,
        data: response
    });
} 