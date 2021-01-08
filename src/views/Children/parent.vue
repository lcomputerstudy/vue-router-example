<template>
    <v-container fill-height style="width:600px;"> 
        <v-col>
            <h1>parent</h1>
            <v-layout ma-3>
                <v-flex row wrap style="align-items:center;justify-content:center">
                    <v-text-field
                    label="입력하세요"
                    v-model="value"
                ></v-text-field>
                <v-btn
                    icon
                    color="pink"
                    @click="$router.push({name:'Children',params: {
                        value:value
                    }})"
                    >
                    <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-col>
                <v-row>
                    <router-view/>
                </v-row>
            </v-col>
        </v-col>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            value:null
        }
    }
}
</script>