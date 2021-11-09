<template>
  <div class="container">
    <div class="login-form">
     <b-form>
      <p>Parolni o'zgartirish</p>
      <b-form-group id="input-group-1" :label="$t('auth.firstName')" label-for="input-1">
        <b-form-input
          type="text"
          id="input-1"
          v-model="form.first_name"
          :placeholder="$t('auth.enterFirstname')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="$t('auth.lastName')" label-for="input-2">
        <b-form-input
          type="text"
          id="input-2"
          v-model="form.last_name"
          :placeholder="$t('auth.enterLastname')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" :label="$t('auth.password')" label-for="input-3">
        <b-form-input
          type="password"
          id="input-3"
          v-model="form.password"
          :placeholder="$t('auth.password')"
          required
        ></b-form-input>
      </b-form-group>
      <button class="send-btn"  @click="profileUpdate()" type="button">{{$t('auth.submit')}}</button>
     </b-form>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        password: ""
      }
    };
  },
  methods: {
    async profileUpdate() {
      console.log('ms-test', this.form);
      await this.$axios.post('/profile-update', this.form)
        .then(res => {
          console.log('Update', res)
          this.$router.push(this.localePath({path: '/'}));
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
};
</script>

<style scoped></style>
