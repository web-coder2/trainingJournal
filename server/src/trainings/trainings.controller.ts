import { Controller, Get, Post, Query, Body } from "@nestjs/common";
import type { createTrainingDto } from "src/types/trainings.types";
import { TrainigsService } from "./trainings.service";

@Controller('trainings')
export class TrainingsController {
    constructor(private readonly trainingsService: TrainigsService) {}

    @Get('getAll')
    getAll() {
        return this.trainingsService.getAll()
    }

    @Get('getByDate')
    getByDate(@Query('date') date: string) {
        return this.trainingsService.getByDate(date)
    }

    @Post('create')
    createNewTraining(@Body() createTraining: createTrainingDto) {
        return this.trainingsService.createOne(createTraining)
    }
}