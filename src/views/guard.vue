<template>
    <div>
        <h1>Guard</h1>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to,from,next) {
        console.log("before Enter")
        next()
    },
    created() {
        console.log("created")
    },
    beforeRouteLeave(to,from,next) { //라우터가 페이지를 떠나기전에 실행
        console.log("before Leave")
        next()
    },
    destroyed() {
        console.log("destroyed")
    }
}
</script>