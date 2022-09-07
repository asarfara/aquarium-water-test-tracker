<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

const { add } = resultTracker()

const date = ref<Date>(new Date())
const ph = ref<number>(0)
const gh = ref<number>(0)
const kh = ref<number>(0)
const ammonia = ref<number>(0)
const nitrite = ref<number>(0)
const nitrate = ref<number>(0)
const phosphate = ref<number>(0)

function create() {
  add(
      date.value.toLocaleDateString("en-US"),
      ph.value,
      gh.value,
      kh.value,
      ammonia.value,
      nitrite.value,
      nitrate.value,
      phosphate.value
  )
}

</script>

<template>
  <div class="w-full max-w-xs">
    <Datepicker v-model="date" autoApply />
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        placeholder="PH"
        v-model="ph"
    >
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        placeholder="GH"
        v-model="gh"
    >
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        placeholder="KH"
        v-model="kh"
    >
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        placeholder="Ammonia"
        v-model="ammonia"
    >
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        placeholder="Nitrite"
        v-model="nitrite"
    >
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        placeholder="Nitrate"
        v-model="nitrate"
    >
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        placeholder="Phosphate"
        v-model="phosphate"
    >
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="create"
    >
      Submit
    </button>
  </div>
</template>

<style lang="postcss" scoped>

</style>

