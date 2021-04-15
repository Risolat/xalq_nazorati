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
          <b-form-group label="Ismi">
            <b-form-input class="" type="text" placeholder="Ism" v-model="formdata.first_name"></b-form-input>
          </b-form-group>
          <b-form-group label="Familiyasi">
            <b-form-input
              class=""
              type="text"
              placeholder="Familiya"
              v-model="formdata.last_name"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Address">
            <b-form-input
              class=""
              type="text"
              placeholder="Address"
              v-model="formdata.address"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Telefon raqam">
              <b-form-input
                v-model="formdata.phone"
                class=""
                type="text"
                placeholder="__ ___ __ __"
                @input="telNumber(formdata.phone)"
              ></b-form-input>
          </b-form-group>
          <div class="selectWrapper">
            <div class="selectors">
              <p>Viloyat</p>
              <div class="regions__select"></div>
              <b-form-select
                v-model="formdata.ticket_region_id"
                @change="getDistricts(formdata.ticket_region_id)"
              >
                <b-form-select-option
                  :value="item.id"
                  v-for="item in regions"
                  :key="item.id"
                  class="b-option"
                >
                  {{ item.name.uz }}
                </b-form-select-option>
              </b-form-select>
            </div>
            <div class="selectors">
              <p>Tuman</p>
              <b-form-select v-model="formdata.ticket_district_id">
                <b-form-select-option
                  :value="item.id"
                  v-for="item in districts"
                  :key="item.id"
                  class="b-option"
                >
                  {{ item.name.uz }}
                </b-form-select-option>
              </b-form-select>
            </div>
          </div>
          <div class="selectWrapper">
            <div class="selectors">
              <p>Type</p>
              <div class="regions__select"></div>
              <b-form-select v-model="formdata.type" @change="getType(type)">
                <b-form-select-option
                  :value="item.id"
                  v-for="item in types"
                  :key="item.id"
                  class="b-option"
                >
                  {{ item.name.uz }}
                </b-form-select-option>
              </b-form-select>
            </div>
            <div class="selectors">
              <p>Letters</p>
              <b-form-select v-model="formdata.letter_id">
                <b-form-select-option
                  :value="item.id"
                  v-for="item in letters"
                  :key="item.id"
                  class="b-option"
                >
                  {{ item.name.uz }}
                </b-form-select-option>
              </b-form-select>
            </div>
          </div>
          <textarea
            cols="70"
            rows="12"
            class="murojaat-form-textarea"
            placeholder="Murojaat matni"
            v-model="formdata.description"
          ></textarea>
          <b-form-group label="Qo'shimcha Telefon raqam">
              <b-form-input
                @input="extraTelNumber(formdata.extra_phone)"
                class=""
                type="text"
                placeholder="__ ___ __ __"
                v-model="formdata.extra_phone"
              ></b-form-input>
          </b-form-group>
          <p class="murojaat-form-title">
            Murojaatingizga aloqador fayllarni yuklashingiz mumkin
          </p>
          <div class="murojaat-form-fayl">
            <div class="input__wrapper">
              <!-- <input
                type="file"
                name="file"
                id="input__file"
                class="input input__file"
                multiple="multiple"
              />
              <label for="input__file">
                <img src="../assets/img/plus.svg" alt="plus" />
                <p>Fayl biriktirish </p>
              </label> -->
            </div>
            <p>( pdf, doc, docs, xls, jpg, jpeg, png )</p>
          </div>
          <button class="murojaat-form-btn" @click="postMurojaat()">Yuborish</button>
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
export default {
  data() {
    return {
      headers: {
        "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
      },
      regionId: "",
      districtId: "",
      type: "",
      letterId: "",
      regions: [],
      districts: [],
      areOptionsVisible: false,
      selected: "qweertry",
      types: [],
      letters: [],
      referenceId: "",
      formdata: {
        first_name: '',
        last_name: '',
        description: '',
        address: '',
        phone: '',
        ticket_region_id: '',
        ticket_district_id: '',
        reference_parent_id: '',
        reference_id: this.$route.params.id,
        extra_phone: '',
        letter_id: '',
        type: '',
        files: []
      }
    };
  },
  methods: {
    async getRegions() {
      await this.$axios("/regions", { headers: this.headers })
        .then(res => {
          console.log(res);
          this.regions = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getDistricts(id) {
      await this.$axios(`/region/${id}/districts`, { headers: this.headers })
        .then(res => {
          console.log(res);
          this.districts = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getType() {
      await this.$axios(`/ticket-shapes`, { headers: this.headers })
        .then(res => {
          console.log(res);
          this.types = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getLetters() {
      await this.$axios(`/letters`, { headers: this.headers })
        .then(res => {
          console.log(res);
          this.letters = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async postMurojaat(){
      await this.$axios.post('/create-ticket', {headers: this.headers}, this.formdata)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getInfo(){
      this.formdata.reference_parent_id = localStorage.getItem("referenceId");
    },
    telNumber(){
       this.formdata.phone = this.formdata.phone
        .replace(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g)
        .trim()
    },
    extraTelNumber(){
      this.formdata.extra_phone = this.formdata.extra_phone
        .replace(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g)
        .trim()
    }
  },
  created() {
    this.getRegions();
    this.getType();
    this.getLetters();
  },
  mounted(){
    // this.getInfo();
  }
};
</script>

<style></style>
 */