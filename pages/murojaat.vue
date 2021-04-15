<template>
  <div class="container">
    <div class="murojaat">
      <h3 class="murojaat-text">Ma'lumotlarim</h3>
      <ul class="murojaat-user-list">
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">Familiya</p>
          <p class="murojaat-user-text">Abduganiyev</p>
        </li>
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">Ism</p>
          <p class="murojaat-user-text">Sardor</p>
        </li>
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">Sharifi</p>
          <p class="murojaat-user-text">Shuxrat o’gli</p>
        </li>
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">Manzil</p>
          <p class="murojaat-user-text">
            Chilonzor tumani. Alisher Navoiy ko’chasi 30
          </p>
        </li>
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">Pasport ma’lumotlari</p>
          <p class="murojaat-user-text">AA523525698428</p>
        </li>
        <li class="murojaat-user-item">
          <p class="murojaat-user-blur">Tug’ilgan kun</p>
          <p class="murojaat-user-text">09/12/1996</p>
        </li>
      </ul>
      <div class="user-murojaats">
        <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Barchasi" active
            ><b-card-text>
              <div>
                <table>
                  <tr>
                    <th>#</th>
                    <th>Sana</th>
                    <th>Muammo turi</th>
                    <th>Muammo holati</th>
                    <th>Batafsil</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>26.01.2021</td>
                    <td>Internet va IPTV xizmatiga ulanish bo'yicha</td>
                    <td>
                      <div class="murojaat-signal">
                        <span class="murojaat-signal-yellow"></span>
                        <p>Ijroga yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link to="/batafsil" class="batafsil-link batafsil-link-active">
                        Ko'rish
                      </nuxt-link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>26.01.2021</td>
                    <td>
                      Veb-saytlar (domen nomlari, xosting va hokazolar) bo'yicha
                    </td>
                    <td>
                      <div class="murojaat-signal">
                        <span class="murojaat-signal-blue"></span>
                        <p>Ijroga yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link to="/batafsil" class="batafsil-link">Ko'rish</nuxt-link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>26.01.2021</td>
                    <td>Internet va IPTV xizmatiga ulanish bo'yicha</td>
                    <td>
                      <div class="murojaat-signal">
                        <span class="murojaat-signal-green"></span>
                        <p>Ijroga yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link to="/batafsil" class="batafsil-link">Ko'rish</nuxt-link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>26.01.2021</td>
                    <td>
                      Veb-saytlar (domen nomlari, xosting va hokazolar) bo'yicha
                    </td>
                    <td>
                      <div class="murojaat-signal">
                        <span class="murojaat-signal-yellow"></span>
                        <p>Ijroga yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link to="/batafsil" class="batafsil-link">Ko'rish</nuxt-link>
                    </td>
                  </tr>
                </table>
              </div>
            </b-card-text></b-tab
          >
          <b-tab title="Ijrodagi">
            <b-card-text>
              <div>
                <table>
                  <tr>
                    <th>#</th>
                    <th>Sana</th>
                    <th>Muammo turi</th>
                    <th>Muammo holati</th>
                    <th>Batafsil</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>26.01.2021</td>
                    <td>Internet va IPTV xizmatiga ulanish bo'yicha</td>
                    <td>
                      <div class="murojaat-signal">
                        <span class="murojaat-signal-yellow"></span>
                        <p>Ijroga yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link to="/batafsil" class="batafsil-link">
                        Ko'rish
                      </nuxt-link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>26.01.2021</td>
                    <td>
                      Veb-saytlar (domen nomlari, xosting va hokazolar) bo'yicha
                    </td>
                    <td>
                      <div class="murojaat-signal">
                        <span class="murojaat-signal-yellow"></span>
                        <p>Ijroga yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link to="/batafsil" class="batafsil-link">Ko'rish</nuxt-link>
                    </td>
                  </tr>
                </table>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Yakunlangan">
            <b-card-text>
              <div>
                <table>
                  <tr>
                    <th>#</th>
                    <th>Sana</th>
                    <th>Muammo turi</th>
                    <th>Muammo holati</th>
                    <th>Batafsil</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>26.01.2021</td>
                    <td>Internet va IPTV xizmatiga ulanish bo'yicha</td>
                    <td>
                      <div class="murojaat-signal">
                        <span class="murojaat-signal-green"></span>
                        <p>Ijroga yuborildi</p>
                      </div>
                    </td>
                    <td>
                      <nuxt-link to="/batafsil" class="batafsil-link">Ko'rish</nuxt-link>
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
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
