import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import NewTask from './NewTask.vue'
import Register from './Register.vue'

Vue.use(VueAxios, axios);

Vue.component('Task', {
    props: ['task'],
    template: '<li><button @click="clicked">x</button> #{{ task.id }} {{ task.name }}</li>',
    methods: {
        clicked: function() {
            alert('Clicked on task ' + this.task.name);
            this.$http.delete('/tasks/' + this.task.id)
                .then(() => {
                    this.$emit('deletedMyself');
                })
        }
    }
});

Vue.component('TaskList', {
    props: ['tasks'],
    template: '<ul><task v-for="task in tasks" :task="task" @deletedMyself=taskDeleted></task></ul>',
    methods: {
        taskDeleted: function() {
            alert('a task was deleted');
            this.$http.get('/tasks')
                .then((response) => {
                    this.tasks = response.body;
                });
        }
    }
});

var app = new Vue({
    el: '#app',
    components: {
        NewTask
    },
    data: {
        tasks: [],
        user: null
    },
    methods: {
        addNewTask: function(newTask) {
            this.$http.post('/tasks', { name: newTask })
                .then((response) => {
                    this.tasks.push(response.body);
                });
    },
    
        created: function() {
            this.$http.get('/tasks', { name: newTask })
                .then((response) => {
                    this.tasks = response.body;
                })
    }
}
});