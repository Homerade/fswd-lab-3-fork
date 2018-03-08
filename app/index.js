import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';

import store from './store';
import router from './router';

Vue.use(VueAxios, axios);

var app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        App
    },
    data: {
        tasks: [],
        user: null
    },
    beforeCreate() {
        this.$store.dispatch('getTasks');
    },
    methods: {
        addNewTask: function(newTask) {
            this.$http.post('/tasks', { name: newTask })
                .then((response) => {
                    this.tasks.push(response.data);
                });
        },
        registerUser: function(details) {
            this.$http.post('/users/register', details)
                .then((response) => {
                    this.user = response.data;
                });
        }
    },
    template: '<App/>'
});