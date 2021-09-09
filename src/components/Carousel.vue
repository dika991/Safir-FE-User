<template>
  <div>
    <v-carousel
      cycle
      height="500"
      :show-arrows="false"
      delimiter-icon="mdi-minus"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="slide in data"
        :src="slide.download_url"
        :key="slide.id"
      >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3 white--text font-weight-black">
                {{ slide.author }}
              </h3>
              <v-row class="mb-4">
                <v-col cols="6" md="4">
                  <p
                    class="subtitle-1 white--text font-weight-medium text-justify"
                  >
                    {{ slide.text }}
                  </p>
                </v-col>
              </v-row>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "carousel",
  props: {
    data: Array,
  },
};
</script>