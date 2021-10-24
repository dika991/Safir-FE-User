<template>
  <v-col cols="12" md="12">
    <v-container>
        <span class="text-h5">Daftar Pemesanan</span>
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.status="{ item }">
          <v-chip :color="getColor(item.status)" dark>
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.detail="{ item }">
          {{ countJemaah(item.detail) }}
        </template>
        <template v-slot:item.transaksi="{ item }">
          {{ item.transaksi.belum_dibayar | toCurrency }}
        </template>
        <template v-slot:item.aksi="{ item }">
            <v-btn x-small icon @click="redirect(item.code)">
              <v-icon>mdi-magnify-plus</v-icon>
            </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-col>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "UserPemesanan",
  data() {
    return {
      headers: [
        {
          text: "Kode Pemesanan",
          align: "start",
          sortable: false,
          value: "code",
        },
        { text: "Nama Pemesan", value: "nama" },
        { text: "Status", value: "status" },
        { text: "Total Jemaah", value: "detail" },
        { text: "Total Belum dibayar", value: "transaksi" },
        { text: "Aksi", value: "aksi" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  computed: {
    ...mapState("pemesanan", {
      data: (state) => state.listPemesanan,
    }),
  },
  methods: {
    ...mapActions("pemesanan", ["getListPemesanan"]),
    countJemaah(data) {
      var total = 0;
      var ttl = data.map((item) => {
        total = total + item.total_jemaah;
      });

      return total;
    },
    getColor(status) {
      if (status == 0) return "red";
      else if (status == 1) return "blue";
    },
    redirect(id){
        this.$router.push({path : `/user/pemesanan/${id}`})
    }
  },
  created() {
    this.getListPemesanan();
  },
};
</script>