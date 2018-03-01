
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