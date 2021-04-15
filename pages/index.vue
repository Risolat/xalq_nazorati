<template>
  <div class="landing">
    <div class="container">
      <div class="hero">
        <div class="hero-left">
          <h1 class="hero-left__title">Xalq nazorati</h1>
          <p class="hero-left__text">
            Axborotlashtirish va telekommunikatsiyalar sohasida va
            telekommunikatsiyalar sohasida telekommunikatsiyalar
          </p>
          <nuxt-link class="hero-left__btn" to="#issue">
            Murojaat yuborish
          </nuxt-link>
        </div>
        <div class="hero-right">
          <img
            src="../assets/img/hero.svg"
            alt="hero"
            width="520"
            height="483"
          />
        </div>
      </div>
      <div class="stats">
        <ul class="stats__list">
          <li class="stats__item">
            <div class="stats__img-wrapper">
              <img src="../assets/img/stats1.svg" alt="stats" />
              <p class="stats__num">{{ stats.number_of_users }}</p>
            </div>
            <p class="stats__text">Foydalanuvchilar</p>
          </li>
          <li class="stats__item">
            <div class="stats__img-wrapper">
              <img src="../assets/img/stats2.svg" alt="stats" />
              <p class="stats__num">{{ stats.number_of_tickets }}</p>
            </div>
            <p class="stats__text">Tushgan murojaatlar</p>
          </li>
          <li class="stats__item">
            <div class="stats__img-wrapper">
              <img src="../assets/img/stats3.svg" alt="stats" />
              <p class="stats__num">{{ stats.number_of_completed_tickets}}</p>
            </div>
            <p class="stats__text">Hal qilingan muammolar</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="issues">
    <div class="container">
      <p class="issues__text">Muammoingizga tegishli bo’limni tangalng</p>
      <div class="issues__container">
        <div class="issues__name">
          <div class="issues__select">
            <div
              class="select-wrapper"
              @click="areOptionsVisible = !areOptionsVisible"
            >
              <p class="select">
                {{ selected }}
              </p>
              <img src="../assets/img/select.svg" alt="select" />
            </div>

            <div class="options" v-if="areOptionsVisible">
              <p
                class="option-text"
                v-for="issue in issues"
                :key="issue.id"
                :value="issue.name.oz"
                @click="selectOption(issue)"
              >
                {{ issue.name.uz }}
              </p>
            </div>
          </div>
        </div>
        <ul class="issues__list">
          <li
            v-show="subIssue"
            class="issues__item"
            v-for="item in defaultSubIssues"
            :key="item.id"
          >
            <nuxt-link
              class="issues__link"
              :to="'/murojaatYuborish/' + item.id"
              
              >{{ item.name.uz }}</nuxt-link
            >
          </li>
          <li class="issues__item" v-for="item in subIssues" :key="item.id">
            <nuxt-link
              class="issues__link"
              :to="'/murojaatYuborish/' + item.id"
              
              >{{ item.name.uz }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
    <!-- <Issues id="issue" :referenceId="referenceId" /> -->
    <div class="steps">
      <img src="../assets/img/steps.svg" alt="step" />
    </div>
  </div>
 
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: mapState(['stats', 'issues']),
  data() {
    return {
      headers: {
        "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
      },
      usersNum: "",
      ticketsCompleted: "",
      ticketsNum: "",
      issueName: "",
      issueId: "",
      array: [],
      // issues: [],
      issueId: "",
      subIssues: [],
      subIssue: true,
      defaultSubIssues: [],
      areOptionsVisible: false,
      selected: "Ma’lumotlar uzatish tizimlari",
      referenceId: null
    };
  },
  methods: {
    ...mapActions(['getStats', 'getIssues']),
    async getIssuesChild() {
      await this.$axios(`/references/3/children`, { headers: this.headers })
        .then(res => {
          console.log("asdf", res);
          this.defaultSubIssues = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async selectOption(issue) {
      this.areOptionsVisible = false;
      this.selected = issue.name.oz;
      this.referenceId = issue.id;
      localStorage.setItem("referenceId", this.referenceId);
      await this.$axios(`/references/${this.referenceId}/children`, { headers: this.headers })
        .then(res => {
          console.log(res);
          this.subIssues = res.data;
          this.subIssue = !this.subIssue;
        })
        .catch(err => {
          console.log(err);
        });
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
    // async getIssues() {
    //   await this.$axios("/references", { headers: this.headers })
    //     .then(res => {
    //       this.issues = res.data;
    //       console.log(this.issues);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },

    scrollToBottom() {
      var rootElement = document.documentElement;
      rootElement.scrollTo({
        bottom: "800px",
        behavior: "smooth"
      });
    }
  },
  created() {
    this.getIssues();
    this.getIssuesChild();
  },
  mounted() {
    this.getStats();
    // this.getIssues();
  },
    beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
