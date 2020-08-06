<!-- src/Header/index.vue -->

<template>
    <header>
        <div class="nav-container">
            <div class="logo-container">
                <p class="logo">Sal's Kitchen</p>
            </div>
            <nav class="nav-links">
                <ul class="menu">
                  <li class="nav-link"><router-link to="/">Home</router-link></li>
                  <li class="nav-link"><router-link to="/Menu">Menu</router-link></li>
                  <li class="nav-link"><router-link to="/OurStory">Our Story</router-link></li>
                  <li class="nav-link"><router-link to="/Locations">Locations</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script src="./script.js"></script>

<style scoped src="./style.css"></style>
