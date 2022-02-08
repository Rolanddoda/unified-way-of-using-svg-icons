<script setup>
import { ref } from "vue";

const availableIcons = ["user", "search", "home"];
const selectedIcon = ref(availableIcons[0]);

const hasHoverColor = ref(false);
const hoverColor = ref();
</script>

<template>
  <header>
    <h1>Unified way of using SVG Icons</h1>
  </header>

  <main>
    <svg-icon :name="selectedIcon" :hover-color="hasHoverColor ? hoverColor : false" />

    <div class="modifications">
      <h2>Controls</h2>

      <section>
        Change Icon:
        <select name="icon" v-model="selectedIcon">
          <option v-for="icon of availableIcons" :key="icon" :value="icon">
            {{ icon }}
          </option>
        </select>
      </section>

      <section>
        <h3>Hover color</h3>

        Enable hover color: <input type="checkbox" v-model="hasHoverColor" />
        <input
          type="text"
          :disabled="!hasHoverColor"
          v-model="hoverColor"
          placeholder="type color: white by default"
        />
      </section>
    </div>
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

.item {
  display: flex;
  gap: 16px;
}
</style>
