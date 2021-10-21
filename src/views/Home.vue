<template>
  <v-main class="green lighten-5">
    <carousel :data="photos" />
    <paket-terbaru :data="brands" />
    <form-sechdule />
  </v-main>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import PaketTerbaru from "../components/PaketTerbaru.vue";
import FormSechdule from "../components/FormSechdule.vue";
export default {
  components: {
    Carousel,
    PaketTerbaru,
    FormSechdule,
  },
  data: () => ({
    photos: [
      {
        id: "1002",
        color: "black--text",
        author: "Umroh Nyaman dan Tenang",
        text: "Teks deskripsi sangat perlu dipelajari oleh penulis novel, sehingga dalam novelnya mereka bisa menggambarkan sebuah tempat atau objek dengan jelas sehingga pembaca seolah pembaca dapat merasakan dan tau betul keadaan yang sedang mereka baca.",
        width: 4312,
        height: 2868,
        download_url:
          "http://safir-be.test/storage/NewProject.jpg",
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
