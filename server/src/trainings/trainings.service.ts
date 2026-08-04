import { Injectable } from "@nestjs/common";
import type { createTrainingDto } from "src/types/trainings.types";
import { workoutCategories } from "src/types/workout.types";

@Injectable()
export class TrainigsService {
    private readonly trainings: createTrainingDto[] = [
        {
            user: 'superuser', 
            date: '2026-01-01', 
            sets: [
                {
                    workoutName: 'Прыжки на коробку',
                    countRetry: 10,
                    countRounds: 5
                }
            ],
            trainingSuccess: true
        }
    ]

    getAll() {
        return this.trainings
    }

    createOne(createTraining: createTrainingDto) {
        this.trainings.push(createTraining)
        return `successfule created new training ${createTraining}`
    }

    getByDate(date: string) {
        return this.trainings.filter((train) => {
            return train.date === date
        })
    }

    getByLogin(login: string) {
        return this.trainings.filter((train) => {
            return train.user === login
        })
    }

}