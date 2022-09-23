<script setup lang="ts">
import { AquariumResultInterface } from "~/model/AquariumResultInterface"

interface Props {
  aquariumResults: AquariumResultInterface[]
}

withDefaults(defineProps<Props>(), { aquariumResults: null })

</script>

<template>
  <div class="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4" v-if="aquariumResults">
    <h2 class="font-medium leading-tight text-4xl mt-0 mb-4">Aquarium Results</h2>
    <div class="overflow-x-auto relative">
      <table
          class="w-full text-left text-gray-500 dark:text-gray-400">
        <thead class="text-gray-700 uppercase bg-blue-700 text-white">
        <tr>
          <th class="py-3 px-6">Date</th>
          <th class="py-3 px-6">PH</th>
          <th class="py-3 px-6">GH</th>
          <th class="py-3 px-6">KH</th>
          <th class="py-3 px-6">Ammonia (NH3)</th>
          <th class="py-3 px-6">Nitrite (NO2)</th>
          <th class="py-3 px-6">Nitrate (NO3)</th>
          <th class="py-3 px-6">Phosphate</th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="(aquariumResult, aquariumResultsIndex) in aquariumResults"
            :key="`aquariumResult__${aquariumResultsIndex}`">
          <td class="py-4 px-6">{{ aquariumResult.date }}</td>
          <td class="py-4 px-6">{{ aquariumResult.ph }}</td>
          <td class="py-4 px-6">{{ aquariumResult.gh }}</td>
          <td class="py-4 px-6">{{ aquariumResult.kh }}</td>
          <td class="py-4 px-6">{{ aquariumResult.ammonia }}</td>
          <td class="py-4 px-6">{{ aquariumResult.nitrite }}</td>
          <td class="py-4 px-6">{{ aquariumResult.nitrate }}</td>
          <td class="py-4 px-6">{{ aquariumResult.phosphate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
