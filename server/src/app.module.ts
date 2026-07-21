import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutController } from './workout/workout.controller';

@Module({
  imports: [],
  controllers: [AppController, WorkoutController],
  providers: [AppService],
})
export class AppModule {}
