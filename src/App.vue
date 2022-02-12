<script setup>
import { useGlobalStore } from '@/stores/global-store'
import ControlsSection from '@/components/ControlsSection.vue'
import ResultSection from '@/components/ResultSection.vue'
import VariablesSection from '@/components/VariablesSection.vue'

const globalStore = useGlobalStore()
</script>

<template>
  <header>
    <div class="gradient-font q-my-sm">Unified way of using SVG Icons</div>
  </header>

  <main class="main">
    <ControlsSection />
    <ResultSection />
    <VariablesSection />
  </main>
</template>

<style lang="scss">
@import 'css/base';

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
}
</style>
