<template>
    <li class='list-group-item list-group-item-action' @click="clickedItem">
        <button class="close" @click.stop="clicked">&times;</button>
        <router-link :to="'/tasks/' + task.id">#{{ task.id }} {{ task.name }}</router-link>
    </li>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        clickedItem() {
            this.$router.push(`/tasks/${this.task.id}`);
        },
        clicked: function() {
            this.$store.dispatch('deleteTask', this.task);
        }
    }    
}

</script>
