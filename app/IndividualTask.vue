<template>
    <p v-if="task">Looking at task {{ id }}: {{ task && task.name }}</p>
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
        }
    }
};
</script>