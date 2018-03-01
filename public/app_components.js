Vue.component('Task', {
    props: ['task'],
    template: '<li>{{ task }}</li>'
});

Vue.component('TaskList', {
    props: ['tasks'],
    template: '<ul><task v-for="task in tasks" :task="task"></task></ul>'
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
        updateDate: function() {
            this.message = 'The current date is ' + (new Date());
        },
        addNewTask: function() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    }
});