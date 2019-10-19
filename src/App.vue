<template>
    <div id="app">
        <Store></Store>
		<Order></Order>
		<StoreOwner></StoreOwner>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Store from './components/Store.vue'
	import Order from './components/Order.vue'
	import StoreOwner from './components/StoreOwner.vue'
    export default {
        name: 'app',
        components: {
            Store, Order, StoreOwner
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>