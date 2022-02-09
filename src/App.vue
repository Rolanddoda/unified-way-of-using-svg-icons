<script setup>
import { reactive, ref } from "vue";

const availableIcons = ["user", "search", "home"];
const selectedIcon = ref(availableIcons[0]);

const color = ref();

const hasHoverColor = ref(false);
const hoverColor = ref();

const availableSizes = ["sm", "md", "lg", "xl"];
const selectedSize = ref(availableSizes[3]);

const cssVarColors = reactive({
  primary: "#007bff",
  secondary: "#6c757d",
  positive: "#28a745",
  negative: "#dc3545",
  info: "#17a2b8",
  warning: "#ffc107",
});
</script>

<template>
  <div id="app">
    <header>
      <h1 class="h1 gradient-font">Unified way of using SVG Icons</h1>
    </header>

    <main class="main">
      <div class="area controls-area">
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

      <div class="area icon-area">
        <h4 class="h4 text-indigo-3 text-center">Result</h4>
        <svg-icon
          :name="selectedIcon"
          :color="color"
          :hover-color="hasHoverColor ? hoverColor : false"
          :size="selectedSize"
        />
      </div>

      <div class="area css-vars-area">
        <h4 class="h4 text-indigo-3 text-center q-mb-md">CSS Variables</h4>

        <q-input
          v-for="(colorValue, colorKey) in cssVarColors"
          v-model="cssVarColors[colorKey]"
          :key="colorKey"
          filled
          dark
          dense
          class="my-input q-mb-sm"
        >
          <template #prepend>
            <q-icon name="circle" :color="colorKey"></q-icon>
            <small> --q-{{ colorKey }}:</small>
          </template>
          <template #append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="cssVarColors[colorKey]" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "css/base";

#app {
  --q-primary: v-bind("cssVarColors.primary");
  --q-secondary: v-bind("cssVarColors.secondary");
  --q-positive: v-bind("cssVarColors.positive");
  --q-negative: v-bind("cssVarColors.negative");
  --q-info: v-bind("cssVarColors.info");
  --q-warning: v-bind("cssVarColors.warning");

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
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  padding: 32px;

  > .area {
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 24px;
    min-width: 250px;
    flex: 1;
  }
}

.controls-area {
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
