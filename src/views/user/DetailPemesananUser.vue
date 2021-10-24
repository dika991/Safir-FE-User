<template>
  <v-col cols="12" md="12">
    <v-container>
      <v-card>
        <v-row class="px-5">
          <v-col>
            <table>
              <tr>
                <td class="font-weight-medium">Paket</td>
                <td>:</td>
                <!-- <td>{{ data.detail[0].paket.nama }}</td> -->
              </tr>
              <tr>
                <td class="font-weight-medium">Nama Pemesan</td>
                <td>:</td>
                <td>{{ data.nama }}</td>
              </tr>
              <tr>
                <td class="font-weight-medium">Email</td>
                <td>:</td>
                <td>{{ data.email }}</td>
              </tr>
              <tr>
                <td class="font-weight-medium">No. Telepon</td>
                <td>:</td>
                <td>{{ data.no_hp }}</td>
              </tr>
              <tr v-if="data.status == 0">
                <td class="font-weight-medium">Status</td>
                <td>:</td>
                <td>
                  <v-btn outlined x-small disabled>Belum Bayar Uang Muka</v-btn>
                </td>
              </tr>
              <tr>
                <td class="font-weight-medium">Catatan</td>
                <td>:</td>
                <td>{{ data.catatan }}</td>
              </tr>
            </table>
          </v-col>
          <v-col>
            <span
              class="
                text-h5
                float-right
                font-weight-medium
                text-center
                teal--text
              "
            >
              Kode Pemesanan<br />
              {{ data.code }}
            </span>
          </v-col>
        </v-row>
        <v-divider class="mt-5 mb-5" />
        <v-row class="px-5">
          <v-col cols="12" md="12">
            <v-tabs
              v-model="tab"
              background-color="grey darken-3 accent-4"
              centered
              dark
              icons-and-text
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1">
                Recents
                <v-icon>mdi-phone</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Favorites
                <v-icon>mdi-heart</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Nearby
                <v-icon>mdi-account-box</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <span class="text-h6 font-weight-medium"> Jemaah </span>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "DetailPemesananUser",
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  computed: {
    ...mapState("pemesanan", {
      data: (state) => state.detail,
    }),
  },
  methods: {
    ...mapActions("pemesanan", ["getDetailPemesanan"]),
  },
  created() {
    this.getDetailPemesanan(this.$route.params.code);
  },
};
</script>