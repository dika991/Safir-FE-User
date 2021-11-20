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
                <td v-if="data.detail[0]">{{ data.detail[0].paket.nama }}</td>
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
        <v-row class="px-5">
          <v-col class="px-5">
            <v-row>
              Total Harga : {{ data.transaksi.total_harga | toCurrency }}
            </v-row>
            <v-row>
              Sudah Dibayarkan : {{ data.transaksi.sudah_dibayar | toCurrency }}
            </v-row>
            <v-row>
              Belum Dibayarkan : {{ data.transaksi.belum_dibayar | toCurrency }}
            </v-row>
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
                Jemaah
                <v-icon>mdi-account</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Tagihan
                <v-icon>mdi-cash</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item :value="'tab-1'">
                <v-card flat>
                  <v-card-text>
                    <jemaah-tab
                      :headerJemaah="headerJemaah"
                      :jemaah="data.jemaah"
                    />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :value="'tab-2'">
                <v-card flat>
                  <v-card-text>
                    <template>
                      <v-data-table
                        :headers="headers"
                        :items="data.tagihan"
                        :items-per-page="5"
                        class="elevation-1"
                      >
                        <template v-slot:item.status="{ item }">
                          <v-chip
                            class="ma-2"
                            color="red"
                            text-color="white"
                            v-if="item.status == 0"
                          >
                            Belum Dibayar
                          </v-chip>
                          <v-chip
                            class="ma-2"
                            color="yellow"
                            text-color="dark"
                            v-else-if="item.status == 1"
                          >
                            Menunggu Konfirmasi
                          </v-chip>
                        </template>
                        <template v-slot:item.nominal="{ item }">
                          {{ item.nominal | toCurrency }}
                        </template>

                        <template v-slot:item.aksi="{ item }">
                          <v-btn
                            x-small
                            @click="openDialog(item.id)"
                            color="teal"
                            class="white--text"
                            v-if="item.status == 0"
                          >
                            Verifikasi
                            <v-icon>mdi-add</v-icon>
                          </v-btn>
                        </template>
                      </v-data-table>
                    </template>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Upload Bukti Transfer
          </v-card-title>

          <v-card-text>
            <v-col>
              <v-row>
                <v-file-input
                  v-model="files"
                  placeholder="Upload Bukti Pembayaran"
                  label="File Upload"
                  prepend-icon="mdi-plus"
                  type="file"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
              </v-row>
            </v-col>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="postSubmit()"> Send </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex";
import $axios from "../../api.js";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import JemaahTab from "./component/JemaahTab.vue";
export default {
  name: "DetailPemesananUser",
  components: {
    Loading,
    JemaahTab,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      selectedId: null,
      files: null,
      tab: null,
      dialog: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      headers: [
        {
          text: "Deskripsi",
          align: "start",
          sortable: false,
          value: "deskripsi",
        },
        { text: "Tipe", value: "tipe" },
        { text: "Batas Terakhir", value: "limit_at" },
        { text: "Status", value: "status" },
        { text: "Nominal", value: "nominal" },
        { text: "Aksi", value: "aksi" },
      ],
      headerJemaah: [
        {
          text: "Nama",
          align: "start",
          sortable: false,
          value: "nama",
        },
        { text: "Jenis Kelamin", value: "jenis_kelamin" },
        { text: "Usia", value: "usia" },
        { text: "Aksi", value: "aksi" },
      ],
    };
  },
  computed: {
    ...mapState("pemesanan", {
      data: (state) => state.detail,
    }),
  },
  methods: {
    ...mapActions("pemesanan", ["getDetailPemesanan"]),
    openDialog(id) {
      this.selectedId = id;
      this.dialog = true;
    },
    onCancel() {
      this.isLoading = false;
    },
    postSubmit() {
      this.isLoading = true;
      let data = new FormData();
      data.append("image", this.files);
      $axios
        .post(`/book/payment/${this.selectedId}/upload`, data)
        .then(() => {
          this.getDetailPemesanan(this.$route.params.code);
        })
        .catch((error) => {
          this.files = null;
          this.$swal({
            icon: "error",
            text: error.response.data.message,
            toast: true,
            showConfirmButton: false,
            position: "top-end",
            timer: 1500,
          });
          console.log(error.response.data);
        })
        .finally(() => {
          this.isLoading = false;
          this.dialog = false;
        });
    },
  },
  created() {
    this.getDetailPemesanan(this.$route.params.code);
  },
};
</script>