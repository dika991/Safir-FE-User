<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-col cols="12" sm="8" class="mx-auto">
          <v-card>
            <v-row>
              <v-col cols="3" class="mx-1 pl-5">
                <v-img
                  class="mx-auto"
                  max-height="50"
                  max-width="50"
                  src="../../assets/logo.png"
                ></v-img>
                <!-- <v-img src="../../assets/logo.png" width="100px"></v-img> -->
                <span class="text-h6 mx-auto text-center">Safir Indonesia</span>
              </v-col>
              <v-col cols="6" class="mx-auto float-right">
                Tanggal Transaksi : {{ data.created_at }}
              </v-col>
            </v-row>
            <v-divider />
            <v-card-text>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col>
                      <table>
                        <tr>
                          <td class="font-weight-medium">Paket</td>
                          <td>:</td>
                          <td>{{ data.detail[0].paket.nama }}</td>
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
                            <v-btn outlined x-small disabled
                              >Belum Bayar Uang Muka</v-btn
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-medium">Catatan</td>
                          <td>:</td>
                          <td>{{ data.catatan }}</td>
                        </tr>
                      </table>
                      <v-row class="mx-5 mt-5">
                        <v-col>
                          <span class="text-subtitle-1 font-weight-bold"
                            >Rincian Pemesanan</span
                          >
                          <table style="width: 100%; border-collapse: collapse">
                            <tr
                              style="
                                border: 1px solid #dddddd;
                                text-align: left;
                                padding: 8px;
                              "
                            >
                              <th>#</th>
                              <th>Tipe Paket</th>
                              <th>Qty</th>
                              <th>Satuan</th>
                              <th>Total</th>
                            </tr>
                            <tr v-for="(x, i) in data.detail" :key="x.id">
                              <td>
                                {{ i + 1 }}
                              </td>
                              <td>
                                {{ x.tipe.nama }}
                              </td>
                              <td>
                                {{ x.total_jemaah }}
                              </td>
                              <td>
                                {{ x.tipe.harga | toCurrency }}
                              </td>
                              <td>
                                {{
                                  (x.tipe.harga * x.total_jemaah) | toCurrency
                                }}
                              </td>
                            </tr>
                          </table>
                        </v-col>
                      </v-row>
                      <v-row class="mx-5 mt-5">
                        <v-col>
                          <div>
                            <p class="text-right">
                              <span class="font-weight-medium"
                                >Total Harga:</span
                              >
                              {{this.totalHarga(data.detail)}}
                            </p>
                          </div>
                        </v-col>
                      </v-row>
                      <v-divider />

                      <v-row class="mx-5 mt-5">
                        <v-col>
                          <span class="text-subtitle-1 font-weight-bold"
                            >Rincian Tagihan</span
                          >
                          <table style="width: 100%; border-collapse: collapse">
                            <tr
                              style="
                                border: 1px solid #dddddd;
                                text-align: left;
                                padding: 8px;
                              "
                            >
                              <th>#</th>
                              <th>Jenis Pembayaran</th>
                              <th>Status</th>
                              <th>Nominal</th>
                              <th>Batas Pembayaran</th>
                            </tr>
                            <tr v-for="(x, i) in data.tagihan" :key="x.id">
                              <td>
                                {{ i + 1 }}
                              </td>
                              <td>
                                {{ x.deskripsi }}
                              </td>
                              <td v-if="x.status == 0">Belum Bayar</td>
                              <td v-else>Lunas</td>
                              <td>
                                {{ x.nominal | toCurrency }}
                              </td>
                              <td>
                                {{ x.limit_at }}
                              </td>
                            </tr>
                          </table>
                        </v-col>
                      </v-row>

                      <v-row class="mx-5 mt-5">
                        <v-col cols="4" md="4">
                          <p class="text-justify">
                            Mohon melakukan pelunasan pembayaran sebelum tanggal
                            <span class="font-weight-medium">{{
                              data.detail[0].paket.tgl_mulai
                            }}</span>
                          </p>
                          <p class="text-justify">
                            *Konfirmasi pembayaran dilakukan dengan menghubungi
                            kami (Nomor Telepon Travel).
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CekDetailPemesanan",
  data() {
    return {};
  },
  computed: {
    ...mapState("pemesanan", {
      data: (state) => state.detail,
    }),
  },
  created() {
    this.getDetailPemesanan(this.$route.params.code).then((response) => {
      if (response.meta.code == 400) {
        this.$swal({
          icon: "error",
          text: "Pemesanan tidak ditemukan!",
          timer: 1500,
        }).then(() => {
          this.$router.push({ path: "/cekPemesanan/" });
        });
      }
    });
  },
  methods: {
    ...mapActions("pemesanan", ["getDetailPemesanan"]),
    totalHarga(data) {
      var total = 0;
      var ttl = data.map((item) => {
        total = total + item.total * item.prices;
      });

      return total;
    },
  },
};
</script>