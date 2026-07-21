import { Controller, Get, Post, Query, Body } from "@nestjs/common";
import type { createTrainingDto } from "src/types/trainings.types";

@Controller('trainings')
export class TrainingsController {
    @Get('getAll')
    getAll() {
        return `история всех тренировок`
    }

    @Get('getByDate')
    getByDate(@Query('date') date: string) {
        return `тренировки за время ${date}`
    }

    @Post('create')
    createNewTraining(@Body() createTraining: createTrainingDto) {
        return `добавлена новая тренировка в ${createTraining?.date}`
    }
}