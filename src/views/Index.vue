<template>
  <v-app id="inspire">
    <base-header />
    <router-view></router-view>
    <base-footer />
  </v-app>
</template>

<script>
import BaseHeader from "../components/Header.vue";
import BaseFooter from "../components/Footer.vue";
export default {
  components:{
      BaseHeader,
      BaseFooter
  }
};
</script>