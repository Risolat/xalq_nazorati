<template>
  <div class="issues">
    <div class="container">
      <p class="issues__text">Muammoingizga tegishli bo’limni tangalng</p>
      <div class="issues__container">
        <div class="issues__name">
          <div class="issues__select">
            <p class="issues__select-text">Ma’lumotlar uzatish tizimlari</p>
            <img src="../assets/img/select.svg" alt="select" />
          </div>
          <div class="issues__other">
            <nuxt-link to="/" class="issues__other-link"
              >Mobil aloqa xizmatlari sifati</nuxt-link
            >
            <nuxt-link to="/" class="issues__other-link"
              >Mahalliy telefon xizmatlari</nuxt-link
            >
            <nuxt-link to="/" class="issues__other-link"
              >Ma’lumotlar uzatish tizimlari
            </nuxt-link>
            <nuxt-link to="/" class="issues__other-link"
              >Pochta va matbuot xizmati</nuxt-link
            >
          </div>
        </div>
        <!-- <select name="issues" class="issues__select">
        <option value="2" class="issues__option">Mobil aloqa xizmatlari sifati</option>
        <option value="2" class="issues__option">Mahalliy telefon xizmatlari</option>
        <option value="2" class="issues__option" selected>Ma’lumotlar uzatish tizimlari</option>
        <option value="2" class="issues__option">Pochta va matbuot xizmati</option>
      </select> -->
        <ul class="issues__list">
          <li class="issues__item">
            <nuxt-link class="issues__link" to="/"
              >Internet va IPTV xizmatiga ulanish bo'yicha</nuxt-link
            >
          </li>
          <li class="issues__item">
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
          </li>
        </ul>
      </div>
      <!-- <div class="issues__other">
      <nuxt-link to="/" class="issues__other-link"
        >Mobil aloqa xizmatlari sifati</nuxt-link
      >
      <nuxt-link to="/" class="issues__other-link"
        >Mahalliy telefon xizmatlari</nuxt-link
      >
      <nuxt-link to="/" class="issues__other-link"
        >Ma’lumotlar uzatish tizimlari
      </nuxt-link>
      <nuxt-link to="/" class="issues__other-link"
        >Pochta va matbuot xizmati</nuxt-link
      >
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Ma’lumotlar uzatish tizimlari " },
        { value: "a", text: "Mobil aloqa xizmatlari sifati" },
        { value: "b", text: "Mahalliy telefon xizmatlari" },
        { value: "c", text: "Pochta va matbuot xizmati" }
      ]
    };
  }
};
</script>

<style></style>
