<template>
  <div>
    <v-row class="white">
      <v-col cols="12">
        <v-container>
          <v-row class="mt-2 mb-2">
            <v-col cols="4" v-for="brand in data" :key="brand.id">
              <v-card class="mx-auto my-12" max-width="374">
                <v-img
                  height="250"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.viennaexplorer.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fvienna-bike-1-1024x665.jpg&f=1&nofb=1"
                ></v-img>

                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0"> Rp. 35.000.000,00 </v-row>

                  <div class="my-4">
                    Nikmati paket umrah termurah dengan banyak keuntungan.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="deep-purple lighten-2" text> Detail </v-btn>
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
export default {
  name: "FiturComponent",
  props: {
    data: Array,
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {},
};
</script>