<template>
    <div class="app-container">
      <topBar></topBar>
      <div class="router-view-container">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script setup>
  import topBar from "../../components/topBar/topBar.vue"
  </script>
  
  <style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .router-view-container {
    flex: 1;
  }
  </style>
  