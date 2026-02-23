export const validateRegister = (req: any, res: any, next: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  next();
};

export const validateLogin = (req: any, res: any, next: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  next();
};

export const validateLogout = (req: any, res: any, next: any) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token é obrigatório" });
  }

  next();
};
