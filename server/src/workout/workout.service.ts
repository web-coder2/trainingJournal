import { Injectable } from "@nestjs/common";
import type { createWorkoutDto, } from "src/types/workout.types";
import { workoutCategories } from "src/types/workout.types";

@Injectable()
export class WorkoutService {

    private readonly workoutsList: createWorkoutDto[] = [
        {
            name: "Прыжки на коробку",
            forGroup: ['прыгучесть', 'кардио', 'сила ног', 'ловкость'],
            categories: workoutCategories[2],
            imageSource: "/img/jumps.png"
        }
    ]

    getAll() {
        return this.workoutsList
    }

    getByGroup(group: string) {
        return this.workoutsList.filter((workout) => {
            return workout.forGroup.some((workGroup) => workGroup === group)
        })
    }

    createOne(newWorkout: createWorkoutDto) {
        this.workoutsList.push(newWorkout)
    }

}