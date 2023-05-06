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
        this.aesSedais = []
    }

    addAesSedai(aesSedai) {
        if (aesSedai instanceof AesSedai) {
            this.aesSedais.push(aesSedai)
        } else {
            throw new Error(`You may only create a new Aes Sedai. ${aesSedai} can not channel the One Source.`)
        }
    }

    describe() {
        return `${this.aesSedais.length} belong to the ${this.color} Ajah.`
    }
} 

class MenuApp {
    constructor() {
        this.ajahs = []
        this.chosenAjah = null
    }

    start() {
        let choice = this.showMainMenuChoices()
        
        while (choice != 0) {
            switch (choice) {
                case '1':
                    this.createAnAjah()
                    break
                case '2':
                    this.deleteAnAjah()
                    break
                case '3':
                    this.viewAnAjah()
                    break
                case '4':
                    this.viewAllAjahs()
                    break
                default:
                    choice = 0
            }
            choice = this.showMainMenuChoices()
        }
    alert('Go with the Light!')
    }

    showMainMenuChoices() {
        return prompt(`
            1. Create a New Ajah
            2. Delete an Ajah
            3. View an Ajah
            4. View All Ajahs
            0. Exit Application
        `)
    }

    showAjahMenuChoices(ajahInfo) {
        return prompt(`
            1. Create a New Aes Sedai
            2. Delete an Aes Sedai
            0. Return to Main Menu
            _________________________

            ${ajahInfo}
        `)
    }

    createAnAjah() {
        let color = prompt('Enter the color of a new Ajah: ')
        this.ajahs.push(new Ajah(color))
    }
    
    deleteAnAjah () {
        let index = prompt (`Enter the index of the Ajah you wish to delete: `)   
    }

    viewAnAjah() {
        let index = prompt(`Enter the index of the Ajah that you want to view: `)
        if (index > -1 && index < this.ajahs.length) {
            this.chosenAjah = this.ajahs[index]
            
            let ajahDescription = 'Ajah Color: ' + this.chosenAjah.color + '\n'
            
            ajahDescription += ' ' + this.chosenAjah.describe() + '\n '            
            
            for (let i = 0; i < this.chosenAjah.ajahs.length; i++) {
                ajahDescription += i + ') ' + this.chosenAjah.aesSedais[i].describe() + '\n';
            }
            
            let choice1 = this.showAesSedaiMenuOptions(ajahDescription);
            switch (choice1) {
                case '1' :
                this.createAesSedai();
                break;
                case '2' :
                this.deleteAesSedai();
            }
        }  // validate user input
    }
    
    viewAllAjahs() {
        let ajahColor = ''
        
        for (let i = 0; i < this.ajahs.length; i ++) {
            ajahColor += i + `) ` + this.ajahs[i].color + '\n'
        }
        
        alert(ajahColor)
    }

    createAesSedai() {
        let name = prompt(`Enter the name of your new Aes Sedai:`)
        let title = prompt(`Enter the title of your new Aes Sedai: `)
        let nationality = prompt(`Enter the nationality of your new Aes Sedai: `)
        let ajah = prompt(`Enter the Ajah your new Aes Sedai belongs to: `)

        this.chosenAjah.addAesSedai(new AesSedai(name, title, nationality, ajah))
    }

    deleteAesSedai() {
        let index = prompt(`Enter the index of the Aes Sedai you would like to delete: `)

        if (index > -1 && index < this.chosenAjah.aesSedais.length) {
            this.chosenAjah.aesSedais.splice(index, 1)
        }
    }
}
let menu = new MenuApp()
menu.start()
