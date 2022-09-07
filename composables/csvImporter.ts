import { AquariumResultInterface } from '~/model/AquariumResultInterface';

export default function csvImporter() {

    function importFile(file) {
        const reader = new FileReader()
        let resultsTracker = resultTracker()

        reader.readAsText(file);
        reader.onload = () => {
            const text = reader.result;
            const csvToJson = csvJSON(text);
            resultsTracker.setDefaults(csvToJson)
        }

    }

    function csvJSON(csvText): AquariumResultInterface[] {
        let lines = [];
        const linesArray = csvText.split('\n');

        linesArray.forEach((e: any) => {
            const row = e.replace(/[\s]+[,]+|[,]+[\s]+/g, ',').trim();
            lines.push(row);
        });

        lines.splice(lines.length - 1, 1);
        const result = [];
        const headers = lines[0].split(",");

        for (let i = 1; i < lines.length; i++) {

            const obj = {};
            const currentline = lines[i].split(",");

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }

        return result;
    }

    return { importFile }
}