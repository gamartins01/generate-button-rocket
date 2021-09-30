import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService';

export class AuthenticateUserController {

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserServices = new AuthenticateUserService();

        const token = await authenticateUserServices.execute({ email, password });

        return response.json(token);
    }
}