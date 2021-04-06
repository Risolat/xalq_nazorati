<template>
  <div class="murojaatYuborish">
    <div class="container">
      <div class="breadcrumbs-list">
        <p class="breadcrumbs-item">
          Murojaat yuborish
        </p>
        <p class="breadcrumbs-item">/</p>
        <p class="breadcrumbs-item">
          Veb-saytlar (domen nomlari, xosting va hokazolar) bo'yicha
        </p>
      </div>
      <div class="form-wrapper">
        <form class="murojaat-form">
          <p class="murojaat-form-title">Murojaatingizni to’liq tushuntiring</p>
          <textarea
            cols="70"
            rows="12"
            class="murojaat-form-textarea"
            placeholder="Murojaat matni"
          ></textarea>
          <p class="murojaat-form-title">
            Murojaatingizga aloqador fayllarni yuklashingiz mumkin
          </p>
          <div class="murojaat-form-fayl">
            <button class="murojaat-form-fayl-btn">
              <img src="../assets/img/plus.svg" alt="plus" />
              <p>Fayl biriktirish</p>
            </button>
            <p>( pdf, doc, docs, xls, jpg, jpeg, png )</p>
          </div>
          <button class="murojaat-form-btn">Yuborish</button>
        </form>
        <div class="murojaatYuborish-right">
          <img
            src="../assets/img/formBg.svg"
            alt="formBg"
            class="murojaatYuborish-right-img"
            width="580"
            height="520"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
