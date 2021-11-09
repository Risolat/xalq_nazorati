<template>
  <div class="container">
    <div class="login-form">
      <!-- <p>{{$t('logo.signIn')}}</p> -->
     <b-form>
      <b-form-group id="input-group-1" :label="$t('auth.phone')" label-for="input-1">
        <div class="phone-wrapper">
        <span>+998</span>
        <b-form-input
          type="text"
          id="input-1"
          v-model="form.phone"
          placeholder="__ ___ __ __"
          required
        ></b-form-input>
        </div>
      </b-form-group>
      <button @click="forgetPassword()" type="button">{{$t('auth.submit')}}</button>
     </b-form>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: ""
      },
    };
  },
  methods: {
    async forgetPassword() {
      await this.$axios.post('/password-restore', this.form)
        .then(res => {
            console.log(res)
            this.phoneCode = true;
            this.$router.push(this.localePath({path: '/login'}));
        })
        .catch(err => {
            console.log(err)
        })
  },
}
}
</script>

<style scoped></style>
