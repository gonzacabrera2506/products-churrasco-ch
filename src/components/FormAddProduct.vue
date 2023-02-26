<template>
    <!-- 
        SKU code currency: "s./" description name pictures: 
        ['https://www.aweta.com/images/produces/overzicht/aweta-product-mango.png']
price
: 
35
    -->
    <div class="container-lg">
        <form @submit.prevent="submitForm">
            <img src="../assets/LOGO1.png" class="rounded" width="350px" alt="churrasco">
            <br><br>
            <div class="input-group">
                <input type="number"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    maxlength="8" class="form-control form-control-sm" id="sku" placeholder="SKU" v-model="SKU" required>
                <input type="number"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    maxlength="10" class="form-control form-control-sm" id="code" placeholder="Code" v-model="code"
                    required>
            </div>
            <br>
            <div class="input-group mb-3">
                <input type="text" maxlength="30" class="form-control form-control-sm" id="name" placeholder="Name"
                    v-model="nameProduct" required>
            </div>
            <div>
                <textarea class="form-control form-control-m" aria-label="With textarea" v-model="description"
                    placeholder="Description"></textarea>
            </div>
            <br>
            <div class="input-group mb-3">
                <input class="form-control form-control-sm" id="price" placeholder="Price"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number" maxlength="6" v-model="price" required>
            </div>
            <input class="form-control" type="file" ref="file" id="formFileMultiple" multiple @change="fileChange" required>
            <br>
            <div class="form-row row">
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="d-flex justify">
                            <button type="submit" class="btn btn-primary btn-lg" align-items="end">Add
                                product</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="d-flex justify">
                            <button @click="backHome" class="btn btn-secondary btn-lg" align-items="end">Back
                                go Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
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
    data() {
        return {
            SKU,
            code,
            currency: 's./',
            description,
            nameProduct,
            files: [],
            selectedFiles: null,
            price
        }
    },
    methods: {
        showAlert() {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        },
        fileChange(event) {
            this.selectedFiles = event.target.files;
            this.files = [];
            for (let i = 0; i < this.selectedFiles.length; i++) {
                const reader = new FileReader();
                reader.readAsDataURL(this.selectedFiles[i]);
                reader.onload = () => {
                    this.files.push(reader.result);
                };
            }
        },
        async submitForm() {
            const data = {
                "SKU": this.SKU,
                "code": this.code,
                "currency": 's./',
                "description": this.description,
                "name": this.nameProduct,
                "pictures": this.files,
                "price": this.price
            };

            try {
                const response = await axios.post("http://vps.churrasco.digital:3005/addproduct", data, {
                    headers: {
                        'Authorization': `Bearer ${store.state.token.slice(1, -1)}`,
                        'Content-Type': 'application/json'
                    },
                });

                if (response.status == 201) {
                    this.$swal('Product successfully added!!!');
                    this.data = {
                        SKU: '',
                        code: '',
                        currency: '',
                        description: '',
                        nameProduct: '',
                        files: [],
                        price: ''
                    };
                }
            } catch (error) {
                this.showAlert();
            }
        },
        backHome: function (e) {
            e.preventDefault();
            this.$router.push('/home');
        }
    }
}
</script>

<style>
.form-control {
    height: 40px;
}
</style>
  
  
  
  
  
  