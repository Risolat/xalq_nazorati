<template>
  <div class="container">
    <div class="murojaat">
      <h3 class="murojaat-text">{{$t('murojaat.myInfo')}}</h3>
      <ul class="murojaat-user-list">
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">{{$t('murojaat.lastName')}}</p>
          <p class="murojaat-user-text">{{user.last_name}}</p>
        </li>
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">{{$t('murojaat.firstName')}}</p>
          <p class="murojaat-user-text">{{user.first_name}}</p>
        </li>
      </ul>
      <div class="user-murojaats">
        <b-card no-body>
        <b-tabs pills card>
          <b-tab :title="$t('murojaatTable.allTickets')" active
            ><b-card-text>
              <div>
                <table>
                  <tr>
                    <th>#</th>
                    <th>{{$t('murojaatTable.date')}}</th>
                    <th>{{$t('murojaatTable.issueType')}}</th>
                    <th>{{$t('murojaatTable.issuePosition')}}</th>
                    <th>{{$t('murojaatTable.more')}}</th>
                  </tr>
                  <tr v-for="(item, index) in myTickets" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{item.created_at.slice(0, 10)}}</td>
                    <td>{{item.reference.name[`${$i18n.locale}`]}}</td>
                    <td>
                      <div class="murojaat-signal">
                        <span :class="{
                          green: item.status === '5',
                          blue: item.status === '1',
                          orange: item.status === '2',
                          yellow: item.status === '3'

                        }"></span>
                        <p v-show="item.status === '5'">Yakunlangan</p>
                        <p v-show="item.status === '2'">Ijroga Yuborildi</p>
                        <p v-show="item.status === '3'">Ijro qilinmoqda</p>
                        <p v-show="item.status === '1'">Murojaat Yaratildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link :to="'/batafsil/' + item.code" class="batafsil-link batafsil-link-active">
                        {{$t('murojaatTable.button')}}
                      </nuxt-link>
                    </td>
                  </tr>
                </table>
              </div>
            </b-card-text></b-tab
          >
          <b-tab :title="$t('murojaatTable.ticketsiNIjro')">
            <b-card-text>
              <div>
                <table>
                  <tr>
                    <th>#</th>
                    <th>{{$t('murojaatTable.date')}}</th>
                    <th>{{$t('murojaatTable.issueType')}}</th>
                    <th>{{$t('murojaatTable.issuePosition')}}</th>
                    <th>{{$t('murojaatTable.more')}}</th>
                  </tr>
                  <tr v-for="(item, index) in myTickets" :key="index" v-show="item.status === '3'">
                    <td>{{index + 1}}</td>
                    <td>{{item.created_at.slice(0, 10)}}</td>
                    <td>{{item.reference.name[`${$i18n.locale}`]}}</td>
                    <td>
                      <div class="murojaat-signal">
                        <span :class="{
                          green: item.status === '5',
                          blue: item.status === '1',

                        }"></span>
                        <p v-show="item.status === '5'">Yakunlangan</p>
                        <p v-show="item.status === '1'">Murojaat Yaratildi</p>
                        <p v-show="item.status === '2'">Ijroga Yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link :to="'/batafsil/' + item.code" class="batafsil-link batafsil-link-active">
                        Ko'rish
                      </nuxt-link>
                    </td>
                  </tr>
                </table>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab :title="$t('murojaatTable.ticketsFinished')">
            <b-card-text>
              <div>
                <table>
                  <tr>
                    <th>{{$t('murojaatTable.date')}}</th>
                    <th>{{$t('murojaatTable.issueType')}}</th>
                    <th>{{$t('murojaatTable.issuePosition')}}</th>
                    <th>{{$t('murojaatTable.more')}}</th>
                  </tr>
                  <tr v-for="(item, index) in myTickets" :key="index" v-show="item.status === '5'">
                    <td>{{index + 1}}</td>
                    <td>{{item.created_at.slice(0, 10)}}</td>
                    <td>{{item.reference.name[`${$i18n.locale}`]}}</td>
                    <td>
                      <div class="murojaat-signal">
                        <span :class="{
                          green: item.status === '5',
                          blue: item.status === '1',

                        }"></span>
                        <p v-show="item.status === '5'">Yakunlangan</p>
                        <p v-show="item.status === '1'">Murojaat Yaratildi</p>
                        <p v-show="item.status === '2'">Ijroga Yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link :to="localePath('/batafsil/' + item.code)" class="batafsil-link batafsil-link-active">
                        Ko'rish
                      </nuxt-link>
                    </td>
                  </tr>
                </table>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  // middleware: 'authenticated',
  computed: mapState(['user']),
  data() {
    return {
      myTickets: [],
      first_name: '',
      last_name: '',
      address: '',
    };
  }, 
  methods:{
    ...mapActions(['getUser']),
    async getMyTickets(){
      await this.$axios('/my-tickets')
        .then(res => {
          console.log('qwerty', res)
          this.myTickets = res.data.data;
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created(){
    this.getUser();
  },
  mounted(){
    this.getMyTickets();
  }
};
</script>

<style scoped>
.container{
  max-width: 1290px;
  margin: 0 auto;
}
</style>
