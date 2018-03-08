<template>
    <div>
        <ul class='list-group list-group-flush'>
            <task v-for="task in tasks" :task="task" :key="task.id" @deletedMyself='taskDeleted'></task>            
        </ul>
        <new-task class='pt-3'></new-task>
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