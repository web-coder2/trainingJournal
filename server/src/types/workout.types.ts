export enum workoutCategories {
    FORCE = 'силовая',
    SPEED = 'скорость',
    CARDIO = 'кардио',
    COORD = 'координация'
}

export type createWorkoutDto = {
    name: string,
    forGroup: string[],
    categories: workoutCategories,
    imageSource: string
}