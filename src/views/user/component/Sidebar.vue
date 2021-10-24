<template>
  <div>
    <v-navigation-drawer v-model="drawer" app dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Safir </v-list-item-title>
          <v-list-item-subtitle> Dashboard for User </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link @click="redirect(item.path)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
      <v-list dense nav>
        <v-list-item  link>
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", path: "/user" },
        { title: "Pemesanan", icon: "mdi-book", path: "/user/pemesanan" },
      ],
      right: null,
    };
  },
  methods:{
      redirect(path){
          this.$router.push({path : path});
      }
  }
};
</script>
