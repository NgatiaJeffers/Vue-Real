<template>
<div class="container-fluid">
  <div class="left">
    <div class="header">
      <h4 class="animation a2">Already have an account?
          <router-link :to="{ name: 'Login' }" >Login</router-link>
      </h4>
    </div>
    <div class="form">
      <input type="text" class="form-field animation a3" placeholder="First Name" v-model="firstName">
      <input type="text" class="form-field animation a3" placeholder="Last Name" v-model="lastName">
      <input type="text" class="form-field animation a3" placeholder="Username" v-model="username">
      <input type="text" class="form-field animation a3" placeholder="Email Address" v-model="email">
      <input type="password" class="form-field animation a4" placeholder="Password" v-model="password">
      <div v-show="error" class="error">{{ errorMsg }}</div>
      <button @click.prevent="register" class="animation a6">Sign In</button>
    </div>
  </div>
  <div class="right"></div>
</div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
    name: "Register",
    components: {},
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error: null,
            errorMsg: "",
        }
    },
    methods: {
        async register() {
            if (
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
            ) {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    email: this.email
                });
                this.$router.push({ name: 'Home'})
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all the fields!";
            return;
        },
    }
}
</script>

<style lang="scss" scoped>

</style>