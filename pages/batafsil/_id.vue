<template>
  <div class="container">
    <div class="batafsil">
      <div class="batafsil-title">{{$t('batafsil.title')}}</div>
      <ul class="batafsil-list">
        <li class="batafsil-item">
          <p class="batafsil-blur">{{$t('batafsil.direction')}}</p>
          <p class="batafsil-text">
            <!-- {{myTicket.reference.name.uz}} -->
          </p>
        </li>
        <li class="batafsil-item">
          <p class="batafsil-blur">{{$t('batafsil.murojaatPosition')}}</p>
          <div class="batafsil-text-wrapper">
            <p v-show="myTicket.status === '5'" class="batafsil-text">Yakunlandi</p>
            <span></span>
          </div>
        </li>
        <li class="batafsil-item">
          <p class="batafsil-blur">{{$t('batafsil.type')}}</p>
          <p class="batafsil-text">Asosli</p>
        </li>
        <li class="batafsil-item">
          <p class="batafsil-blur">{{$t('batafsil.createdDate')}}</p>
          <p class="batafsil-text">{{myTicket.created_at.slice(0, 10)}}</p>
        </li>
        <li class="batafsil-item">
          <p class="batafsil-blur">{{$t('batafsil.sentDate')}}</p>
          <p class="batafsil-text">{{myTicket.sent_at.slice(0, 10)}}</p>
        </li>
        <li class="batafsil-item">
          <p class="batafsil-blur">{{$t('batafsil.date')}}</p>
          <p class="batafsil-text">{{myTicket.updated_at.slice(0, 10)}} gacha</p>
        </li>
        <li class="batafsil-item">
          <p class="batafsil-blur">
            {{$t('batafsil.controlBlock')}}
          </p>
          <p class="batafsil-text">
            {{myTicket.address}}
          </p>
        </li>
        <li class="batafsil-item">
          <p class="batafsil-blur">{{$t('batafsil.executors')}}</p>
          <p class="batafsil-text" v-for="item in executors" :key="item.id">{{item.executor.first_name}}, {{item.executor.last_name}}</p>
        </li>
        <li class="batafsil-item" >
          <p class="batafsil-blur">{{$t('batafsil.files')}}</p>
          <a v-for="item in user_files" :key="item.id" :href="`https://xn.technocorp.uz/storage/${item.file_path}/${item.file_name}`" target="_blank" :download="item.file">{{item.file}}</a>
          <!-- <a href="#" download>Document_new.pdf</a> -->
        </li>
      </ul>
      <p class="batafsil-murojaat-matni">{{$t('batafsil.text')}}</p>
      <p class="batafsil-murojaat-text">
        {{myTicket.description}}
      </p>
      <p class="batafsil-murojaat-ans-title">{{$t('batafsil.answer')}}</p>
      <p class="batafsil-murojaat-text">
        {{myTicket.comment}}
      </p>
      <p class="batafsil-murojaat-birik">{{$t('batafsil.files')}}</p>
      <a v-for="item in files" :key="item.id" :href="`https://xn.technocorp.uz/storage/${item.file_path}/${item.file_name}`" target="_blank" :download="item.file">{{item.file}}</a>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          myTicket: [],
          user_files: [],
          executors: [],
          files: []
        }
    },
    methods: {
        async getMyTicketDesc(){
            await this.$axios(`/my-ticket/${this.$route.params.id}`)
                .then(res => {
                    console.log('id',res)
                    this.myTicket = res.data.data;
                    this.user_files = res.data.data.user_files;
                    this.executors = res.data.data.executions;
                    this.files = res.data.data.files;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async getMyTickets(){
            await this.$axios(`/my-tickets`)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
            })
        }
    },
    mounted(){
        this.getMyTicketDesc();
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
