<template>
    <div>
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
        <p v-if="passwordsNoMatch">Passwords match.</p>
        <button class="btn btn-primary" :disabled="passwordsNoMatch" @click="sendRegistration">Register</button>
    </div>
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
        passswordsNoMatch: function() {
            return this.password !== this.password_confirm;
        }
    },
    methods: {
        sendRegistration: function() {
            alert('Sending registration!');
        }
    }
};
</script>