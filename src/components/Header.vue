<template>
  <div>
    <v-app-bar app flat color="white">
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
        <v-spacer></v-spacer>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>
        <v-btn color="teal" dark small>Login</v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "BaseHeader",
  data() {
    return {
      links: ["Dashboard", "Messages", "Profile", "Updates"],
    };
  },
};
</script>