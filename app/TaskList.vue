<template>
    <div>
<<<<<<< HEAD
        <ul>
            <task v-for="task in tasks" :task="task" :key="task.id" @deletedMyself='taskDeleted'></task>
        </ul>
        <new-task></new-task>
=======
        <ul class='list-group list-group-flush'>
            <task v-for="task in tasks" :task="task" :key="task.id" @deletedMyself='taskDeleted'></task>            
        </ul>
        <new-task class='pt-3'></new-task>
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
    </div>
</template>

<script>
import NewTask from './NewTask.vue';
import Task from './Task.vue';
<<<<<<< HEAD
=======

>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
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