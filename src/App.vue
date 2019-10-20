<template>
    <div id="app">
        <ul class="navigation">
            <li>
                <router-link v-bind:to="{ name: 'Login-page' }">Login</router-link>
            </li>
            <li>
                <router-link v-bind:to="{ name: 'Order-page' }">Order</router-link>
            </li>
            <li>
                <router-link v-bind:to="{ name: 'Store-page' }">Store</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    /*eslint no-unused-vars: "error"*/
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