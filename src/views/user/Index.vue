<template>
  <v-app id="inspire">
      <sidebar/>
    <v-main>
        <v-container>
            <v-col cols="12" md="12">
                <v-row>
                    <router-view></router-view>
                </v-row>
            </v-col>
        </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Sidebar from "./component/Sidebar.vue";
export default {
  name: "IndexUser",
  components: {
    Sidebar,
  },
};
</script>