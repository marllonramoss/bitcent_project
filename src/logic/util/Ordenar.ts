export default class Ordenar {
    static porData(d1: Date, d2: Date) {
        const t1 = d1.getTime()
        const t2 = d2.getTime()
        return t1 > t2 ? 1 : t1 < t2 ? -1 : 0
    }

    static porString(s1: string, s2: string) {
        return s1 > s2 ? 1 : s1 < s2 ? -1 : 0
    }

    static porNumero(n1: number, n2: number) {
        return n1 > n2 ? 1 : n1 < n2 ? -1 : 0
    }
}