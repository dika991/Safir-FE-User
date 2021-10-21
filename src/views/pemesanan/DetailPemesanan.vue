<template>
  <v-main>
    <v-container class="text-center">
      <v-row class="mt-5 mb-10">
        <v-col cols="9" md="9">
          <v-card>
            <v-card-title
              >Nama Pemesan : {{ data.nama }}
              <v-spacer></v-spacer>

              <v-card color="teal" height="60">
                <v-card-text class="px-1 py-1">
                  <span class="mx-auto text-content white--text">
                    <v-icon dark left> mdi-alert-circle </v-icon>Kode
                    Pemesanan</span
                  >
                  <p class="white--text font-weight-medium text-content">
                    {{ this.$route.params.code }}
                  </p>
                </v-card-text>
              </v-card>
            </v-card-title>
            <v-card-text>
              <v-row class="mx-1">
                <v-col cols="12">
                  <v-row>
                    <v-col>
                      <v-row>
                        <span class="font-weight-medium">Nomor HP : </span>
                        {{ data.no_hp }}
                      </v-row>
                      <v-row>
                        <span class="font-weight-medium">Email : </span>
                        {{ data.email }}
                      </v-row>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-row>
                        <v-col class="font-weight-bold">Tipe Paket</v-col>
                        <v-col class="font-weight-bold">Nominal</v-col>
                      </v-row>
                      <v-row v-for="item in data.detail" :key="item.id">
                        <v-col
                          >{{ item.total_jemaah }} ({{ item.tipe.nama }})</v-col
                        >
                        <v-col>{{ item.tipe.harga | toCurrency }}</v-col>
                      </v-row>
                      <v-divider class="mt-5"></v-divider>
                      <v-row class="mt-3">
                        <v-col>
                          <span class="font-weight-medium">TOTAL HARGA </span>
                        </v-col>
                        <v-col>
                          {{ data.transaksi.total_harga | toCurrency }}
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="mt-10">
            <v-card-text>
              <v-row>
                <v-col>
                  <v-row class="mb-5">
                    <v-card color="teal" class="mt-5 mx-auto" width="500">
                      <v-card-title class="white--text">
                        <span class="mx-auto font-weight-bold">
                          Uang Muka</span
                        ></v-card-title
                      >
                      <v-card-text>
                        <p class="white--text font-weight-medium text-h5">
                          {{ data.tagihan[0].nominal | toCurrency }}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-row>
                  <v-row class="mt-5">
                    <span class="text-subtitle-2 font-weight-bold mx-auto">
                      Untuk dapat melanjutkan proses selanjutnya, silahkan
                      lakukan pembayaran uang DP terlebih dauhulu!
                    </span>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="mt-12">
            <v-card-title
              class="text-subtitle-2 font-weight-medium teal white--text"
              >Pembatalan dan Pengembalian</v-card-title
            >
            <v-divider />
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider v-else-if="item.divider" :key="index"></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-content>
                    <span class="text-justify text-caption">{{
                      item.subtitle
                    }}</span>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="3" md="3">
          <v-card class="px-5 py-5">
            <v-col cols="12">
              <v-row>
                <span class="text-h6" v-if="data.detail[0]">{{
                  data.detail[0].paket.nama
                }}</span>
              </v-row>
              <v-row class="mt-5">
                <span class="font-weight-medium" v-if="data.detail"
                  >Keberangkatan : {{ data.detail[0].paket.tgl_berakhir }}</span
                >
              </v-row>
              <v-row class="mt-5">
                <v-col>
                  <v-row>
                    <span class="teal--text font-weight-medium"
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
                    <span class="text-subtitle-2 teal--text font-weight-medium"
                      >Batas Pendaftaran</span
                    >
                  </v-row>
                  <v-row> 10 Hari Lagi </v-row>
                </v-col>
              </v-row>
              <v-row
                class="text-justify mt-10 text-subtitle-2"
                v-if="data.detail"
              >
                Paket {{ data.detail[0].paket.nama }} keberangkatan
                {{ data.detail[0].paket.tgl_berakhir }} Selama
                {{ data.detail[0].paket.jml_hari }} hari. Mulai dari Rp.
                28.000.000
              </v-row>
            </v-col>
          </v-card>

          <v-card class="mt-5">
            <v-card-title class="text-subtitle-2">Transfer Bank</v-card-title>
            <v-divider />
            <v-card-text>
              <v-row class="mx-auto">
                <v-col>
                  <v-row>
                    <v-col>
                      <v-row>
                        <span class="font-weight-bold"
                          >BANK SYARIAH INDONESIA</span
                        ></v-row
                      >
                      <v-row
                        ><span class="font-weight-bold">Atas Nama : </span> PT
                        APLIKASI HAJI DAN UMRAH</v-row
                      >
                      <v-row>
                        <span class="font-weight-bold">No. Rekening : </span>
                        1234567890
                      </v-row>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-divider></v-divider>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-row>
                        <span class="font-weight-bold"
                          >BANK MANDIRI</span
                        ></v-row
                      >
                      <v-row
                        ><span class="font-weight-bold">Atas Nama : </span> PT
                        APLIKASI HAJI DAN UMRAH</v-row
                      >
                      <v-row>
                        <span class="font-weight-bold">No. Rekening : </span>
                        1234567890
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
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
  name: "DetailPemesanan",
  data() {
    return {
      items: [
        {
          title: "Brunch this weekend?",
          subtitle: `Jika pembatalan keberangkatan dilakukan 31 - 100 hari sebelum jadwal keberangkatan, maka pihak Ihram Asia akan mengembalikan dana jemaah setelah dipotong sebesar 5%.`,
        },
        { divider: true, inset: true },
        {
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `Jika pembatalan keberangkatan dilakukan 15 - 30 hari sebelum jadwal keberangkatan, maka pihak Ihram Asia akan mengembalikan dana jemaah setelah dipotong sebesar 15%.`,
        },
        { divider: true, inset: true },
        {
          title: "Oui oui",
          subtitle:
            "Jika pembatalan keberangkatan dilakukan 8 - 14 hari sebelum jadwal keberangkatan, maka pihak Ihram Asia akan mengembalikan dana jemaah setelah dipotong sebesar 30%.",
        },
        { divider: true, inset: true },
        {
          title: "Birthday gift",
          subtitle:
            "Jika pembatalan keberangkatan dilakukan 4 - 7 hari sebelum jadwal keberangkatan, maka pihak Ihram Asia akan mengembalikan dana jemaah setelah dipotong sebesar 75%.",
        },
      ],
    };
  },
  computed: {
    ...mapState("pemesanan", {
      data: (state) => state.detail,
    }),
  },
  created() {
    this.getDetailPemesanan(this.$route.params.code);
  },
  methods: {
    ...mapActions("pemesanan", ["getDetailPemesanan"]),
  },
};
</script>