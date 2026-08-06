<template>
    <h3>{{ title }}</h3>

    <div class="container-fluid mt-5">

        <div class="w-50 mb-5 mt-5">
            <h5>Фильтр упражнений по групе тела</h5>
            <select class="form-control" v-model="selectedGroup">
                <option v-for="(item) in groupList" :value="item" :label="item"></option>
            </select>
            <div class="d-flex mt-3">
                <button class="btn btn-dark" @click="fetchFilterWorkouts()">Поиск</button>
                <button class="btn btn-danger" style="margin-left: 10px;" @click="resetFilters()">Сбросить</button>
                <button class="btn btn-success" style="margin-left: 10px;" @click="showModalCreate = true">создать</button>
            </div>
        </div>

        <h5>Все упражнения</h5>
        <div class="list-group mt-5" v-if="workoutsList">
            <div class="list-group-item mb-5" v-for="(item, index) in workoutsList">
                <strong>{{ item.name }} ({{ item.categories }})</strong>
                <p>используются характеристи:</p>
                <div class="card mt-2 p-3 ">
                    <span v-for="(group, idx) in item.forGroup">{{ group }}</span>
                </div>
                <img class="mt-3" :src="item.imageSource">
            </div>
        </div>
    </div>

    <div v-if="showModalCreate" class="modal fade show" style="display: block;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Создание упражнения</h4>
                </div>
                <div class="modal-body">
                    <p>Форма для создания упражнения</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="showModalCreate = false">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showModalCreate" class="modal-backdrop fade show"></div>

</template>

<script>

    export default {
        data() {
            return {
                title: "Список упражнений",
                workoutsList: null,
                groupList: ['прыгучесть', 'кардио', 'сила ног', 'ловкость', 'сила плеч'],
                selectedGroup: null,
                showModalCreate: false
            }
        },
        methods: {
            async fetchWorkouts() {
                try {
                    const response = await fetch('http://localhost:3000/workout/getAll')
                    const result = await response.json()
                    this.workoutsList = result
                } catch (e) {
                    console.log(`error to fetch workouts ${e.message}`)
                }
            },
            async fetchFilterWorkouts() {
                try {
                    const response = await fetch(`http://localhost:3000/workout/getByGroup/?group=${this.selectedGroup}`)
                    const result = await response.json()
                    this.workoutsList = result
                } catch (e) {
                    console.log(`error to fetch workouts ${e.message}`)
                }
            },
            async resetFilters() {
                this.selectedGroup = null
                await this.fetchWorkouts()
            }
        },
        async beforeMount() {
            await this.fetchWorkouts()
        }
    }

</script>