import { Controller, Get, Post, Query, Body } from "@nestjs/common";
import type { createWorkoutDto } from "src/types/workout.types";

@Controller('/workout')
export class WorkoutController {
    @Get('getAll')
    getAllWorkouts() {
        return `все виды упражнений в приложение`
    }

    @Get('getByGroup')
    getByGroupWorkouts(@Query('group') group: string) {
        return `список упражнений для групы ${group}`
    }

    @Post('create')
    createNewWorkout(@Body() createDto: createWorkoutDto) {
        return `упражнение ${createDto?.name} успешно доабвлено`
    }
}