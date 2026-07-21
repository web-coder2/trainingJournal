export type workoutSets = {
    workoutName: string,
    countRetry: number,
    countRounds: number
}


export type createTrainingDto = {
    date: string,
    sets: workoutSets[],
    trainingSuccess: boolean
}