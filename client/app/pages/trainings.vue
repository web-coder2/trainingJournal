<template>
    <div class="container-fluid mt-3">
        <h3>{{ title }}</h3>
        <div class="mt-5">
            <h5>Список тренировок</h5>
            <div class="list-group mt-5">
                <div class="list-group-item" v-for="(item, index) in trainingsList">
                    <strong>{{ item.user }}</strong>
                    <p>Список сетов за тренировку</p>
                    <div class="card mb-3">
                        <div class="card-body p-2">
                            <div v-for="(set, idx) in item.sets" :key="idx" class="border rounded p-2 mb-2 bg-light">
                                <p class="mb-1 font-weight-bold">{{ set.workoutName }}: <strong>{{ set.countRetry }} повторений</strong></p>
                                <p>Раундов: <strong>{{ set.countRounds }}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <strong>{{ item.date }}</strong>
                        <strong :class="item.trainingSuccess ? 'text-success' : 'text-danger'">{{ item.trainingSuccess ? 'Успешно выполнено' : 'Ослаблена тренировка' }}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                title: "вкладка тренировок",
                trainingsList: [
                    { 
                        user: 'w3b-c0d3r', 
                        date: '2026-01-01', 
                        sets: [
                            { workoutName: 'Прыжки на коробку', countRetry: 15, countRounds: 5 }
                        ],
                        trainingSuccess: true
                    }
                ]
            }
        }
    }

</script>