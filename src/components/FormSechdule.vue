<template>
  <div>
    <v-parallax
      dark
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wonderwall.sg%2Fcontent%2Fdam%2Fwonderwall%2Fimages%2F2020%2Fjuly%2Fhari-raya-haji--what-is-it-and-what%27s-modified-this-year-%2Flead_mecca.jpg&f=1&nofb=1"
    >
      <v-overlay :value="true" :absolute="true" z-index="0"></v-overlay>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-container>
            <v-row color="white">
              <v-col>
                <v-card>
                  <v-tabs
                    v-model="tab"
                    background-color="gray darken-5"
                    dark
                    icons-and-text
                  >
                    <v-tab href="#tab-1">
                      Paket Umrah
                      <v-icon>fas fa-plane</v-icon>
                    </v-tab>

                    <v-tab href="#tab-2">
                      Paket Umrah
                      <v-icon>mdi-plane</v-icon>
                    </v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item :value="'tab-1'">
                      <v-card flat>
                        <v-card-text>
                          <v-form v-model="umroh.valid">
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    v-model="umroh.firstname"
                                    :rules="umroh.nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    v-model="umroh.lastname"
                                    :rules="umroh.nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    v-model="umroh.email"
                                    :rules="umroh.emailRules"
                                    label="E-mail"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-form>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-2'">
                      <v-card flat>
                        <v-card-text>
                          <v-form v-model="travel.valid">
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    v-model="travel.firstname"
                                    :rules="travel.nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    v-model="travel.lastname"
                                    :rules="travel.nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-form>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>
<script>
export default {
  name: "FormSchedule",
  data() {
    return {
      tab: null,
      umroh: {
        valid: false,
        firstname: "",
        lastname: "",
        nameRules: [
          (v) => !!v || "Name required",
          (v) => v.length <= 10 || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
          (v) => !!v || "E-mail required",
          (v) => /.+@./.test(v) || "E-mail must be valid",
        ],
      },
      travel: {
        valid: false,
        firstname: "",
        lastname: "",
        nameRules: [
          (v) => !!v || "Name required",
          (v) => v.length <= 10 || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
          (v) => !!v || "E-mail required",
          (v) => /.+@./.test(v) || "E-mail must be valid",
        ],
      },
    };
  },
};
</script>