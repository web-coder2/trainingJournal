<template>
    <div class="container-fluid mt-3">
        <h3>{{ title }}</h3>
        <div class="mt-5">
            <h5>Список тренировок</h5>
            <div class="list-group mt-5" v-if="trainingsList">
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
                trainingsList: null,
            }
        },
        methods: {
            async fetchAllTrainings() {
                try {
                    const response = await fetch('http://localhost:3000/trainings/getAll')
                    const result = await response.json()
                    this.trainingsList = result
                } catch (e) {
                    console.log(e.message)
                }
            }
        },
        async beforeMount() {
            await this.fetchAllTrainings()
        }
    }

</script>