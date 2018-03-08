<template lang="pug">
div#app
    //- div.container
    nav.navbar.navbar-expand-lg.navbar-light.bg-light.mb-2
        router-link.navbar-brand(to='/') FSWD
        ul.navbar-nav
            li.nav-item
                router-link.nav-link(to='/register') Register
            li.nav-item
                router-link.nav-link(to='/tasks') Tasks
    div.container
        div.row
            router-view.col-12
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

<style>
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
</style>
