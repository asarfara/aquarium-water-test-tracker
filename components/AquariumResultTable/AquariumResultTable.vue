<script setup lang="ts">
import { AquariumResultInterface } from "~/model/AquariumResultInterface"

interface Props {
  aquariumResults: AquariumResultInterface[]
}

withDefaults(defineProps<Props>(), { aquariumResults: null })

</script>

<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-if="aquariumResults">
    <h2 class="font-medium leading-tight text-4xl mt-0 mb-4">Aquarium Results</h2>
    <table
      class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 sm:inline-table">
      <thead class="text-white">
        <tr class="bg-blue-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">Date</th>
          <th class="p-3 text-left">PH</th>
          <th class="p-3 text-left">GH</th>
          <th class="p-3 text-left">KH</th>
          <th class="p-3 text-left">Ammonia (NH3)</th>
          <th class="p-3 text-left">Nitrite (NO2)</th>
          <th class="p-3 text-left">Nitrate (NO3)</th>
          <th class="p-3 text-left">Phosphate</th>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
          v-for="(aquariumResult, aquariumResultsIndex) in aquariumResults"
          :key="`aquariumResult__${aquariumResultsIndex}`" :index="aquariumResultsIndex">
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.date }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.ph }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.gh }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.kh }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.ammonia }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.nitrite }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.nitrate }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{ aquariumResult.phosphate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
