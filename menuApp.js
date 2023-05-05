// Use at least one array.
// Use at least two classes.
// Options to create, view, delete elements 

class AesSedai {
    constructor(name, title, nationality, ajah) {
        this.name = name
        this.title = title
        this.nationality = nationality
        this.ajah = ajah
    }
    
    describe() {
        return `${this.title} ${this.name} Sedai is a member of the ${this.ajah}. She is ${this.nationality}.`
    }
}

class Ajah {
    constructor(color) {
        this.color = color
        this.ajahMembers = []
    }

    createAesSedai(ajahMember) {
        if (ajahMember instanceof AesSedai) {
            this.ajahMembers.push(ajahMember)
        } else {
            throw new Error(`You may only add an Aes Sedai to an Ajah. This ajahMember is not an Aes Sedai. `)
        }
    }

    describe() {
        return `${this.ajahMembers.length} belong to the ${this.color} Ajah.`
    }
} 

class MenuApp {
    constructor(ajahs, chosenAjah) {
        this.ajahs = []
        this.chosenAjah = null
    }

    start() {
        let choice = this.showMainMenuChoices()
        while (choice != 0) {
            switch (choice) {
                case 'a':
                    this.createAjah()
                    break
                case 'b':
                    this.deleteAnAjah()
                    break
                case 'c':
                    this.viewAnAjah
                    break
                case 'd':
                    this.viewAllAjahs
                    break
                default:
                    choice = 'e'
            }
            choice = this.showMainMenuChoices()
        }
        alert('Go with the Light!')
    }

    showAjahMenuChoices() {
        return prompt(`
            a. Create a New Ajah
            b. Delete an Ajah
            c. View an Ajah
            d. View All Ajahs
            e. Exit Application
        `)
    }

    showAjahMenuChoices(ajahInfo) {
        return prompt(`
            a. Create a New Aes Sedai
            b. Delete an Aes Sedai
            c. Return to Main Menu
            _________________________

            ${this.ajahInfo}
        `)
    }

    createANewAjah() {
        let color = prompt('Enter the Color of Your New Ajah: ')
        this.ajahs.push(new Ajah(color))
    }
    
    deleteAnAjah () {

    }

    viewAnAjah() {

    }
    
    viewAllAjahs() {
        let ajahName = ''
        
        for (let i = 0; i < this.ajahs.length; i ++) {
            ajahName += i + `) ` + this.ajahs[i].name + '\n'
        }
        alert(ajahName)
    }

    createAesSedai
} 
