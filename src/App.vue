<template>
    <div id="app">
        <!-- <Store></Store>
		<Order></Order>
		<StoreOwner></StoreOwner>-->
		<!-- <Login></Login>  -->
		<!-- <ul class="navigation">
      <li><router-link v-bind:to="{ name: 'home-page' }">Home</router-link></li>
      <li><router-link v-bind:to="{ name: 'counter-page' }">Counter</router-link></li>
    </ul> -->
		<router-view></router-view>
    </div>
</template>

<script>
	/*eslint no-unused-vars: "error"*/
    // import HelloWorld from './components/HelloWorld.vue'
	// import Store from './components/Store.vue'
	// import Order from './components/Order.vue'
	// import StoreOwner from './components/StoreOwner.vue'
	// import Login from './components/Login.vue'
	// import router from "./router"

    export default {
		name: 'app',
	
		// mounted(){
		// 	router.push("/")
		// }
		

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