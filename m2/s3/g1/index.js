//Primo esercizio


class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location 
    }

    confronto(anyUser) {
        if(this.age < anyUser.age) {
            return `${anyUser.firstName} è più vecchio di ${this.firstName}`
        } else if(this.age > anyUser.age) {
            return `${anyUser.firstName} è piu giovane di ${this.firstName}`
        } else {
            return `${anyUser.firstName} è della stessa età di ${this.firstName}`
        }
    }
}

esempioA = new User ('Mario', 'Giordano', 35, 'Milano')
esempioB = new User ('Stefano', ' Chitti', 40, 'Catanzaro')
esempioC = new User ('Claudio', 'Rossi', 55, 'Bologna')

console.log(esempioA.confronto(esempioB));
console.log(esempioB.confronto(esempioC));
console.log(esempioC.confronto(esempioA));



//Secondo esercizio

