<template>
  <div class="murojaatYuborish">
    <div class="container">
      <div class="breadcrumbs-list">
        <p class="breadcrumbs-item">
          {{$t('murojaatYuborish.title')}}
        </p>
        <p class="breadcrumbs-item">/</p>
        <p class="breadcrumbs-item">
          {{referenceName[`${$i18n.locale}`]}}
        </p>
      </div>
      <div class="form-wrapper">
        <form class="murojaat-form">
          <p class="murojaat-form-title">{{$t('murojaatYuborish.firstText')}}</p>
          <b-form-group label="Telefon raqam">
            <b-form-input
              v-model="formdata.phone"
              class=""
              type="text"
              placeholder="__ ___ __ __"
              v-mask="'## ###-##-##'"
              required
            ></b-form-input>
          </b-form-group>
          <div class="selectWrapper">
            <div class="selectors">
              <p>{{$t('murojaatYuborish.region')}}</p>
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
                  {{ item.name[`${$i18n.locale}`] }}
                </b-form-select-option>
              </b-form-select>
            </div>
            <div class="selectors">
              <p>{{$t('murojaatYuborish.district')}}</p>
              <b-form-select v-model="formdata.ticket_district_id">
                <b-form-select-option
                  :value="item.id"
                  v-for="item in districts"
                  :key="item.id"
                  class="b-option"
                >
                  {{ item.name[`${$i18n.locale}`] }}
                </b-form-select-option>
              </b-form-select>
            </div>
          </div>
          <b-form-group label="Address">
            <b-form-input
              class=""
              type="text"
              placeholder="Address"
              v-model="formdata.address"
              required
            ></b-form-input>
          </b-form-group>
          <!-- <div class="selectWrapper"> -->
            <div class="selectors">
              <p>{{$t('murojaatYuborish.type')}}</p>
              <div class="regions__select"></div>
              <b-form-select v-model="formdata.type" @change="getType(type)">
                <b-form-select-option
                  :value="item.id"
                  v-for="item in types"
                  :key="item.id"
                  class="b-option"
                >
                  {{ item.name[`${$i18n.locale}`] }}
                </b-form-select-option>
              </b-form-select>
            </div>
            <!-- <div class="selectors">
              <p>{{$t('murojaatYuborish.letters')}}</p>
              <b-form-select v-model="formdata.letter_id">
                <b-form-select-option
                  :value="item.id"
                  v-for="item in letters"
                  :key="item.id"
                  class="b-option"
                >
                  {{ item.name[`${$i18n.locale}`] }}
                </b-form-select-option>
              </b-form-select>
            </div> -->
          <!-- </div> -->
          <textarea
            cols="70"
            rows="12"
            class="murojaat-form-textarea"
            placeholder="Murojaat matni"
            v-model="formdata.description"
            required
          ></textarea>
          <b-form-group label="Qo'shimcha Telefon raqam">
            <b-form-input
              @input="extraTelNumber(formdata.extra_phone)"
              class=""
              type="text"
              placeholder="__ ___ __ __"
              v-model="formdata.extra_phone"
              v-mask="'## ###-##-##'"
            ></b-form-input>
          </b-form-group>
          <p class="murojaat-form-title">
            {{$t('murojaatYuborish.secondText')}}
          </p>
          <div class="murojaat-form-fayl">
            <div class="murojaat-fayl-actions">
              <div class="input__wrapper">
                <input
                  type="file"
                  name="file"
                  id="input__file"
                  ref="file"
                  class="input input__file"
                  multiple
                  @change="sendFile($event)"
                />
                <label for="input__file">
                  <img src="../assets/img/plus.svg" alt="plus" />
                  <p>{{$t('murojaatYuborish.fileBtn')}}</p>
                </label>
              </div>
              <p>( pdf, doc, docs, xls, jpg, jpeg, png )</p>
            </div>
            <div class="sended-files" v-for="(item, index) in fileName" :key="index">
              <p>{{ item.file }}</p>
              <button @click.prevent="fileName.splice(index, 1) && formdata.files.pop(item.id)" type="button" v-show="fileName != ''">{{$t('murojaatYuborish.delete')}}</button>
            </div>
          </div>
          <button @click="postFile()" type="button" class="send-file-btn">
            {{$t('murojaatYuborish.sendBtn')}}
          </button>
          <nuxt-link
            type="button"
            class="murojaat-form-btn"
            @click="postMurojaat()"
            :to="localePath('/murojaat')"
          >
            {{$t('murojaatYuborish.submitBtn')}}
          </nuxt-link>
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
import Vue from 'vue'
import VueMask from 'v-mask'
Vue.use(VueMask)
import {mapState, mapActions} from 'vuex';
export default {
  computed: mapState(['user']),
  data() {
    return {
      headers: {
        "Content-Type": "multipart/form-data"
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
      formdata: {
        first_name: '',
        last_name: '',
        description: "",
        address: "",
        phone: "",
        ticket_region_id: "",
        ticket_district_id: "",
        reference_parent_id: '',
        reference_id: this.$route.params.id,
        extra_phone: "",
        letter_id: "1",
        type: "",
        files: [],
      },
      files: null,
      fileName: [],
      referenceName: ''
    };
  },
  methods: {
    ...mapActions(['getUser']),
    sendFile(event) {
      
      this.files = event.target.files[0];
      
    },
    setUsersInfo(){
         this.first_name = this.user.first_name;
    },
    async postFile() {
      const fd = new FormData();
      fd.append("file", this.files);
      await this.$axios
        .post("/file-upload", fd)
        .then(res => {
          
          this.formdata.files.push(res.data.data.id);
          this.fileName.push(res.data.data);
          console.log("qwerty", this.formdata.files);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async postMurojaat() {
      await this.$axios
        .post("/create-ticket", this.formdata)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async deleteFile(id){
      await this.$axios.delete(`/file-delete/${id}`)
        .then(res => {
          console.log(res)
          this.formdata.files.pop(id);
          console.log(this.formdata.files)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getRegions() {
      await this.$axios("/regions")
        .then(res => {
          console.log(res);
          this.regions = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getDistricts(id) {
      await this.$axios(`/region/${id}/districts`)
        .then(res => {
          console.log(res);
          this.districts = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getType() {
      await this.$axios(`/ticket-shapes`)
        .then(res => {
          console.log(res);
          this.types = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getNameIssue(){

      await this.$axios(`/reference/${this.$route.params.id}`)
        .then(res => {
         
          this.referenceName = res.data.name;
          this.formdata.reference_parent_id = res.data.parent_id;
         
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getUser(){  
      try{        
        let user = await this.$axios(`user/me`);       
        this.formdata.first_name = user.data.data.first_name;
        this.formdata.last_name = user.data.data.last_name; 
      }catch{
          console.log(err)
      }    
    },

 

    telNumber() {

      this.formdata.phone = this.formdata.phone
        .replace(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
        .trim();
    },
    extraTelNumber() {
      this.formdata.extra_phone = this.formdata.extra_phone
        .replace(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
        .trim();
    }
  },
  created() {
    this.getRegions();
    this.getType();  
    // this.getLetters();
    
  },
  mounted() {
    this.setUsersInfo()
    this.getNameIssue();
    this.getUser();  
    
  }
};
</script>

<style scoped>
.container{
  max-width: 1290px;
  margin: 0 auto;
}
</style>
