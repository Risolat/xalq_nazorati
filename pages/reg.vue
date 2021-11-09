<template>
  <div class="reg">
    <h2>{{ $t("auth.reg") }}</h2>
    <b-form>
      <b-form-group
        id="input-group-1"
        :label="$t('auth.firstName')"
        label-for="input-1"
      >
        <b-form-input
          type="text"
          id="input-1"
          v-model="form.first_name"
          :placeholder="$t('auth.enterFirstname')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        :label="$t('auth.lastName')"
        label-for="input-2"
      >
        <b-form-input
          type="text"
          id="input-2"
          v-model="form.last_name"
          :placeholder="$t('auth.enterLastname')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        :label="$t('auth.phone')"
        label-for="input-3"
      >
        <div class="phone-wrapper">
          <span>+998</span>
          <b-form-input
            type="text"
            id="input-3"
            v-model="form.phone"
            placeholder="__ ___-__-__"
            required
          ></b-form-input>
        </div>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        :label="$t('auth.email')"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          type="email"
          v-model="form.email"
          :placeholder="$t('auth.enterEmail')"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        :label="$t('auth.password')"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          type="password"
          v-model="form.password"
          :placeholder="$t('auth.enterPassword')"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-6"
        :label="$t('auth.password')"
        label-for="input-6"
      >
        <b-form-input
          id="input-5"
          type="password"
          v-model="rePassword"
          :placeholder="$t('auth.enterPassword')"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="button" @click="reg()" variant="primary">{{
        $t("auth.submit")
      }}</b-button>
    </b-form>
    <b-form v-if="isHidden" class="code-form">
      <b-form-group
        id="input-group-6"
        :label="$t('auth.code')"
        label-for="input-6"
      >
        <b-form-input
          id="input-6"
          type="text"
          v-model="activate.code"
          :placeholder="$t('auth.enterCode')"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="button" @click="checkCode()" variant="primary">{{
        $t("auth.submit")
      }}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
      },
      token: "",
      activate: {
        id: "",
        code: ""
      },
      show: true,
      isHidden: false,
      rePassword: ""
    };
  },
  methods: {
    async reg() {
      if (this.form.password === this.rePassword) {
        await this.$axios
          .post("/register", this.form)
          .then(res => {
            // console.log(res);
            this.activate.id = res.data.data.id;
            this.isHidden = true;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    async checkCode() {
      try {
        let res = this.$axios.post("/activate-profile", {
          id: this.activate.id,
          code: this.activate.code
        });
        // console.log("Activate profile", res);
        this.token = res.data.data.token;
      } catch (err) {
        console.log(err);
      }
      try {
        await this.$auth.loginWith("local", {
          data: {
            phone: this.form.phone,
            password: this.form.password
          }
        });
      } catch (err) {
        console.log(err);
      }
      this.$router.push(this.localePath({path: '/'}));
      // if(this.form.token === localStorage.getItem('auth._token.local')){
      //   this.$router.push(this.localePath({ path: "/login" }));
      // }else{
      //   console.log("err")
      // }
      
    },
    onSubmit(event) {
      event.preventDefault();
    }
  }
};
</script>

<style></style>
