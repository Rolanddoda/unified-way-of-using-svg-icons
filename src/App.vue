<script setup>
import { computed, reactive, ref } from "vue";
import CodeSnippet from "./components/CodeSnippet.vue";

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

const code = computed(() => {
  let code = "<svg-icon";
  code += `\n name="${selectedIcon.value}"`;

  if (selectedSize.value !== "xl") {
    code += `\n size="${selectedSize.value}"`;
  }

  if (color.value) {
    code += `\n color="${color.value}"`;
  }

  if (hasHoverColor.value) {
    if (!hoverColor.value) {
      code += `\n hover-color`;
    } else {
      code += `\n hover-color="${hoverColor.value}"`;
    }
  }

  code += `\n/>`;

  return code;
});
</script>

<template>
  <header>
    <div class="gradient-font q-my-sm">Unified way of using SVG Icons</div>
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
          placeholder="type color: var:primary by default"
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

    <div class="result-area">
      <CodeSnippet :code="code" />

      <div class="icon-container">
        <div class="bg"></div>
        <svg-icon
          :name="selectedIcon"
          :color="color"
          :hover-color="hasHoverColor ? hoverColor : false"
          :size="selectedSize"
        />
      </div>
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
          <small> {{ colorKey }}:</small>
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
</template>

<style lang="scss">
@import "css/base";

.gradient-font {
  font-weight: bold;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: clamp(1.5rem, 9vw - 2rem, 5rem);
}

.main {
  --q-primary: v-bind("cssVarColors.primary");
  --q-secondary: v-bind("cssVarColors.secondary");
  --q-positive: v-bind("cssVarColors.positive");
  --q-negative: v-bind("cssVarColors.negative");
  --q-info: v-bind("cssVarColors.info");
  --q-warning: v-bind("cssVarColors.warning");

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;

  > .area {
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 24px;
    min-width: 300px;
    flex: 1;
  }
}

.controls-area {
  display: grid;
  align-items: start;
  gap: 16px;
}

.result-area {
  display: grid;
  gap: 16px;
  flex: 1;

  .icon-container {
    position: relative;
    display: grid;
    place-items: center;
    place-content: center;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 0 15px black;

    .bg {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(135deg, rgba(66, 211, 146) 25%, #647eff);
      filter: brightness(0.5);
      opacity: 0.6;
      z-index: -1;
    }
  }
}
</style>
