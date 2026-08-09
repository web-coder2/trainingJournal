import { Injectable } from "@nestjs/common";
import type { createWorkoutDto, } from "src/types/workout.types";
import { workoutCategories } from "src/types/workout.types";

@Injectable()
export class WorkoutService {

    private readonly workoutsList: createWorkoutDto[] = [
        {
            name: "Прыжки на коробку",
            forGroup: ['прыгучесть', 'кардио', 'сила ног', 'ловкость'],
            categories: workoutCategories.CARDIO,
            imageSource: "/img/jumps.png"
        },
        {
            name: "Взбирание на стену",
            forGroup: ['ловкость', 'сила плеч'],
            categories: workoutCategories.FORCE,
            imageSource: "/img/climb.png"
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
        try {
            this.workoutsList.push(newWorkout)
            return `new workout created successfuly ${newWorkout}`
        } catch (e) {
            const errMsg = `error by create new workout ${e.message}`
            return errMsg
        }
    }

}