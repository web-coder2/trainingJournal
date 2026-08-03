import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TrainingModule } from "src/trainings/trainings.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [TrainingModule],
    exports: [UsersService]
})

export class UsersModule {}