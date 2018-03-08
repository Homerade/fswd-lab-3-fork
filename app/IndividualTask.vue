<template>
<<<<<<< HEAD
    <p v-if="task">Looking at task {{ id }}: {{ task && task.name }}</p>
=======
    <p v-if="task">Looking at task {{ id }}: {{ name }}</p>
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
</template>

<script>
export default {
    props: ['id'],
    computed: {
        task() {
            return this.$store.getters.getTaskById(this.taskId);
        },
        taskId() {
            return parseInt(this.id)
<<<<<<< HEAD
=======
        },
        name() {
            return this.task ? this.task.name : '';
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
        }
    }
};
</script>