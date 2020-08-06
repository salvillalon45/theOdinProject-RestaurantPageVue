<!-- src/Jumbotron/index.vue -->

<template>
    <main class="index-page">
        <div class="jumbotron">
            <div class="overlay-container">
                <div class="jumbotron-text">
                    <h1>You Hungry? We got you with deals!</h1>
                    <h2>Order in with pick up or free delivery!</h2>
                </div>
            </div>
        </div>

        <div class="offer-container-text">
            <h2>We got good offers this month!</h2>
        </div>

        <div class="offer-container">
            <div class="offer-card">
                <img v-bind:src="burger" alt="burger">
                <h3>Burger</h3>
                <h4>Get two burgers</h4>
                <h4>for the price of one</h4>
            </div>

            <div class="offer-card">
                <img v-bind:src="pho" alt="pho">
                <h3>Pho</h3>
                <h4>Get one pho,</h4>
                <h4>get the second one free</h4>
            </div>
            <div class="offer-card">
                <img v-bind:src="tacos" alt="tacos">
                <h3>Tacos de Carne Asada</h3>
                <h4>Get tacos and</h4>
                <h4>drink combo for a low price</h4>
            </div>
        </div>
    </main>
</template>

<script src="./script.js"></script>

<style scoped src="./style.css"></style>
