<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="p-4 border rounded" style="max-width: 400px; width: 100%;">
            <h2 class="text-center mb-4">{{ title }}</h2>

            <div v-if="message" class="alert text-light text-center" :class="message.class" role="alert">
                {{ message.msg }}
            </div>

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
                title: "Авторизация",
                message: null
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
                        body: JSON.stringify(this.authData)
                    })
                    const result = await response.json()
                    
                    if (result.isAuth) {
                        this.message = { msg: `авторизация пройдена ${result?.user?.name}`, class: 'bg-success' }
                    } else {
                        this.message = { msg: 'авторизация не пройдена', class: 'bg-danger' }
                    }

                } catch (e) {
                    console.log(`ошибка авторизации ${e.message}`)
                }
            }
        }
    }

</script>