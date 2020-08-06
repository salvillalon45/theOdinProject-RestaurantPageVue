<!-- src/Menu/index.vue -->

<template>
  <main class="menu-page">
    <div class="menu-container-text">
      <h1>Our Menu</h1>
    </div>

    <div class="menu-container">
      <div class="menu-card">
        <img v-bind:src="burger">
        <h3>Burger</h3>
      </div>

      <div class="menu-card">
        <img v-bind:src="pho">
        <h3>Pho</h3>
      </div>

      <div class="menu-card">
        <img v-bind:src="tacos">
        <h3>Tacos de Carne Asada</h3>
      </div>

      <div class="menu-card">
        <img v-bind:src="pancakes">
        <h3>Pancakes</h3>
      </div>

      <div class="menu-card">
        <img v-bind:src="steak">
        <h3>Steak</h3>
      </div>

      <div class="menu-card">
        <img v-bind:src="shrimp">
        <h3>Roasted Shrimp</h3>
      </div>
    </div>
  </main>
</template>

<script src="./script.js"></script>

<style scoped src="./style.css"></style>
