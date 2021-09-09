<template>
  <div>
    <v-row class="white">
      <v-col cols="12">
        <v-container>
          <v-row class="mt-4 mb-4">
            <v-col cols="4" v-for="brand in data" :key="brand.id">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-icon large :color="brand.color" align-center>
                      {{ brand.icon }}
                    </v-icon>
                    <v-list-item-title class="text-h5 mb-1 text-center">
                      {{ brand.heading }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-center justify">{{
                      brand.description
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
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
        data: Array
    }
}
</script>