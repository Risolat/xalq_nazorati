<template>
  <div class="container">
    <div class="login-form">
      <p>{{$t('logo.signIn')}}</p>

      <p @click="postOneId()" class="login-link">OneId orqali kirish</p>
     <!-- <b-form>
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

      <b-form-group id="input-group-2" :label="$t('auth.password')" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model="form.password"
          :placeholder="$t('auth.password')"
          required
        ></b-form-input>
      </b-form-group>
      <nuxt-link :to="localePath('/forgetPassword')">Forget Password?</nuxt-link>
      <button @click="signIn()" type="button">{{$t('auth.text')}}</button>
     </b-form> -->
     </div>
    <!-- <div class="reg-box">
      <nuxt-link :to="localePath('/reg')" >{{$t('auth.reg')}}</nuxt-link>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        password: ""
      },
      formData: {
        response_type: 'one_code',
        client_id: 'gis_xn_mobile',
        redirect_uri: 'https://xn.technocorp.uz/api/one-id/432fdsfHHDSFG213__LL-123QWE',
        scope: 'gis_xn_mobile',
        state: 'b"™ëa¡Ò\x03="'
      }
    };
  },
  methods: {
    async signIn() {
      try {
        let res = await this.$auth.loginWith("local", {data: this.form});    
        console.log("Login", res);
        this.$router.push(this.localePath({path: '/'}));
      } catch (err) {
        console.log(err);
      }
    },
    async postOneId(){
      await this.$axios.post(`https://sso.gov.uz:8443/sso/oauth/Authorization.do`, this.formData )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
};
</script>

<style scoped>
.login-link{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #2a97fc;
}
.login-link:hover{
  text-decoration: underline;
  transition: all ease .3s;
}
</style>
