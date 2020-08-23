class Tax{
    constructor(newName, newYear){
        this.name = newName
        this.year = newYear
    }

    appHeading() {
        var calcDetails = `${this.name} ${this.year}`
        return calcDetails
    }
}