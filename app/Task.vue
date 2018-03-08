<template>
<<<<<<< HEAD
    <li>
        <button @click="clicked">x</button>
=======
    <li class='list-group-item list-group-item-action' @click="clickedItem">
        <button class="close" @click.stop="clicked">&times;</button>
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
        <router-link :to="'/tasks/' + task.id">#{{ task.id }} {{ task.name }}</router-link>
    </li>
</template>

<script>
export default {
    props: ['task'],
    methods: {
<<<<<<< HEAD
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
=======
        clickedItem() {
            this.$router.push(`/tasks/${this.task.id}`);
        },
        clicked: function() {
            this.$store.dispatch('deleteTask', this.task);
        }
    }    
}

</script>
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
