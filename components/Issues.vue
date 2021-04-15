<template>
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
          <!-- <li class="issues__item">
            <nuxt-link class="issues__link" to="/"
              >Internet tezligi yomonligi sababli</nuxt-link
            >
          </li>
          <li class="issues__item">
            <nuxt-link class="issues__link" to="/"
              >Veb-saytlar (domen nomlari, xosting va hokazolar)
              bo'yicha</nuxt-link
            >
          </li>
          <li class="issues__item">
            <nuxt-link class="issues__link" to="/"
              >Noto'g'ri hisoblash tufayli</nuxt-link
            >
          </li>
          <li class="issues__item">
            <nuxt-link class="issues__link" to="/"
              >Internet yomon ishlashi tufayli</nuxt-link
            >
          </li>
          <li class="issues__item">
            <nuxt-link class="issues__link" to="/"
              >Internet xizmati va IPTV tufayli ishlamayapti</nuxt-link
            >
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    referenceId:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      areOptionsVisible: false,
      selected: "Ma’lumotlar uzatish tizimlari",
      headers: {
        "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
      },
      issues: [],
      issueId: "",
      subIssues: [],
      subIssue: true,
      defaultSubIssues: [],
      referenceId: 0
    };
  },
  methods: {
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
      console.log('qwerty', this.referenceId);
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
    async getIssues() {
      await this.$axios("/references", { headers: this.headers })
        .then(res => {
          this.issues = res.data;
          console.log(this.issues);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getIssues();
    this.getIssuesChild();
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style scoped></style>
