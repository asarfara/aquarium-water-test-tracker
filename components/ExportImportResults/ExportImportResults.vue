<script setup lang="ts">
import { AquariumResultInterface } from "~/model/AquariumResultInterface";
import csvImporter from "~/composables/csvImporter";

interface Props {
  aquariumResults: AquariumResultInterface[];
}

let props = withDefaults(defineProps<Props>(), { aquariumResults: null });

const { exportResults } = csvExporter()
const { importFile } = csvImporter()

const file = ref(null)

function importResults() {
  importFile(file.value.files[0])
}

function exportFile() {
  exportResults(props.aquariumResults)
}

</script>

<template>
  <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click="exportFile"
  >
    Export
  </button>

  <input ref="file" v-on:change="importResults()"  type="file">

</template>