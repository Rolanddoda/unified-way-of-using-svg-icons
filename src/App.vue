<script setup>
import { ref } from "vue";

const availableIcons = ["user", "search", "home"];
const selectedIcon = ref(availableIcons[0]);

const color = ref();

const hasHoverColor = ref(false);
const hoverColor = ref();

const availableSizes = ["sm", "md", "lg", "xl"];
const selectedSize = ref(availableSizes[1]);
</script>

<template>
  <header>
    <h1 class="h1">Unified way of using SVG Icons</h1>
  </header>

  <main>
    <svg-icon
      :name="selectedIcon"
      :color="color"
      :hover-color="hasHoverColor ? hoverColor : false"
      :size="selectedSize"
    />

    <div class="controls">
      <h2 class="control-header">Controls</h2>

      <section class="section">
        Change Icon:
        <select name="icon" v-model="selectedIcon">
          <option v-for="icon of availableIcons" :key="icon" :value="icon">
            {{ icon }}
          </option>
        </select>
      </section>

      <section class="section">
        Color:
        <input
          type="text"
          v-model="color"
          placeholder="type color: var:slate by default"
        />
      </section>

      <section class="section">
        Enable hover color: <input type="checkbox" v-model="hasHoverColor" />
        <input
          type="text"
          :disabled="!hasHoverColor"
          v-model="hoverColor"
          placeholder="type color: white by default"
        />
      </section>

      <section class="section">
        Change size:
        <select name="icon" v-model="selectedSize">
          <option v-for="size of availableSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
@import "css/base";

#app {
  display: grid;
  place-content: center;
  place-items: center;
  gap: 1rem;
}

.h1 {
  font-size: 3rem;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.controls {
  border: 2px solid #ccc;
  padding: 24px;

  display: grid;
  align-items: start;
  gap: 16px;

  .control-header {
    text-decoration: underline;
    margin: 0 auto;
  }

  .section {
    padding: 8px 16px;
    box-shadow: 0 0 10px black;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
