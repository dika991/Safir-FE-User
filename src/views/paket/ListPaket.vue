<template>
  <v-main>
    <v-col cols="12">
      <v-container>
        <v-row class="mt-2 mb-2">
          <v-col cols="3" md="3">
            <v-card height="300"></v-card>
          </v-col>
          <v-col cols="9" md="9">
            <v-row>
              <v-col cols="4" v-for="row in list" :key="row.id">
                <v-card class="mx-auto">
                  <v-img height="250" :src="row.photo[0].url"></v-img>
                  <v-card-title class="text-subtitle-2 font-weight-bold">{{
                    row.nama
                  }}</v-card-title>

                  <v-card-text>
                    <v-row align="center" class="mx-0">{{
                      row.tipe[0].harga | toCurrency
                    }}</v-row>

                    <div class="my-4 text-justify">
                      Nikmati paket umrah termurah dengan banyak keuntungan.
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      @click="move(row.kode)"
                    >
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
    return {};
  },
  computed: {
    ...mapState("paket", {
      list: (state) => state.totalList,
    }),
  },
  created() {
    this.getListPackage();
  },
  methods: {
    ...mapActions("paket", ["getListPackage"]),
    move(code) {
      this.$router.push({ path: "/paket/" + code });
    },
  },
};
</script>
