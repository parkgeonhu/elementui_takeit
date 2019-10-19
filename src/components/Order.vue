<template>
    <div class="hello">
        <el-row>
            <el-col :span="8" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <span>Yummy hamburger</span>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button">Operating</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
		<br>
		<br>
		<div id="cafe-menu">
        <el-table :data="products" style="width: 100%;" @row-click="selectProduct">
            <div>
                <el-table-column align=center header-align=center prop="default_price" label="가격">
                </el-table-column>
                <el-table-column align=center header-align=center prop="name" :label="val">
                </el-table-column>
            </div>
        </el-table>
	</div>
	<br><br>
		<div id="shopping-storage">
		<el-table :data="p_storage" style="width: 100%;">
            <div>
                <el-table-column align=center header-align=center prop="default_price" label="가격">
                </el-table-column>
                <el-table-column align=center header-align=center prop="name" label="장바구니">
                </el-table-column>
            </div>
        </el-table>
	</div>
		<div>
			총 가격 : {{total_price}}
	</div>
		<el-button v-on:click="orderProduct">주문하기</el-button>
		
		
    </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js">
</script>
<script>
	
/*jslint devel: true */
/* eslint-disable no-console */
import Vue from 'vue'
var instance=null
export default {
    name: 'Order',
    props: {
        msg: String
    },
    data() {
        return {
            products: null,
			val : "카페이름@제품",
			p_storage : [],
			total_price : 0
        }
    },
    mounted() {
        this.get_menu()
    },
    methods: {
		get_total_price : function(){
		},
        selectProduct: function(val) {
			this.total_price+=val.default_price
			console.log("clicked")
            this.p_storage.push({
                "productUUID": val.productUUID,
				"name" : val.name,
				"default_price" : val.default_price
            })
            console.log(this.p_storage)
        },
        get_menu : function() {
			instance = this.$http.create({
            baseURL: 'https://takeit.run.goorm.io/api',
            timeout: 1000,
            headers: {
                "Content-Type": "application/json"
            },
        });
        // var data = {
        //     auth: {
        //         phone : '1',
        //         password : 'ejrqo401'
        //     }
        // }
        instance.get('/stores/d1a43377-68a0-41ab-a241-d469033a3901/menus', {
            auth: {
                username: "1",
                password: "ejrqo401"
            }
        }).then(response => {
            this.products = response.data
        })
		},
        orderProduct: function() {
            var order_json = JSON.stringify({
                orderItems: this.p_storage,
                grandTotal: 1900
            })
            instance = this.$http.create({
                baseURL: 'https://takeit.run.goorm.io/api',
                timeout: 1000,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Token 547e01ddf409c9c6ef3d3282cfedfd0a1f0bd702'
                },
            });

            instance.post('/stores/d1a43377-68a0-41ab-a241-d469033a3901/orders', JSON.stringify({
                orderItems: this.p_storage,
                grandTotal: 0
            })).then(response => {
                alert(response.data)
				console.log(response.data)
				var payload=response.data
                Vue.IMP().request_pay({
                    pay_method: 'card',
                    merchant_uid: 'merchant_' + new Date().getTime(),
                    name: payload["name"],
                    amount: payload["grand_total"],
                    buyer_email: 'iamport@siot.do',
                    buyer_name: payload["orderer"],
                    buyer_tel: '010-1234-5678',
                    buyer_addr: '서울특별시 강남구 삼성동',
                    buyer_postcode: '123-456'
                }, (result_success) => {
                    //성공할 때 실행 될 콜백 함수
                    var msg = '결제가 완료되었습니다.';
                    msg += '고유ID : ' + result_success.imp_uid;
                    msg += '상점 거래ID : ' + result_success.merchant_uid;
                    msg += '결제 금액 : ' + result_success.paid_amount;
                    msg += '카드 승인번호 : ' + result_success.apply_num;
                    alert(msg);
                }, (result_failure) => {
                    //실패시 실행 될 콜백 함수
                    var msg = '결제에 실패하였습니다.';
                    msg += '에러내용 : ' + result_failure.error_msg;
                    alert(msg);
                })
            })
            console.log(order_json)
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