import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UsersRepositories } from "../repositories/UsersRepositories"


type IAuthenticateRequest = {
    email: string,
    password: string,
}

export class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email,
        });

        if (!user)
            throw new Error("Email/Password incorrect");

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch)
            throw new Error("Email/Password incorrect");

        const token = sign({
            email: user.email
        }, "df5ea29924d39c3be8785734f13169c6", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}
