<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col cols="3" md="3">
          <v-card color="blue darken-3" dark>
            <v-card-title> Total Pemesanan </v-card-title>
            <v-card-text class="font-weight-medium">5 Pesanan</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" md="3">
          <v-card color="red darken-3" dark>
            <v-card-title> Belum Terbayarkan </v-card-title>
            <v-card-text>Rp 250.500.000</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" md="3">
          <v-card color="teal" dark>
            <v-card-title> Sudah Terbayarkan </v-card-title>
            <v-card-text>Rp 16.700.000</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" md="3">
          <v-card color="grey darken-3" dark>
            <v-card-title> Total Tagihan </v-card-title>
            <v-card-text>Rp 267.200.000</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>

      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "DashboardUser",
};
</script>