Vue.component('Task', {
    props: ['task'],
    template: '<li>Task goes here: "#{{ task.id }} {{ task.name }}"</li>'
});

Vue.component('TaskList', {
    props: ['tasks'],
    template: '<ul><task v-for="task in tasks" :task="task"></task></ul>'
});

Vue.component('NewTask', {
    data: function() {
        return {
            newTask: ''
        };
    },
    methods: {
        addNewTask: function() {
            this.$emit('addtask', this.newTask);
            this.newTask = '';
        }
    },

    template: '<div><input class="form-control" type="text" v-model="newTask" placeholder="New task goes here"><button class="btn btn-danger" @click="addNewTask">Add task</button></div>'
});

var app = new Vue({
    el: '#app',
    data: {
        tasks: []
    },
    methods: {
        addedTask: function(newTask) {
            alert("Added task " + newTask);
            this.tasks.push(newTask);
        }1
    },
        created: function() {
            this.$http.get('/tasks')
                .then(function(response) {
                    this.tasks = response.body;
                })
    }
});