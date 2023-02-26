import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Products from '../components/Products.vue'
import FormAddProduct from '../components/FormAddProduct.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/add',
        component: FormAddProduct
    }

];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router