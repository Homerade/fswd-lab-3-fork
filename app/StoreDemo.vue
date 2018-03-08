<template>
    <div>
        <button @click=incrementValue>++</button>
        <button @click=asyncIncrement>+slow+</button>
        <p>My value is {{ storeValue }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        storeValue() {
            return this.$store.state.myValue;
        }
    },
    methods: {
        incrementValue() {
            this.$store.commit('incrementValue');
        },
        asyncIncrement() {
            this.$store.dispatch('asyncIncrementValue');
        }
    }
};
</script>
