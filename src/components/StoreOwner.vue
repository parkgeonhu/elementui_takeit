<template>
<div>
	
<div v-for="(order, index) in orders" v-bind:key="order">
	주문명 : {{order.name}} / 주문자 : {{order.orderer}}
	<el-table :data="orders[index].order_items" style="width: 100%;" @current-change="selectProduct">
            <div>
                <el-table-column align=center header-align=center prop="name" :label="val">
                </el-table-column>
            </div>
    </el-table>
	</div>

	</div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js">
</script>
<script>
	
/*jslint devel: true */
/* eslint-disable no-console */
import Vue from 'vue'
var p_storage = [];
var instance = null
export default {
    name: 'StoreOwner',
    props: {
        msg: String
    },
    data() {
        return {
            orders: null,
            val: "카페이름@제품"
        }
    },
    mounted() {
        this.get_menu()
    },
    methods: {
        get_menu: function() {
            instance = this.$http.create({
                baseURL: 'https://takeit.run.goorm.io/api',
                timeout: 6000,
                headers: {
                    "Content-Type": "application/json"
                },
            });
            instance.get('/stores/d1a43377-68a0-41ab-a241-d469033a3901/orders/status/new', {
                auth: {
                    username: "1",
                    password: "ejrqo401"
                }
            }).then(response => {
                this.orders = response.data
				console.log(this.orders)
            })
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped> h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
	
.el-table th, .el-table td {

    text-align: center;
}


</style>