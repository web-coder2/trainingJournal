import { Module } from "@nestjs/common";
import { TrainingsController } from "./trainings.controller";

@Module({
    controllers: [TrainingsController]
})

export class TrainingModule {}