// class animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//         this.medicaReport = {
//             bloodType: '',
//             preExitConditions: '',
//             paraplegic: false
//         }
//     }

//     getMedicalReport() {

//         return this.medicaReport
//     }

//     giveBirth(...babies) {
//         console.log(babies.length);
//         for (const baby of babies) {
//             this.children.push(baby)
//         }
//         console.log(this.children);
//     }

// }

// const Cat = new animal('cat', 4)
// const medicalReportCat = Cat.getMedicalReport()
// console.log(medicalReportCat);
// Cat.giveBirth('julie', 'jul', 'nana')




// class Human {
//     constructor(name, age, isFreindly) {
//         this.name = name
//         this.age = age
//         this.isFreindly = isFreindly
//     }

//     getHumanInfo() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`he is ${this.isFreindly}ly a good friend`);

//     }

// }

// const human = new Human('Rami', 30, false)
// human.getHumanInfo()





// class Vehicle {
//     constructor(x, y, speed, fuel) {
//         this.x = x
//         this.y = y
//         this._speed
//         this._fuel
//         Vehicle.carsSold++
//     }

//     set fuel(fuel){
//         if(fuel<0 || fuel>150){
//             return console.log('fuel must be between 0 and 150');
//         }
//         this._fuel= fuel
//     }
//     get fuel(){
//         return this._fuel
//     }

//     static getInfo() {
//         console.log(`we've sold ${Vehicle.carsSold} cars.`);
//     }

//     static calculateMoney() {
//         console.log(Vehicle.carsSold * 30000);
//     }
//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("speed must be positive number");
//         }
//         this._speed = speed
//     }
//     get speed() {
//         return this._speed
//     }

// }
// Vehicle.carsSold = 0
// const mercedes = new Vehicle('', '', 200)
// const VW = new Vehicle('', '', 200)
// const Audi = new Vehicle('', '', -2)
// Vehicle.getInfo()
// Vehicle.calculateMoney()
// Audi.speed=5
// Audi.fuel=4

// console.log(Audi.speed);
// console.log(Audi.fuel);






class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        animal.forEach(a => {
            this.animals.push(a)
            console.log("Added " + a.name + " to the zoo")
        
        })
        
      
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name+" has "+a.numLegs+" legs."))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat = [new Animal("Puss", 4),new Animal("boots", 2),new Animal("julie", 3),new Animal("angie", 6)]
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"
