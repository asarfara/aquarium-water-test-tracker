<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { AquariumResultInterface } from "~/model/AquariumResultInterface";
import csvImporter from "~/composables/csvImporter";

interface Props {
  aquariumResults: AquariumResultInterface[];
}

let props = withDefaults(defineProps<Props>(), { aquariumResults: null });

const { exportResults } = csvExporter()
const { importFile } = csvImporter()

const file = ref(null)
const importModalOpen = ref(false)
let isMobileMenuActive = ref<Boolean>(false)

function importResults() {
  importFile(file.value.files[0])
}

function exportFile() {
  exportResults(props.aquariumResults)
}

</script>

<template>
  <header>
    <nav class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
          <img src="/logo.png" class="mr-3 h-12 sm:h-12" alt="Aquarium Tracker Logo">
        </a>
        <div class="flex md:order-2">
          <button type="button" @click="importModalOpen = true"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Import</button>
          <button type="button" @click="exportFile"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Export</button>

          <TransitionRoot as="template" :show="importModalOpen">
            <Dialog as="div" class="relative z-10" @close="importModalOpen = false">
              <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </TransitionChild>

              <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Import your last
                            backup csv file
                          </DialogTitle>
                          <div class="mt-2">
                            <p class="text-sm text-gray-500 pt-3">
                              <input ref="file" v-on:change="importResults(); importModalOpen = false" type="file">
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>

          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false" @click="isMobileMenuActive = !isMobileMenuActive">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div :class="{hidden: !isMobileMenuActive}"
          class="justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page">Home</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Roadmap
                (Coming Soon)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

