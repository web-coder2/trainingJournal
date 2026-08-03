import { Controller, Get, Post, Query, Body } from "@nestjs/common";
import type { createWorkoutDto } from "src/types/workout.types";
import { WorkoutService } from "./workout.service";

@Controller('/workout')
export class WorkoutController {

    constructor(
        private readonly workoutService: WorkoutService
    ) {}

    @Get('getAll')
    getAllWorkouts() {
        return this.workoutService.getAll()
    }

    @Get('getByGroup')
    getByGroupWorkouts(@Query('group') group: string) {
        return this.workoutService.getByGroup(group)
    }

    @Post('create')
    createNewWorkout(@Body() createDto: createWorkoutDto) {
        return this.workoutService.createOne(createDto)
    }
}