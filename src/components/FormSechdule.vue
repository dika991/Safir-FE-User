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
                <v-carousel
                  cycle
                  height="500"
                  :show-arrows="false"
                  delimiter-icon="mdi-minus"
                  hide-delimiter-background
                >
                  <v-carousel-item v-for="slide in data" :key="slide.id">
                    <v-container fill-height>
                      <v-layout align-center>
                        <v-flex>
                          <v-row class="white pt-10 pb-10 pl-10 pr-10">
                            <v-col cols="4" md="3">
                              <v-img
                                lazy-src="https://picsum.photos/id/11/10/6"
                                src="https://picsum.photos/id/11/500/300"
                              ></v-img>
                            </v-col>
                            <v-col cols="4" md="6" class="pl-10">
                              <v-row>
                                <div
                                  class="
                                    display-1
                                    black--text
                                    font-weight-black
                                  "
                                >
                                  {{ slide.title }}
                                </div>
                              </v-row>
                              <v-row>
                                <p class="black--text">{{ slide.date }}</p>
                              </v-row>
                              <v-row>
                                <p
                                  class="
                                    subtitle-1
                                    black--text
                                    font-weight-medium
                                    text-justify
                                  "
                                >
                                  {{ slide.desc }}
                                </p>
                              </v-row>
                            </v-col>
                            <v-col cols="4" md="3">
                              <v-row class="px-10">
                                <v-avatar class="mx-auto" size="120">
                                  <v-img
                                    lazy-src="https://picsum.photos/id/11/10/6"
                                    max-height="200px"
                                    max-width="200px"
                                    src="https://picsum.photos/id/11/500/300"
                                  ></v-img>
                                </v-avatar>
                              </v-row>
                              <v-row>
                                <p class="mx-auto">
                                  {{ slide.name }}
                                </p>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
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
      data: [
        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alshatravel.com%2Ftravel-umroh%2F&psig=AOvVaw0E7KdKMpUsIqeY1seEkJ0K&ust=1634613980237000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCID6peCB0_MCFQAAAAAdAAAAABAD",
          title: "Haji Furoda",
          date: "Keberangkatan, 21 Juli 2021",
          desc: "Pendaftaran Haji Furoda dengan menggunakan Sistem Safir ini sangat mudah dan terpercaya. Bagi saya yang pekerja dan susah untuk mencari waktu datang ke agen haji, sistem ini sangat membantu saya",
          name: "Bapak Fian",
          pict_profile: "",
        },

        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alshatravel.com%2Ftravel-umroh%2F&psig=AOvVaw0E7KdKMpUsIqeY1seEkJ0K&ust=1634613980237000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCID6peCB0_MCFQAAAAAdAAAAABAD",
          title: "Haji Spesial",
          date: "Keberangkatan, 21 Juli 2021",
          desc: "Pendaftaran Haji Furoda dengan menggunakan Sistem Safir ini sangat mudah dan terpercaya. Bagi saya yang pekerja dan susah untuk mencari waktu datang ke agen haji, sistem ini sangat membantu saya",
          name: "Bapak Fian",
          pict_profile: "",
        },

        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alshatravel.com%2Ftravel-umroh%2F&psig=AOvVaw0E7KdKMpUsIqeY1seEkJ0K&ust=1634613980237000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCID6peCB0_MCFQAAAAAdAAAAABAD",
          title: "Haji Turkey",
          date: "Keberangkatan, 21 Juli 2021",
          desc: "Pendaftaran Haji Furoda dengan menggunakan Sistem Safir ini sangat mudah dan terpercaya. Bagi saya yang pekerja dan susah untuk mencari waktu datang ke agen haji, sistem ini sangat membantu saya",
          name: "Bapak Fian",
          pict_profile: "",
        },
      ],
    };
  },
};
</script>