<template>
    <li>
        <button @click="clicked">x</button>
        <router-link :to="'/tasks/' + task.id">#{{ task.id }} {{ task.name }}</router-link>
    </li>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        clicked: function() {
            alert('Clicked on task ' + this.task.name);
            this.$http.delete('/tasks/' + this.task.id)
                .then(() => {
                    this.$emit('deletedMyself');
                })
        }
    }    
}
</script>