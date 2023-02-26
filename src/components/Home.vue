<template>
    <div class="container">
        <img src="../assets/LOGO1.png" class="rounded" width="350px" alt="churrasco">
        <br><br><br>
        <div class="form-row row">
            <div class="col-md-6">
                <div class="form-group">
                    <div class="d-flex justify">
                        <button type="submit" @click="goToProducts" class="btn btn-primary btn-lg" align-items="end">Our
                            Products</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <div class="d-flex justify">
                        <button type="submit" @click="addProducts" class="btn btn-primary btn-lg" align-items="end">+New
                            product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../helpers/store';

export default {
    created() {
        if (!store.state.token) {
            setTimeout(() => {
                this.$swal('You must login first!!!');
                this.$router.push('/');
            }, 500)
        }
    },
    methods: {
        goToProducts() {
            if (store.state.token) {
                this.$router.push('/products');
            }
        },
        addProducts() {
            if (store.state.token) {
                this.$router.push('/add');
            }
        }
    }

};

</script>

<style>
.btn {
    background-color: rgb(58, 2, 109);
    border: rgb(44, 2, 83);
    text-align: start;
}
</style>

