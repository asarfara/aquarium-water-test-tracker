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
    <div class="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
        <h2 class="font-medium leading-tight text-4xl mt-0 mb-4">Add
            aquarium result</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="date">
                    Date
                </label>
                <Datepicker v-model="date" autoApply id="date" />
            </div>
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="ph">
                    PH Value
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="ph" type="number" placeholder="PH" v-model="ph">
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="ph">
                    GH Value
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="gh" type="number" placeholder="GH" v-model="gh">
            </div>
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="kh">
                    KH Value
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="kh" type="number" placeholder="KH" v-model="kh">
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="ammonia">
                    Ammonia
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="ammonia" type="number" placeholder="Ammonia" v-model="ammonia">
            </div>
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="nitrite">
                    Nitrite
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nitrite" type="number" placeholder="Nitrite" v-model="nitrite">
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="nitrate">
                    Nitrate
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nitrate" type="number" placeholder="Nitrate" v-model="nitrate">
            </div>
            <div class="form-group mb-6">
                <label class="block text-gray-700  font-bold mb-2" for="phosphate">
                    Phosphate
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phosphate" type="number" placeholder="Phosphate" v-model="phosphate">
            </div>
        </div>


        <div class="grid grid-cols-1 gap-4">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" @click="create">
                Submit
            </button>
        </div>
    </div>
</template>

<style lang="postcss" scoped>

</style>

