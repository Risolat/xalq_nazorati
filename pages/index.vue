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
          <nuxt-link class="hero-left__btn" to="/">Murojaat yuborish</nuxt-link>
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
              <p class="stats__num">94</p>
            </div>
            <p class="stats__text">Foydalanuvchilar</p>
          </li>
          <li class="stats__item">
            <div class="stats__img-wrapper">
              <img src="../assets/img/stats2.svg" alt="stats" />
              <p class="stats__num">2</p>
            </div>
            <p class="stats__text">Tushgan murojaatlar</p>
          </li>
          <li class="stats__item">
            <div class="stats__img-wrapper">
              <img src="../assets/img/stats3.svg" alt="stats" />
              <p class="stats__num">1</p>
            </div>
            <p class="stats__text">Hal qilingan muammolar</p>
          </li>
        </ul>
      </div>
    </div>
    <Issues />
  </div>
</template>

<script>
import Issues from "../components/Issues";

export default {
  components: { Issues }
};
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
</style>
