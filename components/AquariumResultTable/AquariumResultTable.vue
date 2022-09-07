<script setup lang="ts">
import { AquariumResultInterface } from "~/model/AquariumResultInterface";

interface Props {
  aquariumResults: AquariumResultInterface[];
}

withDefaults(defineProps<Props>(), { aquariumResults: null });

</script>

<template>
  <div class="w-full max-w-xs">
    <table class="table-auto">
      <thead>
      <tr>
        <th class="px-4 py-2">Date</th>
        <th class="px-4 py-2">PH</th>
        <th class="px-4 py-2">GH</th>
        <th class="px-4 py-2">KH</th>
        <th class="px-4 py-2">Ammonia (NH3)</th>
        <th class="px-4 py-2">Nitrite (NO2)</th>
        <th class="px-4 py-2">Nitrate (NO3)</th>
        <th class="px-4 py-2">Phosphate</th>
      </tr>
      </thead>
      <tbody>
        <tr
            v-if="aquariumResults"
            v-for="(aquariumResult, aquariumResultsIndex) in aquariumResults"
            :key="`aquariumResult__${aquariumResult.id}--${aquariumResultsIndex}`"
            :index="aquariumResultsIndex"
        >
          <td class="border px-4 py-2">{{ aquariumResult.date }}</td>
          <td class="border px-4 py-2">{{ aquariumResult.ph }}</td>
          <td class="border px-4 py-2">{{ aquariumResult.gh }}</td>
          <td class="border px-4 py-2">{{ aquariumResult.kh }}</td>
          <td class="border px-4 py-2">{{ aquariumResult.ammonia }}</td>
          <td class="border px-4 py-2">{{ aquariumResult.nitrite }}</td>
          <td class="border px-4 py-2">{{ aquariumResult.nitrate }}</td>
          <td class="border px-4 py-2">{{ aquariumResult.phosphate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="postcss" scoped>

</style>

