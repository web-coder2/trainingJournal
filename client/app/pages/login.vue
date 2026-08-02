<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="p-4 border rounded" style="max-width: 400px; width: 100%;">
            <h2 class="text-center mb-4">{{ title }}</h2>
            <div class="mb-3">
                <label class="form-label">Логин</label>
                <input class="form-control" v-model="authData.login" placeholder="Введите логин" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Пароль</label>
                <input class="form-control" v-model="authData.password" placeholder="Введите пароль" required>
            </div>
            <button type="button" @click="authUser()" class="btn btn-dark w-100">Войти</button>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                authData: {
                    login: "",
                    password: ""
                },
                title: "Авторизация"
            }
        },
        methods: {
            async authUser() {
                try {
                    const response = await fetch('http://localhost:3000/users/auth', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ authUser: this.authData })
                    })
                    const result = await response.json()
                    console.log(result)
                } catch (e) {
                    console.log(`ошибка авторизации ${e.message}`)
                }
            }
        }
    }

</script>