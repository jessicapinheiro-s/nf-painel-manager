export const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    const formatedErros = error?.issues?.map((e) => ({
      field: e.path.join("."),
      onmessage: e.message,
    }));

    return res.status(400).json({
      message: "validation process failed",
      errors: formatedErros,
    });
  }
};
