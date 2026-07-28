import { Injectable } from "@nestjs/common";
import type { createTrainingDto } from "src/types/trainings.types";

@Injectable()
export class TrainigsService {
    private readonly trainings: createTrainingDto[] = [
        {
            user: 'w3b-c0d3r', 
            date: '2026-01-01', 
            sets: [], 
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

}