<script setup lang="ts">
  import ExportImportResults from "~/components/ExportImportResults/ExportImportResults.vue";

  const { get: aquariumResults } = resultTracker()
</script>

<template>
  <div class="w-full max-w-xs">
    <export-import-results :aquarium-results="aquariumResults()" />
    <aquarium-result-form />
    <aquarium-result-table :aquarium-results="aquariumResults()" />
  </div>
</template>

<style lang="postcss" scoped>

</style>

