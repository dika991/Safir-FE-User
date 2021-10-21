<template>
  <v-main>
    <v-container>
      <v-row class="mt-15">
        <v-col cols="3">
          <v-carousel hide-delimiters height="200">
            <v-carousel-item
              v-for="(item, i) in detail.photos"
              :key="i"
              :src="item.url"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="6" class="px-5">
          <v-row>
            <div class="text-h5">{{ detail.name }}</div>
          </v-row>
          <v-row class="mt-10">
            <div class="text-subtitle-3 font-weight-medium">
              Keberangkatan :
            </div>
            <div class="text-subtitle-3">{{ detail.end_date }}</div>
          </v-row>
          <v-row>
            <div class="text-subtitle-3 text-justify">
              {{ detail.desc }}
            </div>
          </v-row>
          <v-row class="mt-10">
            <div class="text-h5">Fasilitas</div>
          </v-row>
          <v-row>
            <div class="text-subtitle-3 text-justify">
              <ul>
                <li>Hotel dekat dengan Masjidil Haram</li>
                <li>Pesawat menggunakan Flynas Airlines</li>
                <li>1 minggu di Arab Saudi</li>
                <li>4 hari di Makkah, 3 hari di Madinah</li>
                <li>Transportasi dari rumah ke bandara sudah disediakan</li>
                <li>Kartu identitas disediakan</li>
              </ul>
            </div>
          </v-row>
        </v-col>
        <v-col cols="3"> </v-col>
      </v-row>
      <v-row class="mb-15">
        <v-spacer></v-spacer>
        <v-btn
          class="float-right teal white--text"
          @click="listPacketType(detail.code)"
          >Pesan</v-btn
        >
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import ProductCarousel from "vue-product-carousel";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    ProductCarousel,
  },
  name: "DetailPaket",
  data() {
    return {};
  },
  computed: {
    ...mapState("paket", {
      detail: (state) => state.detailList,
    }),
  },
  created() {
    this.detailPackage(this.$route.params.code);
  },
  methods: {
    ...mapActions("paket", ["detailPackage"]),
    listPacketType(code) {
      this.$router.push({path : "/paket/" + code + "/types"});
    },
  },
};
</script>