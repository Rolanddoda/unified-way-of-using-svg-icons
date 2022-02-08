<script setup></script>

<template>
  <header>
    <h1>Unified way of using SVG Icons</h1>
  </header>

  <main>
    <button>I am a button</button>
  </main>
</template>

<style>
@import "./css/base.css";

#app {
  display: grid;
  place-content: center;
  place-items: center;
  gap: 1rem;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
</style>
