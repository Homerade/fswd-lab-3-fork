<template>
    <div>
        <div class="form-group">
            <label for="username">Username</label>
            <input class="form-control" type="text" name="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control" type="password" name="password">
        </div>
        <div class="form-group">
            <label for="password_confirm">Password (confirm)</label>
            <input class="form-control" type="password" name="password_confirm">
        </div>
        <button>Register</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            username: '',
            password: '',
            password_confirm: ''
        }
    },
    computed: {
        passwordsMatch: function() {
            return this.password === this.password_confirm;
    }
}  
};
</script>