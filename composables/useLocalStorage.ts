export default function useLocalStorage() {
    function setArray<T>(name: string, value: T): void {
        if(process.client) {
            localStorage.setItem(name, JSON.stringify(value))
        }
    }

    function getArray <T>(name: string): T {
        if(process.client) {
            return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : []
        }
    }

    return { setArray, getArray }
}