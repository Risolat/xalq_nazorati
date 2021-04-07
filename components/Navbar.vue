<template>
  <div>
    <div class="container">
      <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
        <div class="logo">
          <img
            class="navbar-gerb"
            src="~/assets/img/gerb.svg"
            alt="gerb"
            width="87"
            height="70"
          />
          <img
            class="navbar-flag"
            src="~/assets/img/flag.svg"
            alt="flag"
            height="70"
          />
          <p class="navbar-title">
            O‘zbekiston Respublikasi Axborotlashtirish va telekommunikatsiyalar
            sohasida nazorat bo‘yicha davlat inspeksiyasi
          </p>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <div class="nav-call-center">
                <img src="~/assets/img/call.svg" alt="call" />
                <div class="nav-call">
                  <p>Call center</p>
                  <p class="call-center-num">1144</p>
                </div>
              </div>
            </b-nav-item>
            <b-nav-item>
              <img src="~/assets/img/eyess.svg" class="navbar-eye" alt="eye" />
            </b-nav-item>
            <b-nav-item-dropdown text="O'Z" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
              <nuxt-link class="navbar-button" to="/">kirish</nuxt-link>
            </b-nav-item>
            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1290px;
  margin: 0 auto;
}

.bg-info {
  background: linear-gradient(90.26deg, #b5c9ff 0%, #9fd1ff 99.43%);
}
</style>
