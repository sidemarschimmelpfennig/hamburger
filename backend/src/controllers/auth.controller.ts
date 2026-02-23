import type { Request, Response } from "express";
import type { IAuthController } from "../interfaces/auth.interface";
import type {
  LoginRequest,
  LogoutRequest,
  RegisterRequest,
} from "../types/auth.types";
import { validateLogin } from "../validations/auth.validation";

export class AuthController implements IAuthController {
  async register(req: Request<RegisterRequest>, res: Response) {
    const { email, password } = req.body;

    return res.json();
  }
  async login(req: Request<{}, {}, LoginRequest>, res: Response) {
    validateLogin(req, res as any, () => {});

    return res.json();
  }

  async logout(req: Request<LogoutRequest>, res: Response) {
    return res.json();
  }
}
