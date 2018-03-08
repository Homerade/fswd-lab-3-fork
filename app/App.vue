<template lang="pug">
<<<<<<< HEAD
    div.container
        store-demo
        current-task-count
        ul.nav
=======
div#app
    //- div.container
    nav.navbar.navbar-expand-lg.navbar-light.bg-light.mb-2
        router-link.navbar-brand(to='/') FSWD
        ul.navbar-nav
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
            li.nav-item
                router-link.nav-link(to='/register') Register
            li.nav-item
                router-link.nav-link(to='/tasks') Tasks
<<<<<<< HEAD
        router-view
=======
    div.container
        div.row
            router-view.col-12
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
</template>

<script>
import StoreDemo from './StoreDemo.vue';
import CurrentTaskCount from './CurrentTaskCount.vue';
<<<<<<< HEAD
=======

>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
export default {
    components: {
        StoreDemo,
        CurrentTaskCount
    }
}
<<<<<<< HEAD
</script>
=======
</script>

<style>
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
</style>
>>>>>>> 625edcb63576e50aada93120dc63cee2d2579443
