<template>
    <div>
        <h1>Parameter</h1>
        {{ value }}
        {{$route.params.name}}
    </div>
</template>

<script>
export default {
    computed: {
        value() {
            return this.$route.params.value
        }
    },
    created() {
        console.log("router :",this.$router) //실제로 router>index.js에 선언되어있는 모든 라우터들
        console.log("route : ",this.$route) //현재 주소에 관한 라우터 정보들
    }
}
</script>

