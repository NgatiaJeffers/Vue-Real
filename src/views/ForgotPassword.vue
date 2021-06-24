<template>
<div class="container-fluid">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading" />
  <div class="left">
    <div class="header">
      <h4 class="animation a2">Back to
          <router-link :to="{ name: 'Login' }" >Login</router-link>
      </h4>
      <h2 class="animation a2">Reset Password</h2>
      <p class="animation a2">Forgot your passowrd? Enter your email to reset it</p>
    </div>
    <div class="form">
      <input type="email" class="form-field animation a3" placeholder="Email Address" v-model="email">
      <button @click.prevent="resetPassword" class="animation a6">Reset</button>
    </div>
  </div>
  <div class="right"></div>
</div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name: "ForgotPassword",
    components: { Modal, Loading },
    data() {
        return {
            email: "",
            modalActive: false,
            modalMessage: "",
            loading: null,
        };
    },
    methods: {
        resetPassword() {
            this.loading = true;
            firebase
            .auth()
            .sendPasswordResetEmail(this.email)
            .then(() => {
                this.modalMessage = "if your account exists, you will receive an email";
                this.loading = false;
                this.modalActive = true;
            })
            .catch((err) => {
                this.modalMessage = err.message;
                this.loading = false;
                this.modalActive = true;
            });
        },
        closeModal() {
            this.modalActive = !this.modalActive;
            this.email = "";
        }
    }

}
</script>

<style>

</style>