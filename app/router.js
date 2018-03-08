import Vue from 'vue';
import VueRouter from 'vue-router';

import Register from './Register.vue';
import TaskList from './TaskList.vue';
import IndividualTask from './IndividualTask.vue';

Vue.use(VueRouter);

var routes = [
    { path: '/register', component: Register },
    { path: '/welcome', component: { template: '<p>Welcome to the task list!</p>'} },
    { path: '/tasks', component: TaskList },
    { path: '/tasks/:id', component: IndividualTask, props: true }
];

export default new VueRouter({ routes });