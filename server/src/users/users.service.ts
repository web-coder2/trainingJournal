import { Injectable } from "@nestjs/common";
import type { createUserDto, usersAuthDto } from "../types/users.types"
import { TrainigsService } from "src/trainings/trainings.service";

@Injectable()
export class UsersService {

    constructor(
        private readonly trainingsService: TrainigsService
    ) {}

    private readonly usersList: createUserDto[] = [
        { 
            name: 'superuser', 
            login: 'admin', 
            password: 'admin' 
        }
    ]

    createUser(newUser: createUserDto) {
        this.usersList.push(newUser)
        return `new user successfuly create ${newUser.name}`
    }

    userAuth(authData: usersAuthDto) {
        const user = this.usersList.find((user) => {
            return user.login === authData.login && user.password === authData.password
        })

        if (user) {
            return { isAuth: true, user }
        } else {
            return { isAuth: false, user: null }
        }

    }

    getAll() {
        return this.usersList
    }

    getUsersTrainings(login: string) {
        return this.trainingsService.getByLogin(login)
    }

}