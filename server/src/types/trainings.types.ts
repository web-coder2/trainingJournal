export type workoutSets = {
    workoutName: string,
    countRetry: number,
    countRounds: number
}


export type createTrainingDto = {
    user: string,
    date: string,
    sets: workoutSets[],
    trainingSuccess: boolean
}