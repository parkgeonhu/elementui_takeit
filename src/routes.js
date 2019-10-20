import Login from './components/Login.vue'
import Order from './components/Order.vue'
import StoreOwner from './components/StoreOwner.vue'

export default [
  {
    path: '/',
    name: 'Login-page',
    component: Login
  },
	{
    path: '/order',
    name: 'Order-page',
    component: Order
  },
		{
    path: '/store',
    name: 'Order-page',
    component: StoreOwner
  },
  // {
  //   path: '/counter',
  //   name: 'counter-page',
  //   component: CounterPage
  // },
  {
    path: '*',
    redirect: '/'
  }
]