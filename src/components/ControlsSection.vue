<script setup>
import { useGlobalStore } from '../stores/global-store'

const globalStore = useGlobalStore()
</script>

<template>
  <div class="controls gradient-border relative-position q-pa-xl">
    <h4 class="h4 text-indigo-3 text-center">Controls</h4>

    <section class="section">
      Change Icon:
      <AppSelect v-model="globalStore.selectedIcon" :options="globalStore.availableIcons" />
    </section>

    <section class="section">
      Change size:
      <AppSelect v-model="globalStore.selectedSize" :options="globalStore.availableSizes" />
    </section>

    <section class="section">
      Color:
      <AppInput v-model="globalStore.color" placeholder="var:primary by default" />
    </section>

    <section class="section">
      Enable hover color:
      <q-checkbox dark dense type="checkbox" v-model="globalStore.hasHoverColor" class="q-ma-sm" />
      <AppInput v-model="globalStore.hoverColor" :disable="!globalStore.hasHoverColor" placeholder="white by default" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: grid;
  align-items: start;
  gap: 16px;
}
</style>
