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
            name: 'web-coder', 
            login: 'web-coder', 
            password: 'web-coder' 
        }
    ]

    createUser(newUser: createUserDto) {
        this.usersList.push(newUser)
        return `new user successfuly create ${newUser.name}`
    }

    userAuth(authData: usersAuthDto) {
        return this.usersList.find((user) => {
            user.login === authData.login && user.password === authData.password
        })
    }

    getAll() {
        return this.usersList
    }

    getUsersTrainings(login: string) {
        return this.trainingsService.getByLogin(login)
    }

}