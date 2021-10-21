<template>
  <v-main>
    <v-container class="text-center">
      <v-row class="mt-10 mb-10">
        <v-col cols="8" md="8">
          <v-stepper v-model="e1" color="teal">
            <v-stepper-header >
              <v-stepper-step :complete="e1 > 1" step="1" color="teal">
                Pilih Paket
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2" color="teal">
                Data Pemesan
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3" color="teal"> Konfirmasi Pemesanan </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-12">
                  <v-expansion-panels multiple v-model="panel">
                    <v-expansion-panel v-for="(item, i) in data" :key="i">
                      <v-expansion-panel-header>
                        <span class="text-subtitle-1 font-weight-medium">{{
                          item.name
                        }}</span>
                        <span class="text-subtitle-1">
                          Sisa Kuota : {{ item.quota }}</span
                        >
                      </v-expansion-panel-header>
                      <v-divider></v-divider>
                      <v-expansion-panel-content>
                        <v-row class="mt-1">
                          <v-col cols="6" class="text-left">Harga Paket</v-col>
                          <v-col cols="6" class="text-right"
                            >{{ item.prices | toCurrency }} / pax</v-col
                          >
                        </v-row>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              dense
                              type="number"
                              hint="Jumlah Jemaah yang ingin didaftarkan"
                              block
                              label="Jumlah"
                              outlined
                              v-model="item.total"
                            >
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>

                <v-btn color="teal" dark @click="e1 = 2"> Continue </v-btn>

                <v-btn text @click="e1 = 1"> Cancel </v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card class="mb-12">
                  <v-col>
                    <v-row class="mt-3">
                      <v-text-field
                        dense
                        label="Nama"
                        outlined
                        v-model="form.nama"
                      >
                      </v-text-field
                    ></v-row>
                    <v-row>
                      <v-text-field
                        dense
                        label="Nomor HP"
                        outlined
                        v-model="form.no_hp"
                      >
                      </v-text-field
                    ></v-row>
                    <v-row>
                      <v-text-field
                        dense
                        label="Email"
                        outlined
                        v-model="form.email"
                      >
                      </v-text-field
                    ></v-row>
                  </v-col>
                </v-card>

                <v-btn color="teal" dark @click="e1 = 3"> Continue </v-btn>

                <v-btn text @click="e1 = 1"> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-12">
                  <v-card-title>Nama Pemesan : {{ form.nama }}</v-card-title>
                  <v-card-text>
                    <v-row class="mx-1">
                      <v-col cols="12">
                        <v-row>
                          <v-col>
                            <v-row>
                              <span class="font-weight-medium"
                                >Nomor HP :
                              </span>
                              {{ form.no_hp }}
                            </v-row>
                            <v-row>
                              <span class="font-weight-medium">Email : </span>
                              {{ form.email }}
                            </v-row>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col>
                            <v-row>
                              <v-col class="font-weight-bold">Tipe Paket</v-col>
                              <v-col class="font-weight-bold">Nominal</v-col>
                            </v-row>
                            <v-row v-for="item in data" :key="item.id">
                              <v-col>{{ item.total }} ({{ item.name }})</v-col>
                              <v-col>{{ item.prices | toCurrency }}</v-col>
                            </v-row>
                            <v-divider class="mt-5"></v-divider>
                            <v-row class="mt-3">
                              <v-col>
                                <span class="font-weight-medium"
                                  >TOTAL HARGA
                                </span>
                              </v-col>
                              <v-col v-if="data">
                                {{ totalHarga(data) | toCurrency }}
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <v-btn color="teal" dark @click="postPesan()"> Submit Pesanan </v-btn>

                <v-btn text @click="e1 = 2"> Cancel </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
        <v-col cols="4" md="4">
          <v-card class="px-5 py-5">
            <v-col cols="12">
              <v-row>
                <span class="text-h4">{{ detail.name }}</span>
              </v-row>
              <v-row>
                <span class="font-weight-medium"
                  >Keberangkatan : {{ detail.end_date }}</span
                >
              </v-row>
              <v-row>
                <v-col>
                  <v-row>
                    <span class="text-caption teal--text font-weight-bold"
                      >Sisa Kuota</span
                    >
                  </v-row>
                  <v-row> 48 pax </v-row>
                </v-col>
                <v-col>
                  <v-divider vertical></v-divider>
                </v-col>
                <v-col>
                  <v-row>
                    <span class="text-caption teal--text font-weight-bold"
                      >Batas Pendaftaran</span
                    >
                  </v-row>
                  <v-row> 10 Hari Lagi </v-row>
                </v-col>
              </v-row>
              <v-row class="text-justify mt-5">
                Paket {{ detail.name }} keberangkatan {{ detail.end }} Selama
                {{ detail.total_days }} hari. Mulai dari Rp. 28.000.000
              </v-row>
            </v-col>
          </v-card>
          <v-card color="blue" class="mt-15">
            <v-card-title class="white--text">
              <v-icon dark left> mdi-alert-circle </v-icon>Bantuan</v-card-title
            >
            <v-card-text>
              <p class="white--text font-weight-medium text-subtitle-1">
                Silahkan masukkan jumlah orang sesuai dengan tipe paket yang
                dipilih : contoh 2 Orang Dewasa di tipe superior, makan pada
                bagian SUPERIOR inputkan 2 dewasa.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "TipePaket",
  data() {
    return {
      panel: [0],
      data: null,
      form: {
        nama: "",
        nik: "",
        no_hp: "",
        email: "",
      },
      e1: 1,
    };
  },
  computed: {
    ...mapState("paket", {
      detail: (state) => state.detailList,
    }),
  },
  created() {
    this.detailPackage(this.$route.params.code).then(() => {
      this.mappingTypes();
    });
  },
  methods: {
    ...mapActions("paket", ["detailPackage"]),
    ...mapActions("pemesanan", ["postPemesanan"]),
    mappingTypes() {
      this.data = this.detail.types.map((item) => {
        const tipe = {};
        tipe["id"] = item.id;
        tipe["name"] = item.nama;
        tipe["prices"] = item.harga;
        tipe["quota"] = item.kuota;
        tipe["total"] = 0;

        return tipe;
      });
    },
    postPesan() {
      this.form["types"] = this.data;
      this.postPemesanan(this.form).then((response) => {
        this.$swal({
          icon: "success",
          text: "Pesanan Berhasil dibuat!",
          toast: true,
          showConfirmButton: false,
          position: "top-end",
          timer: 1500,
        }).then(() => {
          this.$router.push({ path: "/pemesanan/" + response });
        });
      });
    },
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