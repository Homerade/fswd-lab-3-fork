<template>
    <div>
        <h3>Login Here:</h3>
        <div class='form-group'>
            <label for='username'>Username</label>
            <input class='form-control' type='text' name='username' v-model='username'>
        </div>
        <div class='form-group'>
            <label for='password'>Username</label>
            <input class='form-control' type='password' name='password' v-model='password'>
        </div>
        <button class='btn btn-primary' @click='verifyLogin'>Login</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            verifyLogin: function() {
                this.$emit('verifyLoginInfo', this.data);
                this.password = '';
            }
        }
    };
</script>