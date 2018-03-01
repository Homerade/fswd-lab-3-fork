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

var app = new Vue ({ 
    el: '#app', 
    data: { 
        message: 'My message goes here',
        tooltip: 'this is my tooltip ' + (new Date()),
        tasks: [
            'task one',
            'task two',
            'task three',
            'task four'
        ],
        newTask: ''
    },
    methods: {
        addNewTask: function() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        created: function() {
            console.log('I am created!');
            this.$http.get('/tasks')
                .then(function(response) {
                    console.log('Got tasks!');
                    console.log(response.body);
                    this.tasks = response.body;
                })
        }
    }
});