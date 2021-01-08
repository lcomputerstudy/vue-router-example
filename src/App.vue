<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
      <v-subheader>Router</v-subheader>
      <v-list-item-group
        color="primary"
      >
       <v-list-item router :to="{name:'Home'}" >
          <v-list-item-content>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{name:'Parameter',params:{
          value:1234,
          name:'엘컴퓨터학원' //꼭 router > index.js에 파라메터를 설정해주지않아도 값넘김 가능
        }}" >
          <v-list-item-content>
            <v-list-item-title >Parameter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item router :to="{name:'Query',params:{
          value:1234,
          name:'엘컴퓨터학원', //꼭 router > index.js에 파라메터를 설정해주지않아도 값넘김 가능,
         },
         query: {
           location:'대구'
         }
        }" >
          <v-list-item-content>
            <v-list-item-title >Query</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{name:'Parent'}" >
          <v-list-item-content>
            <v-list-item-title >Parent</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{name:'Guard'}" >
          <v-list-item-content>
            <v-list-item-title >Guard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Lcomputerstudy-router</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>