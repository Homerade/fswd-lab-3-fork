<template>
    <form @submit.prevent="addNewTask">
        <div class='form-group'>
            <input name="newTask" class="form-control" type="text" v-model="newTask" placeholder="New task goes here" :disabled='isAddingTask'>
        </div>
        <button class="btn btn-danger" :disabled='isAddingTask'>
            <span v-show='isAddingTask'><icon name="spinner" pulse></icon>&nbsp;</span>Add task</button>
    </form>
</template>
  
<script>
import 'vue-awesome/icons/spinner';
import Icon from 'vue-awesome/components/Icon.vue';

export default {
    components: {
        Icon
    },
    data: function() {
        return {
            newTask: '',
            isAddingTask: false
        };
    },
    methods: {
        addNewTask() {
            if (!this.newTask) {
                // display error
            } else {
                this.isAddingTask = true;
                this.$store.dispatch('addNewTask', this.newTask)
                    .then(() => this.newTask = '')
                    .catch(response => console.log('something broke', response))
                    .finally(() => this.isAddingTask = false);
            }
        }
    },

};
</script>

<style>
</style>
