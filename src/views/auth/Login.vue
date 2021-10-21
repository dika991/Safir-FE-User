<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-col cols="12" sm="8" class="mx-auto">
          <v-card
            class="d-flex justify-center mb-6"
            color="white darken-3"
            flat
            tile
          >
            <v-col cols="12">
              <p class="text-center text-h5">Login</p>
              <v-row class="mb-10">
                <v-col cols="12" sm="6" class="mx-auto">
                  <v-row class="mt-10 mx-auto">
                    <v-text-field
                      outlined
                      placeholder="login@mail.com"
                      label="Email"
                      v-model="data.email"
                    ></v-text-field>
                  </v-row>
                  <v-row class="mt-10 mx-auto">
                    <v-text-field
                      outlined
                      placeholder="*******"
                      label="Password"
                      v-model="data.password"
                    ></v-text-field>
                  </v-row>
                    <a class="">Lupa Password?</a>
                  <v-row class="mt-10 mx-auto">
                    <v-btn block color="teal white--text" @click.prevent="postLogin">Login</v-btn>
                    <a class="mt-10 mx-auto teal--text font-weight-medium">Registrasi</a>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
export default {
  name: "Login",
  data(){
      return{
          data: {
              email: '',
              password : '',
          }
      }
  },
  created(){
      if(this.isAuth){
          this.$router.push({name : 'Home'});
      }
  },
  computed: {
      ...mapGetters(['isAuth']),
      ...mapState(['errors'])
  },
  methods: {
      ...mapActions('auth', ['submit']),
      ...mapMutations(['CLEAR_ERRORS']),
      postLogin(){
          this.submit(this.data).then(() => {
              if(this.isAuth){
                  this.CLEAR_ERRORS();
                  this.$router.push({name : "Home"});
              }
          })
      }
  }
};
</script>