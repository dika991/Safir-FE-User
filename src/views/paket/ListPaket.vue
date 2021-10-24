<template>
  <v-main>
    <v-col cols="12">
      <v-container>
        <v-row class="mt-2 mb-2">
          <v-col cols="3" md="3">
            <v-card>
              <v-card-title class="text-subtitle-2"
                >Urut Berdasarkan</v-card-title
              >
              <v-card-subtitle
                >Urutkan hasil pencarian anda berdasarkan :
              </v-card-subtitle>
              <v-divider />
              <v-card-text>
                <v-radio-group>
                  <v-radio
                    color="teal"
                    v-for="(n, i) in order"
                    :key="i"
                    :label="n.title"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>
            <v-card class="mt-3">
              <v-card-title class="text-subtitle-2">Filter</v-card-title>
              <v-card-subtitle
                >Menampilkan hasil berdasarkan kategori
              </v-card-subtitle>
              <v-divider />
              <v-card-text>
                <v-radio-group hide-details="true">
                  <v-radio
                    color="teal"
                    v-for="(n, i) in category"
                    :key="i"
                    :label="n.title"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
                <v-divider />
                <v-row>
                  <v-col>
                    <v-row class="mt-5">
                      <span class="text-subtitle-2">Range Harga</span>
                    </v-row>
                    <v-row class="mt-5">
                      <v-col>
                        <v-text-field dense label="min" outlined></v-text-field>
                      </v-col>
                      <v-col class="mx-auto my-auto">Hingga</v-col>
                      <v-col
                        ><v-text-field dense label="max" outlined></v-text-field
                      ></v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="9" md="9">
            <v-row  v-if="loading==true">
              <v-col cols="4" v-for="i in 3" :key="i">
                <v-sheet :color="`grey lighten-4`" class="pa-3">
                  <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
                  ></v-skeleton-loader>
                </v-sheet>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col cols="4" v-for="row in list" :key="row.id">
                <v-card class="mx-auto">
                  <v-img
                    height="250"
                    :src="row.photo[0].url"
                    v-if="row.photo[0]"
                  ></v-img>
                  <v-img height="250" v-else></v-img>
                  <v-card-title class="text-subtitle-2 font-weight-bold">{{
                    row.nama
                  }}</v-card-title>

                  <v-card-text>
                    <v-row align="center" class="mx-0" v-if="row.tipe[0]">{{
                      row.tipe[0].harga | toCurrency
                    }}</v-row>

                    <div class="my-4 text-justify">
                      Nikmati paket umrah termurah dengan banyak keuntungan.
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="teal lighten-2" text @click="move(row.kode)">
                      Detail
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ListPaket",
  data() {
    return {
      loading: false,
      order: [
        { q: "price", r: "ASC", title: "Harga tertinggi" },
        { q: "price", r: "DESC", title: "Harga terendah" },
        { q: "quota", r: "ASC", title: "Popularitas tertinggi" },
        { q: "rec", r: "ASC", title: "Rekomendasi" },
      ],
      category: [
        { q: "haji", title: "Haji" },
        { q: "umrah", title: "Umrah" },
      ],
      min: -50,
      max: 90,
      range: [-20, 70],
    };
  },
  computed: {
    ...mapState("paket", {
      list: (state) => state.totalList,
    }),
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions("paket", ["getListPackage"]),
    move(code) {
      this.$router.push({ path: "/paket/" + code });
    },
    init() {
      this.loading = true;
      this.getListPackage().then(() => {
        this.loading = false;
      });
    },
  },
};
</script>
