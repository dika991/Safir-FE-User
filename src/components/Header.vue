<template>
  <div>
    <v-app-bar app flat color="teal" dark>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="darken-1" size="50">
          <img src="../assets/logo.png" alt="Safir" />
        </v-avatar>
        <v-spacer></v-spacer>

        <v-btn v-for="(link, i) in links" :key="i" text :to="link.path">
          {{ link.name }}
        </v-btn>
        <v-btn color="teal" dark small to="/login" v-if="!this.isAuth"
          >Login</v-btn
        >
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="teal" dark v-bind="attrs" v-on="on">
              {{ user.name }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title @click="redirect(item.path)">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BaseHeader",
  data() {
    return {
      links: [
        { path: "/", name: "Dashboard" },
        { path: "/listPaket", name: "Paket" },
        { path: "/cekPemesanan", name: "Cek Pemesanan" },
      ],
      items: [
        { path: "/pemesanan", title: "Pemesanan" },
        { path: "/pengaturan", title: "Pengaturan" },
        { path: "/logout", title: "Logout" },
      ],
    };
  },
  computed: {
    ...mapGetters(["isAuth", "user"]),
  },
  methods:{
    redirect(path){
      this.$router.push({path: path});
    }
  }
};
</script>