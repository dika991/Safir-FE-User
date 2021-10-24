<template>
    <v-main>
        <v-container>
            <v-col cols="8" md="8" class="mx-auto">
                <v-row>
                    <v-card>
                        <v-card-title>Masukkan Kode Pemesanan</v-card-title>
                        <v-card-text>
                            <v-text-field
                            outlined
                            dense
                            label="Kode Pemesanan" v-model="code"></v-text-field>
                            <v-btn color="teal" dark @click.prevent="submitCode()">Submit</v-btn>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-col>
        </v-container>
    </v-main>
</template>
<script>

export default({
    name:"CekPemesanan",
    data(){
        return {
            code: ""
        }
    },
    methods:{
        submitCode(){
            this.$router.push({path : "/cekPemesanan/" + this.code});
        }
    }
})
</script>
