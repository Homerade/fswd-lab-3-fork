<template>
    <div>
        <ul>
            <task v-for="task in tasks" :task="task" :key="task.id" @deletedMyself='taskDeleted'></task>
        </ul>
        <new-task></new-task>
    </div>
</template>

<script>
import NewTask from './NewTask.vue';
import Task from './Task.vue';
export default {
    components: {
        Task,
        NewTask
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        }
    },
    methods: {
        taskDeleted: function() {
            alert('a task was deleted');
            this.$http.get('/tasks')
                .then((response) => {
                    this.tasks = response.data;
                });
        }
    }
};
</script>