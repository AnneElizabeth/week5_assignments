// Anne Edmondson
// 2023-03-30-fe-mountain

/* I'm currently obsessed with the Wheel of Time fantasy series and am currently reading book 4 of 14. Please bear with my tie-in to the series. If you haven't read the books, an "Aes Sedai" is a type of witch and an "Ajah" is like the sorority or coven she belongs to. Each Ajah has a different color theme and a different mission in the series.*/

// class created as blueprint for new Aes Sedai

class AesSedai {
    constructor(name, ajah) {
        this.name = name
        this.nationality = nationality
    }
    
    describe() {
        return (`${this.name} Sedai's nationality is ${this.nationality}.`)
    }
}
// class created as blueprint for new Ajah

class Ajah {
    constructor(name) {
        this.name = name
        this.aesSedais = [] 
    }

// method for adding a new Aes Sedai, throws error if user entry is not an instance of the AesSedai class

    addAesSedai(aesSedai) {
        if (aesSedai instanceof AesSedai) {
            this.aesSedais.push(aesSedai)
        } else {
            throw new Error(`You may only add a new Aes Sedai. ${aesSedai} can not channel the One Source.`)
        }
    }

    describe() {
        return `The ${this.name} Ajah has ${this.aesSedais.length} Aes Sedai members.`
    }
} 

// this class drives the application, contains the core features and methods of the application.

class Menu {
    constructor() {
        this.ajahs = []
        this.chosenAjah = null
    }
// method that starts application
// code below follows the top-down development approach - build methods first then code them out with desired functionality

    start() {
        let option = this.showMainMenu()
 
        // this method retrieves user choice/entry and executes appropriate method based on their choice

        while (option != 0) {
            switch (option) {
                case '1':
                    this.createAjah()
                    break
                case '2':
                    this.deleteAjah()
                    break
                case '3':
                    this.viewAjah()
                    break
                case '4':
                    this.viewAllAjahs()
                    break
                default:
                    option = 0
            }
            option = this.showMainMenu()
        }
        alert(`Go with the Light!` )
    }
// modal that displays user choices

    showMainMenu() {
        return prompt(`
            0. Exit
            -------------------
            1. Create a New Ajah
            2. Delete an Ajah
            3. View an Ajah
            4. View All Ajahs
        `)
    }

    showSubMenu () {
        return prompt(`
            0. Return to Main Menu
            ----------------------    
            1. Create a New Aes Sedai
            2. Delete an Aes Sedai
            ----------------------
            
        `)
    }

 // method for creating new Ajah   
    createAjah() {
        let name = prompt('Enter the color of a new Ajah: ')
        this.ajahs.push(new Ajah(name))
    }

    //method for viewing details of each Ajah
    viewAjah() {
        let i = prompt('Enter the index of the Ajah you want to view: ')

        // user input validation
        if (i > -1 && i < this.ajahs.length) {
            this.chosenAjah = this.ajahs[i]
            let description = 'Ajah Color: ' + this.chosenAjah.name + '\n'
            
 //   build list of all Aes Sedai           
            
            for (let i = 0; i < this.chosenAjah.ajahs.length; i++) {
                description += i + ') ' + this.chosenAjah.aesSedais[i].name + ' - ' + this.chosenAjah.aesSedais[i].nationality + '\n'
            }
 // submenu of full menu           
            let option = this.showSubMenu(description)
            switch (option) {
                case '1' :
                this.createAesSedai()
                break
                case '2' :
                this.deleteAesSedai()
            }
        }
    }
 
  // iterates through array of Ajahs, displays name/color of each one
    viewAllAjahs() {   
        let ajahNames = ' '
        
        for (let i = 0; i < this.ajahs.length; i ++) {
            ajahNames += i + `) ` + this.ajahs[i].name + '\n'
        }       
        alert(ajahNames)
    }

    deleteAjah() {
        let i = prompt(`Enter the index of the Ajah to delete: `)

        // user input validation
        if (i > -1 && i < this.ajahs.length) {
            this.ajahs.splice(i, 1)
        }
    }

    createAesSedai() {
        let name = prompt(`Enter the name of a new Aes Sedai:`)
        let nationality = prompt(`Enter the nationality of your new Aes Sedai: `)

        this.chosenAjah.aesSedais.push(new AesSedai(name, nationality))
    }

    deleteAesSedai() {
        let i = prompt(`Enter the index of the Aes Sedai to delete: `)

        // user input validation
        if (i > -1 && i < this.chosenAjah.aesSedais.length) {
            this.chosenAjah.aesSedais.splice(i, 1)
        }
    }
}
let menu = new Menu()
menu.start()
