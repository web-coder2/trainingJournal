import { Controller, Get, Post, Query, Body } from "@nestjs/common";
import type { createUserDto, usersAuthDto } from "src/types/users.types";

@Controller('users')
export class UsersController {

    @Post('auth')
    usersAuth(@Body() authUser: usersAuthDto) {
        return `user authed ${authUser?.login}`
    }

    @Post('create')
    usersCreate(@Body() createUser: createUserDto) {
        return `user created ${createUser.name}`
    }

    @Get('trainings')
    getUsersTrainings(@Query('login') login: string) {
        return `user trainings ${login}`
    }

}