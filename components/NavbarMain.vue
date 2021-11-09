<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
      <div class="container">
        <nuxt-link :to="localePath('/')" class="logo">
          <img
            class="navbar-gerb"
            src="~/assets/img/symbol.svg"
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
            {{ $t("logo.text") }}
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

            <b-nav-item v-show="$auth.loggedIn">
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
                    <li class="sms-item" v-for="item in sms" :key="item.id">
                      <nuxt-link :to="localePath('/murojaat')" class="sms-link">
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
                            Murojaat {{ item.code }}
                            <span v-show="item.status === '5'"
                              >Yakunlangan</span
                            >
                            <span v-show="item.status === '2'"
                              >Ijroga Yuborildi</span
                            >
                            <span v-show="item.status === '3'"
                              >Ijro qilinmoqda</span
                            >
                            <span v-show="item.status === '1'"
                              >Murojaat Yaratildi</span
                            >
                          </p>
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

              <div
                :class="{ eye: isFont }"
                class="fontBox"
                v-if="!isFont"
                @click="hideFontModal()"
              >
                <div class="modal-font">
                  <p class="fontBox-text">Ko’rinish</p>
                  <ul class="fontBox-list">
                    <li @click="defaultMode()" class="fontBox-item font-blue">
                      A
                    </li>
                    <li
                      @click="setWhiteGrayMode()"
                      class="fontBox-item font-blur"
                    >
                      A
                    </li>
                    <li @click="setDarkMode()" class="fontBox-item font-brown">
                      A
                    </li>
                  </ul>
                  <p class="fontBox-text">Shrift o’lchami</p>
                  <ul class="fontBox-list">
                    <li class="fontBox-item font-small">F</li>
                    <li class="fontBox-item font-big" @click="bigFontSize()">
                      F
                    </li>
                  </ul>
                  <button class="fontBox-reset">
                    Barcha sozlamalarni tiklash
                  </button>
                </div>
              </div>
            </b-nav-item>

            <b-nav-item right>
              <v-select
                @select="optionSelect"
                :selected="selected"
              />
            </b-nav-item>

            <li class="nav-item" v-if="$auth.loggedIn">
              <b-dropdown class="dropdown">
                <template class="profile" #button-content>
                  <img src="~/assets/img/profile.svg" alt="bell" />

                  <div class="profile">
                    <div class="profile-name">{{ userName }}</div>
                    <div class="profile-surname">{{ userLastName }}</div>
                  </div>
                </template>
                <div
                  class="d-flex justify-content-between align-items-center"
                ></div>
                <b-dropdown-item>
                  <nuxt-link :to="localePath('/murojaat')"
                    >Shaxsiy kabinet</nuxt-link
                  >
                </b-dropdown-item>
                <b-dropdown-item>
                  <nuxt-link :to="localePath('/paswordChange')"
                    >Parolni o'zgartirish</nuxt-link
                  >
                </b-dropdown-item>

                <b-dropdown-item @click="$auth.logout()">
                  Chiqish</b-dropdown-item
                >
              </b-dropdown>
            </li>

            <b-nav-item v-else :to="localePath('/login')" class="navbar-button">
              {{ $t("logo.signIn") }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import VSelect from "./V-select.vue";

export default {
  components: { VSelect },
  props: {
    fixed: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isHidden: true,
      isFont: true,
      isLang: true,
      areOptionsVisible: false,
      selected: "O'z",
      userName: "",
      userLastName: "",
      user: [],
      sms: []
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option;
    },
    async getUser() {
      await this.$axios("user/me")
        .then(res => {
          // console.log("Login =====", res);
          this.userName = res.data.data.first_name;
          this.userLastName = res.data.data.last_name;
          this.user = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    selectLangOption(lang) {
      this.areOptionsVisible === false;
      this.selected = lang;
      console.log("Language", lang);
    },

    showSms() {
      this.isHidden = !this.isHidden;
    },

    showFont() {
      this.isFont = !this.isFont;
    },
    showLang() {
      this.isLang = !this.isLang;
    },
    hideWindow() {
      this.isHidden = true;
    },
    hideFontModal() {
      this.isFont = true;
    },
    hideLangModal() {
      this.isLang = false;
    },

    setWhiteGrayMode() {
      this.$cookies.set("theme-mode", "whiteGrayMode", {
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      });
      this.whiteGrayMode();
    },

    whiteGrayMode() {
      let wrap = document.querySelector("html");
      wrap.classList += " whiteGrayMode";
      wrap.classList.remove("darkMode");
      this.$cookies.remove("darkMode");
    },
    setDarkMode() {
      this.$cookies.set("theme-mode", "darkMode", {
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      });
      this.darkMode();
    },

    darkMode() {
      let darkTheme = document.querySelector("html");
      darkTheme.classList += " darkMode";
      darkTheme.classList.remove("whiteGrayMode");
      this.$cookies.remove("whiteGrayMode");
    },
    defaultMode() {
      this.$cookies.remove("whiteGrayMode");
      this.$cookies.remove("darkMode");
      let defaultMode = document.querySelector("html");
      defaultMode.classList.remove("whiteGrayMode");
      defaultMode.classList.remove("darkMode");
    },
    bigFontSize() {
      let wrap = document.querySelector("html");
      wrap.classList += " bigFontSize";
    },
    async getNotification() {
      await this.$axios("/my-notifications")
        .then(res => {
          this.sms = res.data;
          // console.log("Risolat Notification", res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  created() {
    this.getUser();
    this.getNotification();
  },

  mounted() {
    const cookieRes = this.$cookies.get("theme-mode");

    switch (cookieRes) {
      case "whiteGrayMode":
        this.whiteGrayMode();
    }
  }
};
</script>

<style scoped>
.container {
  width: 1290px;
  margin: 0 auto;
}

.bg-info {
  background: linear-gradient(90.26deg, #b5c9ff 0%, #9fd1ff 99.43%);
}
.blur {
  filter: grayscale(100%);
}
</style>
