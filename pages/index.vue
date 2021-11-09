<template>

  <div class="landing">
    
    <div class="container">
      <div class="hero">
        <div class="hero-left">
          <h1 class="hero-left__title">{{$t('hero.title')}}</h1>
          <p class="hero-left__text">
             {{$t('hero.text')}} 
          </p>
          <nuxt-link class="hero-left__btn" to="#issues">
            {{$t('hero.btn')}}
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
            <p class="stats__text">{{$t('stats.stats_item_1')}}</p>
          </li>
          <li class="stats__item">
            <div class="stats__img-wrapper">
              <img src="../assets/img/stats2.svg" alt="stats" />
              <p class="stats__num">{{ stats.number_of_tickets }}</p>
            </div>
            <p class="stats__text">{{$t('stats.stats_item_2')}}</p>
          </li>
          <li class="stats__item">
            <div class="stats__img-wrapper">
              <img src="../assets/img/stats3.svg" alt="stats" />
              <p class="stats__num">{{ stats.number_of_completed_tickets}}</p>
            </div>
            <p class="stats__text" id="issues">{{$t('stats.stats_item_3')}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="issues">
    <div class="container">
      <p class="issues__text">{{$t('issues.text')}}</p>
      <div class="issues__container">
        <div class="issues__name">
          <div class="issues__select">
            <div
              class="select-wrapper"
              @click="areOptionsVisible = !areOptionsVisible"
            >
              <p class="select" v-if="selected === ''">
                {{ $t('issues.defaultIssues') }}
              </p>
              <p class="select" v-else>{{selected}}</p>
              <img src="../assets/img/select.svg" alt="select" />
            </div>

            <div class="options">
              <p
                class="option-text"
                v-for="issue in issues"
                :key="issue.id"
                :value="issue.name.oz"
                @click="selectOption(issue)"
              >
                {{ issue.name[`${$i18n.locale}`] }}
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
              :to="localePath('/murojaatYuborish/' + item.id)"
              >{{ item.name[`${$i18n.locale}`] }}</nuxt-link>
          </li>
          <li class="issues__item" v-for="item in subIssues" :key="item.id">
            <nuxt-link
              class="issues__link"
              :to="localePath('/murojaatYuborish/' + item.id)"
              @click="chooseRegion(item.id, )"
              >
                {{ item.name[`${$i18n.locale}`]}}
              
              </nuxt-link>

          </li>
        </ul>
      </div>
    </div>
  </div>
    <div class="steps">
      <img src="../assets/img/steps.svg" alt="step" />
    </div>
  </div>
 
</template>

<script>
import {mapState, mapActions } from 'vuex';

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
      issueId: "",
      subIssues: [],
      subIssue: true,
      defaultSubIssues: [],
      areOptionsVisible: false,
      selected: "",
      referenceId: null
    };
  },
  methods: {
    ...mapActions(['getStats', 'getIssues']),
    async getIssuesChild() {
      await this.$axios(`/references/3/children`)
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
      this.subIssue = true;      
     // localStorage.setItem("referenceId", this.referenceId);

      await this.$axios(`/references/${this.referenceId}/children`)
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
.container{
  max-width: 1290px;
  margin: 0 auto;
}
</style>
