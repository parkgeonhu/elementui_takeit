<template>
    <div class="hello">
        <el-button v-on:click="greet">el-button</el-button>
        <el-row>
            <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <span>Yummy hamburger</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">Operating</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-table :data="products" style="width: 100%;" @current-change="selectProduct">
            <div>

                <el-table-column prop="default_price" label="가격">
                </el-table-column>
				<el-table-column prop="name" label="이름">
                </el-table-column>
            </div>
        </el-table>

        <!-- <tr v-for="product in products" v-bind:key="product">
            <td>{{product.name}}</td>
            <td>{{product.default_price}}</td>
            <td>
                <el-button @click="add(product)"></el-button>
            </td>
        </tr>
		<el-table v-for="product in products" v-bind:key="product">
            <td>{{product.name}}</td>
            <td>{{product.default_price}}</td>
            <td>
                <el-button @click="add(product)"></el-button>
            </td>
        </el-table> -->
    </div>
</template>

<script>
    var storage = []
    export default {
        name: 'Store',
        props: {
            msg: String
        },
        data() {
            return {
                products: null
            }
        },
        mounted() {
            const instance = this.$http.create({
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
        methods: {
			selectProduct:function(val){
				
				alert(val.name)
			},
            add: function(product) {
                var data = {
                    name: product
                }
				alert(product.name)
                storage.push(data)
            },
            greet: function() {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
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
</style>