<template>
  <v-app id="inspire">
    <base-header />
    <v-main class="green lighten-5">
      <carousel :data="photos" />
      <fitur :data="brands" />
      <form-sechdule />
      <paket-terbaru :data="brands"/>
    </v-main>
  </v-app>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import BaseHeader from "./components/Header.vue";
import Fitur from "./components/Fitur.vue";
import PaketTerbaru from "./components/PaketTerbaru.vue";
import FormSechdule from './components/FormSechdule.vue';
export default {
  components: {
    Carousel,
    BaseHeader,
    Fitur,
    PaketTerbaru,
    FormSechdule
  },
  data: () => ({
    photos: [
      {
        id: "1001",
        author: "Danielle MacInnes",
        text:
          "Teks deskripsi sangat perlu dipelajari oleh penulis novel, sehingga dalam novelnya mereka bisa menggambarkan sebuah tempat atau objek dengan jelas sehingga pembaca seolah pembaca dapat merasakan dan tau betul keadaan yang sedang mereka baca.",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/1DkWWN1dr-s",
        download_url: "https://picsum.photos/id/1001/5616/3744",
      },
      {
        id: "1002",
        author: "NASA",
        text:
          "Teks deskripsi sangat perlu dipelajari oleh penulis novel, sehingga dalam novelnya mereka bisa menggambarkan sebuah tempat atau objek dengan jelas sehingga pembaca seolah pembaca dapat merasakan dan tau betul keadaan yang sedang mereka baca.",
        width: 4312,
        height: 2868,
        url: "https://unsplash.com/photos/6-jTZysYY_U",
        download_url: "https://picsum.photos/id/1002/4312/2868",
      },
      {
        id: "1003",
        author: "E+N Photographies",
        text:
          "Teks deskripsi sangat perlu dipelajari oleh penulis novel, sehingga dalam novelnya mereka bisa menggambarkan sebuah tempat atau objek dengan jelas sehingga pembaca seolah pembaca dapat merasakan dan tau betul keadaan yang sedang mereka baca.",
        width: 1181,
        height: 1772,
        url: "https://unsplash.com/photos/GYumuBnTqKc",
        download_url: "https://picsum.photos/id/1003/1181/1772",
      },
      {
        id: "1004",
        author: "Greg Rakozy",
        text:
          "Teks deskripsi sangat perlu dipelajari oleh penulis novel, sehingga dalam novelnya mereka bisa menggambarkan sebuah tempat atau objek dengan jelas sehingga pembaca seolah pembaca dapat merasakan dan tau betul keadaan yang sedang mereka baca.",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/SSxIGsySh8o",
        download_url: "https://picsum.photos/id/1004/5616/3744",
      },
      {
        id: "1005",
        author: "Matthew Wiebe",
        text:
          "Teks deskripsi sangat perlu dipelajari oleh penulis novel, sehingga dalam novelnya mereka bisa menggambarkan sebuah tempat atau objek dengan jelas sehingga pembaca seolah pembaca dapat merasakan dan tau betul keadaan yang sedang mereka baca.",
        width: 5760,
        height: 3840,
        url: "https://unsplash.com/photos/tBtuxtLvAZs",
        download_url: "https://picsum.photos/id/1005/5760/3840",
      },
    ],
    brands: [
      {
        id: 1,
        color: "green darken-2",
        icon: "mdi-domain",
        heading: "Fitur Terlengkap",
        description:
          "Nikmati fitur terlengkap terbaik 2021 untuk sistem manajemen travel haji dan umrah.",
      },
      {
        id: 2,
        color: "red darken-2",
        icon: "mdi-message-text",
        heading: "Fitur Cepat",
        description:
          "Nikmati fitur tercepat terbaik 2021 untuk sistem manajemen travel haji dan umrah.",
      },
      {
        id: 3,
        color: "blue darken-2",
        icon: "mdi-dialpad",
        heading: "Fitur Tangkas",
        description:
          "Nikmati fitur tertangkas terbaik 2021 untuk sistem manajemen travel haji dan umrah.",
      },
      {
        id: 4,
        color: "green darken-2",
        icon: "mdi-domain",
        heading: "Fitur Terlengkap",
        description:
          "Nikmati fitur terlengkap terbaik 2021 untuk sistem manajemen travel haji dan umrah.",
      },
      {
        id: 5,
        color: "red darken-2",
        icon: "mdi-message-text",
        heading: "Fitur Cepat",
        description:
          "Nikmati fitur tercepat terbaik 2021 untuk sistem manajemen travel haji dan umrah.",
      },
      {
        id: 6,
        color: "blue darken-2",
        icon: "mdi-dialpad",
        heading: "Fitur Tangkas",
        description:
          "Nikmati fitur tertangkas terbaik 2021 untuk sistem manajemen travel haji dan umrah.",
      },
    ],
    tab: null,
    items: [{ tab: "Paket Umroh" }, { tab: "Travel Islami" }],
  }),
};
</script>