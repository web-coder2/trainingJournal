import { Module } from "@nestjs/common";
import { TrainingsController } from "./trainings.controller";
import { TrainigsService } from "./trainings.service";

@Module({
    controllers: [TrainingsController],
    providers: [TrainigsService],
    exports: [TrainigsService]
})

export class TrainingModule {}