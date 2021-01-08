<template>
    <v-container style="width:300px;height:300px;background-color:#ededed;">
        <v-col>
            <v-row>
                <div>
                    <h1>Children</h1>
                    <div>params: {{value}}</div>
                </div>
           
            </v-row>
        </v-col>
    </v-container>
</template>
<script>
export default {
    computed: {
        value() {
            return this.$route.params.value
        }
    }
}
</script>