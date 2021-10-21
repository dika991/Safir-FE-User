<template>
  <div>
    <v-row class="white">
      <v-col cols="12">
        <v-container>
          <v-row class="mt-2 mb-2">
            <v-col cols="4" v-for="row in this.recent" :key="row.id">
              <v-card class="mx-auto my-12" max-width="374">
                <v-img
                  height="250"
                  :src="row.photo[0].url"
                ></v-img>
                <v-card-title>{{row.nama}}</v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">{{row.tipe[0].harga | toCurrency}}</v-row>

                  <div class="my-4">
                    Nikmati paket umrah termurah dengan banyak keuntungan.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="deep-purple lighten-2" text @click="move(row.kode)"> Detail </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "PaketTerbaru",
  props: {
    data: Array,
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  computed: {
    ...mapState("paket", {
      recent: (state) => state.recentlyList,
    }),
    ...mapState(["errors"]),
  },
  created() {
    this.getRecentPackage();
  },
  methods: {
    ...mapActions("paket", ["getRecentPackage"]),
    move(code){
      this.$router.push({path: "/paket/" + code});
    }
  },
};
</script>