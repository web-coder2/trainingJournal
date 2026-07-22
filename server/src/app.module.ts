import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { WorkoutController } from './workout/workout.controller';
import { TrainingsController } from './trainings/trainings.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, WorkoutController, TrainingsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
