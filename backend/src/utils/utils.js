import jwt from "jsonwebtoken";

export const generate_safe_name = (file_name, user_id) => {
    if(!file_name || !user_id) {
        return ''
    }
    const today = new Date();
    return `${user_id}/${today.getTime()}/${file_name.replace(/[^a-zA-Z0-9.]/g, "_")}`
}

export const generate_jwt_token = (payload, secret, expiresIn) => {
  const token = jwt.sign(
    {
      id: payload.id,
      email: payload.email,
    },
    secret,
    /** @type {any} */ ({ expiresIn })
  );

  return token;
};