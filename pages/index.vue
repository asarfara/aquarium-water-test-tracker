<script setup lang="ts">

const { get: aquariumResults } = resultTracker()
</script>

<template>
  <div class="sm:m-5 bg-white dark:bg-gray-900">
    <navigation :aquarium-results="aquariumResults()" />
    <section class="bg-slate-50 py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          <div class="relative rounded-2xl border-black border p-6">
            <h3 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              New Users
            </h3>
            <p class="mt-2 font-display text-xl text-slate-900">Make sure to create a backup of your file by clicking
              the
              export button incase your
              browser cache and storage gets cleared.</p>
          </div>
          <div class="relative rounded-2xl border-black border p-6">
            <h3 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Returning Users
            </h3>
            <p class="mt-2 font-display text-xl text-slate-900">If you do not see your results in the table, import it
              from the csv file you saved earlier.</p>
          </div>
          <div class="relative rounded-2xl border-black border p-6">
            <h3 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Love The App
            </h3>
            <p class="mt-4 font-display text-xl text-slate-900">I hope you like the application, there will be more
              features in the future. You can follow the roadmap to see upcoming features.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-slate-50 py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <aquarium-result-form />
      </div>
    </section>
    <section class="bg-slate-50 py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <aquarium-result-table :aquarium-results="aquariumResults()" />
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>

</style>

