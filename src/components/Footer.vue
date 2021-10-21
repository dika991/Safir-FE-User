<template>
  <v-footer light padless>
    <v-col cols="12" class="text-center">
      <v-card-text class="my-4">
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="4" md="4">
                <v-row>
                  <v-img
                    class="mx-auto"
                    lazy-src="../assets/logo.png"
                    max-height="100px"
                    max-width="100px"
                    src="../assets/logo.png"
                  ></v-img>
                </v-row>
                <v-row>
                  <div
                    class="
                      text-h4
                      black--text
                      font-weight-medium
                      text-justify
                      mx-auto
                    "
                  >
                    SAFIR
                  </div>
                </v-row>
              </v-col>
              <v-col cols="4" md="4">
                <v-row>
                  <div
                    class="text-h5 black--text font-weight-medium text-justify"
                  >
                    Hubungi Kami
                  </div>
                </v-row>
                <v-row>
                  <div
                    class="
                      text-subtitle-1
                      black--text
                      font-weight-medium
                      text-justify
                    "
                  >
                    Jl. Mujair VII No. 13 Condongcatur, Sleman, Yogyakarta
                  </div>
                </v-row>
                <v-row>
                  <div
                    class="
                      text-subtitle-1
                      black--text
                      font-weight-medium
                      text-justify
                    "
                  >
                    No HP :
                  </div>
                  <div class="text-subtitle-1 black--text text-justify">
                    +62 8135 6851 001
                  </div>
                </v-row>
                <v-row>
                  <div
                    class="
                      text-subtitle-1
                      black--text
                      font-weight-medium
                      text-justify
                    "
                  >
                    Email :
                  </div>
                  <div class="text-subtitle-1 black--text text-justify">
                    madaharsa.safir@gmail.com
                  </div>
                </v-row>
              </v-col>
              <!-- <v-col cols="4" md="4">
                <v-row>
                  <v-col cols="12" class="px-10">
                    <v-row>
                      <v-text-field
                        label="Nama"
                        outlined
                        required
                      ></v-text-field>
                    </v-row>
                    <v-row>
                      <v-text-field
                        label="Email"
                        outlined
                        required
                      ></v-text-field>
                    </v-row>
                    <v-row>
                      <v-textarea label="Pesan" outlined required auto-grow height="80"></v-textarea>
                    </v-row>

                    <v-row>
                      <v-btn elevation="2" class="teal white--text">Submit</v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col> -->
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "BaseFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
