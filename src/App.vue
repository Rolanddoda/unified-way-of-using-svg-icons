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
    <h1 class="h1 gradient-font">Unified way of using SVG Icons</h1>
  </header>

  <main class="main">
    <div class="controls-area">
      <h4 class="h4 text-indigo-3 text-center">Controls</h4>

      <section class="section">
        Change Icon:
        <q-select
          v-model="selectedIcon"
          :options="availableIcons"
          dense
          dark
          outlined
        />
      </section>

      <section class="section">
        Color:
        <q-input
          v-model="color"
          dense
          outlined
          dark
          placeholder="type color: var:slate by default"
          style="width: 250px"
        />
      </section>

      <section class="section">
        Enable hover color:
        <q-checkbox
          dark
          dense
          type="checkbox"
          v-model="hasHoverColor"
          class="q-ma-sm"
        />
        <q-input
          v-model="hoverColor"
          :disable="!hasHoverColor"
          dense
          outlined
          dark
          placeholder="type color: white by default"
          style="width: 250px"
        />
      </section>

      <section class="section">
        Change size:
        <q-select
          v-model="selectedSize"
          :options="availableSizes"
          dense
          dark
          outlined
        />
      </section>
    </div>

    <div class="icon-area">
      <h4 class="h4 text-indigo-3 text-center">Result</h4>
      <svg-icon
        :name="selectedIcon"
        :color="color"
        :hover-color="hasHoverColor ? hoverColor : false"
        :size="selectedSize"
      />
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

.gradient-font {
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.main {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  width: 100%;
  padding: 32px;
}

.controls-area,
.icon-area {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 24px;
}

.controls {
  display: grid;
  align-items: start;
  gap: 16px;
}

.icon-area {
  display: grid;
  justify-content: center;
  justify-items: center;
}
</style>
