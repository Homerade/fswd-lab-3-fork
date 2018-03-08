<template lang="pug">
    div.container
        store-demo
        current-task-count
        ul.nav
            li.nav-item
                router-link.nav-link(to='/register') Register
            li.nav-item
                router-link.nav-link(to='/tasks') Tasks
        router-view
</template>

<script>
import StoreDemo from './StoreDemo.vue';
import CurrentTaskCount from './CurrentTaskCount.vue';
export default {
    components: {
        StoreDemo,
        CurrentTaskCount
    }
}
</script>