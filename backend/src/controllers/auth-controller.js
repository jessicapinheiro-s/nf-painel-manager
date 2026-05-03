import { f_auth_register } from "../services/auth-service.js";

export const auth_register = async(req, res) => {
    const response = await f_auth_register(req.body);

    res.status(200).json({
        sucess: true,
        data: response
    });
} 

export const auth_login = (req, res) => {
    const response = await f_auth_login(req.body);

    res.status(200).json({
        sucess: true,
        data: response
    });
} 

export const auth_logout = (req, res) => {
    const response = await f_auth_logout(req.body);

    res.status(200).json({
        sucess: true,
        data: response
    });
} 