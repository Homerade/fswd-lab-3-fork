<template>
    <form @submit.prevent="sendRegistration">
        <div class="form-group">
            <label for="username">Username</label>
            <input class="form-control" type="text" name="username" v-model="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control" type="password" name="password" v-model="password">
        </div>
        <div class="form-group">
            <label for="password_confirm">Password (confirm)</label>
            <input class="form-control" type="password" name="password_confirm" v-model="password_confirm">
        </div>
        <p v-if="passwordsNoMatch">Passwords do not match.</p>
        <button class="btn btn-primary" :disabled="passwordsNoMatch">Register</button>
    </form>
</template>

<script>
export default {
    data: function () {
        return {
            username: '',
            password: '',
            password_confirm: ''
        }
    },
    computed: {
        passwordsNoMatch: function() {
            return this.password !== this.password_confirm;
        }
    },
    methods: {
        sendRegistration: function() {
            this.$http.post('/users/register', {
                username: this.username,
                password: this.password,
                password_confirm: this.password_confirm
            }).then(response => {
                this.$router.push('/welcome');
            })

        }
    }
};
</script>