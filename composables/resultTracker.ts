import { ref, onMounted, watch } from 'vue'
import { AquariumResultInterface } from '~/model/AquariumResultInterface';
import { useResultsStore } from '~/store/results'

export default function resultTracker() {
    const aquariumResults = ref<AquariumResultInterface[]>([])
    const { setArray: updateStorage, getArray: getResults } = useLocalStorage()
    let resultsStore = useResultsStore()

    resultsStore.$subscribe((mutation, state) => {
        updateStorage<AquariumResultInterface[]>('resultsStore', state.resultsList)
        aquariumResults.value = state.resultsList
    })

    function get(): AquariumResultInterface[] {
        return aquariumResults.value.sort((a,b) => {
            return Date.parse(a.date) - Date.parse(b.date)
        })
    }

    function add(date, ph, gh, kh, ammonia, nitrite, nitrate, phosphate): void {
        resultsStore.setResult(date, ph, gh, kh, ammonia, nitrite, nitrate, phosphate)
    }

    function setDefaults(results: AquariumResultInterface[]) {
        resultsStore.setDefaults(results)
    }

    onMounted(() => {
        aquariumResults.value = getResults<AquariumResultInterface[]>('resultsStore')
        setDefaults(aquariumResults.value)
    })

    return { get, aquariumResults: aquariumResults, add, setDefaults }
}


