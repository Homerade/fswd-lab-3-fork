import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        myValue: 15,
        tasks: [],
        isLoggedIn: false
    },
    mutations: {
        incrementValue(state) {
            state.myValue += 1;
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task)
        },
        removeTask(state, task) {
            state.tasks = state.tasks.filter(t => t.id !== task.id);
        },

        setLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        }
    },
    actions: {
        getTasks({ commit }) {
            return Vue.axios.get('/tasks')
                .then(response => {
                    commit('setTasks', response.data);
                })
        },
        asyncIncrementValue({ commit }) {
            setTimeout(() => {
                commit('incrementValue');
            }, 2000);
        },
        checkLogin({ commit }) {
            Vue.axios.get('/users/isLoggedIn')
                .then(response => {
                    commit('setLoggedIn', response.data)
                })
        },

        addNewTask({ commit }, name) {
            // return new Promise((resolve, reject) => {
                return Vue.axios.post('/tasks', { name })
                    .then(response => {
                        commit('addTask', response.data)

                        // setTimeout(() => {
                        //     resolve()
                        // }, 10000);
                    });
            // });
        },

        deleteTask({ state, commit }, task) {
            return Vue.axios.delete(`/tasks/${task.id}`)
                .then(response => {
                    commit('removeTask', task);
                });
        }
    },
    getters: {
        taskCount(state) {
            return state.tasks.length;
        },
        getTaskById(state) {
            return id => {
                return state.tasks.find(task => task.id === id);
            }
        }
    }
});
