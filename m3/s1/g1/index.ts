
interface Smartphone {
    credito: number
    numeroChiamate: number
    ricarica(ammontare:number): void
    chiamata(minutiDurata: number): void
    get numero404(): number
    get getNumeroChiamate(): number
    azzeraChiamate(): void
}


class User implements Smartphone {
    name: string
    lastName: string
    credito: number = 0
    numeroChiamate: number = 0
    constructor(name: string, lastName: string) {
        this.name = name
        this.lastName = lastName
    }
    ricarica(ammontare: number): void {
        this.credito += ammontare
    
}
}

