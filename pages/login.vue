<template>
  <div class="container">
    <form>
      <p>Login</p>
      <input v-model="form.email" type="email" placeholder="Email" />
      <input v-model="form.password" type="password" placeholder="Password" />
      <button @click="signIn()" type="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: {
        "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
      },
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async signIn() {
      try {
        console.log(this.form);
        // const form_data = new FormData();
        // form_data.append("passwrod", this.form.password);
        // form_data.append("email", this.form.email);
        // const ob = {
        //     headers: { "Content-Type": "multipart/form-data" }
        // }
        let res = await this.$auth.loginWith("local", {headers: this.headers}, {data: this.form});
        console.log("Login", res);
        this.$router.push("/");
      } catch (err) {
        console.log(this.form);
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
