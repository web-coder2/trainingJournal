import { Controller, Get, Post, Query, Body } from "@nestjs/common";
import type { createUserDto, usersAuthDto } from "src/types/users.types";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post('auth')
    usersAuth(@Body() authUser: usersAuthDto) {
        return this.usersService.userAuth(authUser)
    }

    @Post('create')
    usersCreate(@Body() createUser: createUserDto) {
        return this.usersService.createUser(createUser)
    }

    @Get('trainings')
    getUsersTrainings(@Query('login') login: string) {
        return this.usersService.getUsersTrainings(login)
    }

}