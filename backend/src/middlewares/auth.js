import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }

  try {
    const authToken = req.cookies?.token;

    if(!authToken){
        return res.status(400).json({
            message: "Token missing"
        })
    }

    req.user = jwt.verify(authToken, secret);
  } catch (error) {
    return res.status(500).json({
        message: "Invalid (or Expired) Token"
    })
  }
};
