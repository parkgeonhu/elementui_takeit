<template>

<div>
    <div id="new">
        <h2>새 주문</h2>
        <div v-for="(order, index) in new_orders" v-bind:key="order">
            주문명 : {{order.name}} / 주문자 : {{order.nickname}}
            <el-button type="text" class="button" @click="changeOrderStatus(order, 'IN_PROGRESS')">제조 중</el-button>
            <el-button type="text" class="button" @click="changeOrderStatus(order, 'MANUFACTURED')">완성</el-button>
            <el-table :data="new_orders[index].order_items" style="width: 100%;" @current-change="selectProduct">
                <div>
                    <el-table-column align=center header-align=center prop="name" :label="val">
                    </el-table-column>
                </div>
            </el-table>
        </div>
    </div>

    <div id="inprogress">
        <h2>제조 중인 주문</h2>
        <div v-for="(order, index) in inprogress_orders" v-bind:key="order">
            주문명 : {{order.name}} / 주문자 : {{order.nickname}}
            <el-button type="text" class="button" @click="changeOrderStatus(order, 'IN_PROGRESS')">제조 중</el-button>
            <el-button type="text" class="button" @click="changeOrderStatus(order, 'MANUFACTURED')">완성</el-button>
            <el-table :data="inprogress_orders[index].order_items" style="width: 100%;" @current-change="selectProduct">
                <div>
                    <el-table-column align=center header-align=center prop="name" :label="val">
                    </el-table-column>
                </div>
            </el-table>
        </div>
    </div>
	
	<div id="manufactured">
        <h2>제조 완료된 주문</h2>
        <div v-for="(order, index) in manufactured_orders" v-bind:key="order">
            주문명 : {{order.name}} / 주문자 : {{order.nickname}}
            <el-button type="text" class="button" @click="changeOrderStatus(order, 'IN_PROGRESS')">제조 중</el-button>
            <el-button type="text" class="button" @click="changeOrderStatus(order, 'MANUFACTURED')">완성</el-button>
            <el-table :data="manufactured_orders[index].order_items" style="width: 100%;" @current-change="selectProduct">
                <div>
                    <el-table-column align=center header-align=center prop="name" :label="val">
                    </el-table-column>
                </div>
            </el-table>
        </div>
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
            new_orders: null,
            inprogress_orders: null,
            manufactured_orders: null,
            val: "주문 항목"
        }
    },
    created() {
        this.get_order('NEW')
        this.get_order('IN_PROGRESS')
        this.get_order('MANUFACTURED')
            // this.get_order()
            // this.get_order()
    },
    mounted() {
        this.startInterval()
    },
    methods: {
        startInterval: function() {
            setInterval(() => {
                this.get_order('NEW')
                this.get_order('IN_PROGRESS')
                this.get_order('MANUFACTURED')
            }, 3000);
        },

        changeOrderStatus: function(order, status) {
            var auth_token = "Token " + localStorage.getItem('token')
            console.log(order)
            console.log(status)
            console.log(localStorage.getItem('token') + "storeowner토큰!!")
            instance = this.$http.create({
                baseURL: 'https://takeit.run.goorm.io/api',
                timeout: 2000,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': auth_token
                },
            });
            instance.post('/stores/orders/change/status', JSON.stringify({
                orderUUID: order.orderUUID,
                status: status
            })).then(response => {
				alert("주문 상태가 변경되었습니다.")
            })

        },

        get_order: function(status) {
            console.log("실행")
            instance = this.$http.create({
                baseURL: 'https://takeit.run.goorm.io/api',
                timeout: 2000,
                headers: {
                    "Content-Type": "application/json"
                },
            });
            instance.get('/stores/d1a43377-68a0-41ab-a241-d469033a3901/orders/status/' + status, {
                auth: {
                    username: "1",
                    password: "ejrqo401"
                }
            }).then(response => {
                if (status == 'NEW') {
                    this.new_orders = response.data
                } else if (status == 'IN_PROGRESS') {
                    this.inprogress_orders = response.data
                } else if (status == 'MANUFACTURED') {
                    this.manufactured_orders = response.data
                }
                console.log(this.new_orders)
            })
        },
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