<template>
    <div class="container">
        <div class="row">
            <div class="d-flex justify">
                <button type="submit" @click="goToBack" class="btn btn-primary btn-lg" align-items="end">&lt;- Back</button>
            </div>
            <div class="col-md-5 mx-auto">
                <img src="../assets/LOGO1.png" class="rounded" width="350px" alt="churrasco">
                <br><br>
            </div>
        </div>
        <div class="row">
            <div class="col-md-13">
                <table class="table table-bordered border-secondary-subtle">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">SKU</th>
                            <th class="text-center" scope="col">Code</th>
                            <th class="text-center" scope="col">Name</th>
                            <th class="text-center" scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index">
                            <th class="text-center" scope="row">{{ product.SKU }}</th>
                            <td class="text-center">{{ product.code }}</td>
                            <td class="text-center">{{ product.name }}</td>
                            <td class="text-center">{{ "$" + product.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../helpers/store';
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        const headers = {
            'Authorization': `Bearer ${store.state.token.slice(1, -1)}`,
            'Content-Type': 'application/json'
        }
        if (store.state.token) {
            axios.get("http://vps.churrasco.digital:3005/products", {
                headers
            }).then(response => {
                this.products = response.data;
                console.log(this.products)
            })
                .catch(error => {
                    console.log(error);
                });

        }
    },
    methods: {
        goToBack() {
            this.$router.push('/home');
        }
    }
}
</script>

<style>
.table {
    color: rgb(186, 141, 229);
    border-color: white;

}

img {
    padding-top: 0px;
}
</style>
