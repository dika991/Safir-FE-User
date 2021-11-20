<template>
  <v-row>
    <v-col>
      <v-alert border="top" color="yellow darken-2" light>
        Silahkan untuk lengkapi profil dengan menekan tombol "PROFIL", dan
        lengkapi dokumen dengan menekan tombol "BERKAS"
      </v-alert>
      <v-data-table
        :headers="this.headerJemaah"
        :items="this.list"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.nama="{ item }">
          <p v-if="item.nama == null" class="font-weight-bold">
            Silahkan Edit Data Jemaah
          </p>
          <p v-else>{{ item.nama }}</p>
        </template>
        <template v-slot:item.aksi="{ item }">
          <v-btn-toggle>
            <v-btn
              x-small
              @click="openDialog(item)"
              color="teal"
              class="white--text"
            >
              Profil
              <v-icon>mdi-add</v-icon>
            </v-btn>
            <v-btn
              x-small
              color="teal"
              class="white--text"
              @click="openBerkas(item)"
            >
              Berkas
              <v-icon>mdi-document</v-icon>
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-data-table>
    </v-col>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Update Data Jemaah
          </v-card-title>

          <v-card-text>
            <v-col
              ><v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="detail.nama"
                  :rules="nameRules"
                  label="Nama"
                  required
                ></v-text-field>

                <v-select
                  :items="[`L`, `P`]"
                  label="Jenis Kelamin"
                  v-model="detail.jenis_kelamin"
                  :rules="[(v) => !!v || 'Jenis Kelamin Wajib']"
                >
                </v-select>

                <v-text-field
                  v-model="detail.usia"
                  label="Usia"
                  required
                  type="number"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="postSubmit()"> Send </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogDokumen" width="750">
        <v-card class="mb-5">
          <v-card-title class="text-h5 teal white--text">
            Rekap Berkas Jemaah
          </v-card-title>

          <v-card-text>
            <v-card-subtitle class="mt-5">Dokumen yang belum</v-card-subtitle>
            <v-row>
              <v-col
                lg="4"
                v-for="dokumens in dokumens.check"
                :key="dokumens.id"
              >
                <v-card
                  max-width="344"
                  color="white darken-2"
                  @click.prevent="formUpload(dokumens)"
                >
                  <p class="text-subtitle-2 text-center">{{ dokumens }}</p>
                </v-card>
              </v-col>
            </v-row>
            <v-divider class="mt-5" />
            <v-row class="mt-5">
              <v-row>
                <v-col class="mx-auto">
                  <p class="text-center">Dokumen yang sudah</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  lg="4"
                  v-for="dokumens in dokumens.dokumen"
                  :key="dokumens.id"
                >
                  <v-card class="mx-auto" max-width="344">
                    <v-row>
                      <v-col>
                        <p class="text-center font-weight-bold">
                          {{ dokumens.jenis }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-card-subtitle>
                      {{ dokumens.created_at }}
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        color="red lighten-2"
                        text
                        @click.prevent="postDelete(dokumens.id)"
                      >
                        Hapus
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn icon @click="show = !show">
                        <v-icon>md-application-edit</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-row>
          </v-card-text>

          <v-divider class=""></v-divider>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogAddDokumen" width="500">
        <v-card>
          <v-card-title class="text-h5 white--text teal">
            Form Upload {{ this.dokumen.jenis }}
          </v-card-title>

          <v-card-text>
            <v-file-input
              v-model="files"
              placeholder="Upload File"
              label="File Upload"
              prepend-icon="mdi-plus"
              type="file"
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              x-small
              color="teal"
              class="white--text"
              @click="postUpload()"
            >
              Upload {{ this.dokumen.jenis }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true"
    ></loading>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import $axios from "../../../api.js";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  props: ["jemaah", "headerJemaah"],
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      dataJem: {},
      jemaahSelected: {},
      dialog: false,
      dialogDokumen: false,
      dialogAddDokumen: false,
      files: null,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Nama dibutuhkan",
        (v) => (v && v.length >= 10) || "Nama minimal 10 karakter",
      ],
    };
  },
  computed: {
    ...mapState("jemaah", {
      detail: (state) => state.jemaah,
    }),
    ...mapState("jemaah", {
      list: (state) => state.listJemaah,
    }),
    ...mapState("dokumen", {
      dokumens: (state) => state.listDokumen,
    }),
    ...mapState("dokumen", {
      dokumen: (state) => state.dokumen,
    }),
  },
  created() {
    this.getJemaah(this.$route.params.code);
  },
  methods: {
    ...mapActions("jemaah", ["detailJemaah", "updateJemaah", "getJemaah"]),
    ...mapMutations("jemaah", ["CLEAR_FORM"]),
    ...mapActions("dokumen", ["getDokumen", "postUploadDokumen"]),
    ...mapMutations("dokumen", ["CLEAR_DATA"]),
    openDialog(jemaah) {
      let search = {
        idPemesanan: jemaah.id_pemesanan,
        idJemaah: jemaah.id,
      };
      this.detailJemaah(search).then(() => {});
      this.dialog = true;
    },
    postSubmit() {
      this.updateJemaah()
        .then(() => {})
        .finally(() => {
          this.$swal({
            icon: "success",
            text: "Data Jemaah Berhasil Diupdate",
            toast: true,
            showConfirmButton: false,
            position: "top-end",
            timer: 1500,
          });
          this.dialog = false;
          this.CLEAR_FORM();
          this.getJemaah(this.$route.params.code);
        });
    },
    openBerkas(item) {
      this.dialogDokumen = true;
      let dat = {
        code: this.$route.params.code,
        idJemaah: item.id,
      };
      this.jemaahSelected = item;
      this.getDokumen(dat);
    },
    formUpload(tipe) {
      this.dokumen.jenis = tipe;
      this.dokumen.id_jemaah = this.jemaahSelected.id;
      this.dialogAddDokumen = true;
    },
    postUpload() {
      this.isLoading = true;

      let formData = new FormData();
      formData.append("file", this.files);

      let dokumen = {
        code: this.$route.params.code,
        idJemaah: this.jemaahSelected.id,
      };

      this.postUploadDokumen(dokumen)
        .then((response) => {
          $axios
            .post(
              `book/${this.$route.params.code}/jemaah/${this.jemaahSelected.id}/dokumen/${response.data.id}`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then(() => {});
        })
        .finally(() => {
          let dat = {
            code: this.$route.params.code,
            idJemaah: this.jemaahSelected.id,
          };
          this.getDokumen(dat);
          this.CLEAR_DATA();
          this.files = null;
          this.$swal({
            icon: "success",
            text: "Upload Dokumen Berhasil",
            toast: true,
            showConfirmButton: false,
            position: "top-end",
            timer: 1500,
          });
          this.dialogAddDokumen = false;
          this.isLoading = false;
        });
    },
    postDelete(id) {
      this.isLoading = true;
      $axios
        .delete(
          `book/${this.$route.params.code}/jemaah/${this.jemaahSelected.id}/dokumen/${id}`
        )
        .then(() => {})
        .finally(() => {
          let dat = {
            code: this.$route.params.code,
            idJemaah: this.jemaahSelected.id,
          };
          this.getDokumen(dat);
          this.CLEAR_DATA();
          this.isLoading = false;
        });
    },
    checkDocument() {
      this.dokumens.check;
    },
  },
};
</script>
