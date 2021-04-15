<template>
  <div>
    <div class="container">
      <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
        <nuxt-link to="/" class="logo">
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
            alt="gerb"
            height="70"
          />
          <p class="navbar-title">
            O‘zbekiston Respublikasi Axborotlashtirish va telekommunikatsiyalar
            sohasida nazorat bo‘yicha davlat inspeksiyasi
          </p>
        </nuxt-link>
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
              <img
                @click="showSms()"
                src="~/assets/img/bell.svg"
                class="navbar-bell"
                alt="bell"
              />

              <div
                :class="{ disBlock: isHidden }"
                class="notifications"
                v-if="!isHidden"
                @click="hideWindow()"
              >
                <div class="modal-content">
                  <ul class="sms-list">
                    <li class="sms-item">
                      <nuxt-link to="/" class="sms-link">
                        <div class="sms-new">
                          <img
                            src="~/assets/img/circle.svg"
                            alt="circle"
                            width="10"
                            height="10"
                          />
                        </div>
                        <div class="sms-text-wrapper">
                          <p class="sms-text">
                            Internet va IPTV xizmatiga ulanish bo'yicha murojaat
                            muvaffaqiyatli <span>Ijroga yuborildi</span>
                          </p>
                          <p class="sms-time">2 daqiqa oldin</p>
                        </div>
                      </nuxt-link>
                    </li>
                    <li class="sms-item">
                      <nuxt-link to="/" class="sms-link">
                        <div class="sms-new">
                          <img
                            src="~/assets/img/circle.svg"
                            alt="circle"
                            width="10"
                            height="10"
                          />
                        </div>
                        <div class="sms-text-wrapper">
                          <p class="sms-text">
                            Internet va IPTV xizmatiga ulanish bo'yicha murojaat
                            muvaffaqiyatli <span>Ijro qilinmoqda</span>
                          </p>
                          <p class="sms-time">2 daqiqa oldin</p>
                        </div>
                      </nuxt-link>
                    </li>
                    <li class="sms-item">
                      <nuxt-link to="/" class="sms-link">
                        <div class="sms-new">
                          <!-- <img src="~/assets/img/circle.svg" alt="circle" width="10" height="10"> -->
                        </div>
                        <div class="sms-text-wrapper">
                          <p class="sms-text">
                            Internet va IPTV xizmatiga ulanish bo'yicha murojaat
                            muvaffaqiyatli <span>Ijro qilinmoqda</span>
                          </p>
                          <p class="sms-time">2 daqiqa oldin</p>
                        </div>
                      </nuxt-link>
                    </li>
                    <li class="sms-item">
                      <nuxt-link to="/" class="sms-link">
                        <div class="sms-new">
                          <!-- <img src="~/assets/img/circle.svg" alt="circle" width="10" height="10"> -->
                        </div>
                        <div class="sms-text-wrapper">
                          <p class="sms-text">
                            Internet va IPTV xizmatiga ulanish bo'yicha murojaat
                            muvaffaqiyatli <span>Yakunlandi</span>
                          </p>
                          <p class="sms-time">2 daqiqa oldin</p>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </b-nav-item>
            <b-nav-item>
              <img
                @click="showFont()"
                src="~/assets/img/eyess.svg"
                class="navbar-eye"
                alt="eye"
              />

              <div :class="{ eye: isFont }" class="fontBox" v-if="!isFont" @click="hideFontModal()">
                <div class="modal-font">
                  <p class="fontBox-text">Ko’rinish</p>
                  <ul class="fontBox-list">
                    <li class="fontBox-item font-blue">A</li>
                    <li class="fontBox-item font-blur">A</li>
                    <li class="fontBox-item font-brown">A</li>
                  </ul>
                  <p class="fontBox-text">Shrift o’lchami</p>
                  <ul class="fontBox-list">
                    <li class="fontBox-item font-small">F</li>
                    <li class="fontBox-item font-big">F</li>
                  </ul>
                  <button class="fontBox-reset">
                    Barcha sozlamalarni tiklash
                  </button>
                </div>
              </div>
            </b-nav-item>
            <b-nav-item-dropdown text="O'Z" right>
              <b-dropdown-item href="#">уз</b-dropdown-item>
              <b-dropdown-item href="#">ру</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
              <nuxt-link class="profile-button" to="/murojaat">
                <img src="~/assets/img/profile.svg" alt="bell" />
                <div class="profile">
                  <p class="profile-name">Sardor</p>
                  <p class="profile-surname">Abduganiyev</p>
                </div>
              </nuxt-link>
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
  },
  data() {
    return {
      isHidden: true,
      isFont: true
    };
  },
  methods: {
    showSms() {
      this.isHidden = !this.isHidden;
    },
    showFont() {
      this.isFont = !this.isFont;
    },
    hideWindow() {
      this.isHidden = true;
    },
    hideFontModal(){
      this.isFont = true;
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
