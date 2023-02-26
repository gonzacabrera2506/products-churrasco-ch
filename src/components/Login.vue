<template>
  <div class="container">
    <img src="../assets/LOGO1.png" class="rounded" width="350px" alt="churrasco">
    <br>
    <br>
    <form @submit.prevent="login">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">u</span>
        <input type="text" class="form-control form-control-lg" id="username" placeholder="Username" v-model="username"
          required>
      </div>
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">#</span>
        <input type="password" class="form-control form-control-lg" id="password" placeholder="Password"
          v-model="password" required>
      </div>
      <br>
      <div class="form-row row">
        <div class="col-md-6">
          <div class="form-group">
            <br>
            <input class="form-check-input" type="checkbox" value=" remember">
            <label class="form-check-label" for="flexCheckDefault" id="flexCheckDefault"> remember</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary btn-lg" align-items="end">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../helpers/store'

export default {
  data() {
    return {
      username,
      password
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
    async login() {
      try {
        const response = await axios.post("http://vps.churrasco.digital:3005/login", {
          username: this.username,
          password: this.password,
        });
        if (response.status == 200) {
          store.commit('setToken', JSON.stringify(response.data.token));
          this.$router.push('/home');
        }
      } catch (error) {
        this.showAlert();
      }
    }
  }
}
</script>

<style>
#flexCheckDefault {
  color: white;
}

.btn {
  background-color: rgb(58, 2, 109);
  border: rgb(44, 2, 83);
}

.form-control {
  height: 50px;
}
</style>

