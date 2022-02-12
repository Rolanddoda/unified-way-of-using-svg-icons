<script setup>
import { useGlobalStore } from '@/stores/global-store'
import ControlsSection from '@/components/ControlsSection.vue'
import ResultSection from '@/components/ResultSection.vue'

const globalStore = useGlobalStore()
</script>

<template>
  <header>
    <div class="gradient-font q-my-sm">Unified way of using SVG Icons</div>
  </header>

  <main class="main">
    <ControlsSection />
    <ResultSection />

    <div class="area css-vars-area">
      <h4 class="h4 text-indigo-3 text-center q-mb-md">CSS Variables</h4>

      <q-input
        v-for="(colorValue, colorKey) in globalStore.cssVarColors"
        v-model="globalStore.cssVarColors[colorKey]"
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
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="globalStore.cssVarColors[colorKey]" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </main>
</template>

<style lang="scss">
@import 'css/base';

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
  --q-primary: v-bind('globalStore.cssVarColors.primary');
  --q-secondary: v-bind('globalStore.cssVarColors.secondary');
  --q-positive: v-bind('globalStore.cssVarColors.positive');
  --q-negative: v-bind('globalStore.cssVarColors.negative');
  --q-info: v-bind('globalStore.cssVarColors.info');
  --q-warning: v-bind('globalStore.cssVarColors.warning');

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
</style>
