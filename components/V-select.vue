<template>
  <div class="v-select">
    <p @click="langOptionsVisible = !langOptionsVisible">{{ selected }}</p>
    <div class="options-lang" v-if="langOptionsVisible">
      <nuxt-link
        class="option-text"
        @click="selectLangOption('uz')"
        :class="{ active: $i18n.locale === 'oz' }"
        :to="switchLocalePath('oz')"
      >
        uz
      </nuxt-link>
      <nuxt-link
        class="option-text"
        @click="selectLangOption('ru')"
        :class="{ active: $i18n.locale === 'ru' }"
        :to="switchLocalePath('ru')"
      >
        ru
      </nuxt-link>
      <nuxt-link
        class="option-text"
        @click="selectLangOption('oz')"
        :class="{ active: $i18n.locale === 'uz' }"
        :to="switchLocalePath('uz')"
      >
        o'z
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "V-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      langOptionsVisible: false
    };
  },
  methods: {
    selectLangOption() {
      console.log('lang');
      this.$emit("select", option);
      this.langOptionsVisible = false;
    },
    hideSelect() {
      this.langOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style>

</style>
