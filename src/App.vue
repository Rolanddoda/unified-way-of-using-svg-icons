<script setup>
import { useGlobalStore } from '@/stores/global-store'
// Components
import ControlsSection from '@/components/ControlsSection.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import ResultSection from '@/components/ResultSection.vue'
import VariablesSection from '@/components/VariablesSection.vue'

const globalStore = useGlobalStore()
</script>

<template>
  <header>
    <div class="gradient-font q-my-sm">Unified way of using SVG Icons</div>
  </header>

  <main class="main row">
    <ControlsSection class="col-12 col-sm-6" />
    <CodeSnippet class="col-12 col-sm-6" />
    <ResultSection class="col-12 col-sm-6" />
    <VariablesSection class="col-12 col-sm-12" />
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

  width: 100%;
  gap: 24px;
}
</style>
