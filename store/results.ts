import { defineStore } from 'pinia'
import {AquariumResultInterface} from "~/model/AquariumResultInterface";

export const useResultsStore = defineStore('result-store', {
    state: () => {
        return {
            resultsList: [] as AquariumResultInterface[]
        }
    },
    actions: {
        setDefaults(results: AquariumResultInterface[]) {
            if (results.length > 0) {
                this.resultsList = results
            }
        },
        setResult(date, ph, gh, kh, ammonia, nitrite, nitrate, phosphate)  {
            let existingResult = this.resultsList.filter((object) => {
                if (object.date === date) {
                    object.ph = ph
                    object.gh = gh
                    object.kh = kh
                    object.ammonia = ammonia
                    object.nitrite = nitrite
                    object.nitrate = nitrate
                    object.phosphate = phosphate
                }

                return object.date === date;
            });

            if (existingResult.length === 0) {
                this.resultsList.push({
                    date: date,
                    ph: ph,
                    gh: gh,
                    kh: kh,
                    ammonia: ammonia,
                    nitrite: nitrite,
                    nitrate: nitrate,
                    phosphate: phosphate
                })
            }
        }
    },
    getters: {
        getResults: state => state.resultsList,
    },
})