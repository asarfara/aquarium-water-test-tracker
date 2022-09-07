import { AquariumResultInterface } from '~/model/AquariumResultInterface';

export default function csvExporter() {
    function arrayToCsv(data: AquariumResultInterface[]): string {
        return [
            [
                "date",
                "ph",
                "gh",
                "kh",
                "ammonia",
                "nitrite",
                "nitrate",
                "phosphate"
            ],
            ...data.map(item => [
                item.date,
                item.ph,
                item.gh,
                item.kh,
                item.ammonia,
                item.nitrite,
                item.nitrate,
                item.phosphate,
            ])
        ]
            .map(e => e.join(","))
            .join("\n")
    }

    function downloadBlob(content, filename, contentType): void {
        var blob = new Blob([content], { type: contentType });
        var url = URL.createObjectURL(blob);

        var pom = document.createElement('a');
        pom.href = url;
        pom.setAttribute('download', filename);
        pom.click();
    }

    function exportResults(results: AquariumResultInterface[]): void {
        downloadBlob(arrayToCsv(results), 'aquarium-results.csv', 'text/csv;charset=utf-8;')
    }

    return { exportResults }
}