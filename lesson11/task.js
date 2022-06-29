// Цветочница. Определить иерархию цветов. Создать несколько объектов-цветов. 
// Собрать букет с определением его стоимости.

class Plant {
    constructor(color, smell, height, cost) {
        this.color = color;
        this.smell = smell;
        this.height = height;
        this.cost = cost;
        this.numberOfDifferencePlant = 0;
    }

    bloom() {
        console.log('This plant is blooming');
    }

    numberOfDifferencePlant() {
        numberOfDifferencePlant++;
    }
}

class Flower extends Plant {
    constructor(color, smell, height, cost, sizeOfBut) {
        super(color, smell, height, cost);
        this.sizeOfBut = sizeOfBut;
    }

}

class Pion extends Flower {
    constructor(color, smell, height, cost, sizeOfBut) {
        super(color, smell, height, cost, sizeOfBut);
        this.type = 'pyon';
    }
}

class Romashka extends Flower {
    constructor(color, smell, height, cost, sizeOfBut) {
        super(color, smell, height, cost, sizeOfBut);
        this.type = 'romashka';
    }
}

class Vasylek extends Flower {
    constructor(color, smell, height, cost, sizeOfBut) {
        super(color, smell, height, cost, sizeOfBut);
        this.type = 'vasylek';
    }
}

class Grass extends Plant {
    constructor(color, smell, height, cost, type, density) {
        super(color, smell, height, cost);
        this.type = type;
        this.density = density;
    }
}

class Flowerbed {
    constructor() {
        this.numberOfPlants = 0;
        this.price = 0;
        this.flowers = [];
        // this.romashka = new Romashka('white', 'uhhh', 'middle', 5, 'big');
        // this.vasylek = new Vasylek('blue', 'wahwahwah', 'little', 13, 'small');
        // this.pion = new Pion('grey', 'wuhwuh', 'big', 21, 'middle');
        // this.grass = new Romashka('green', null, 'big', 1, null);
    }

    addPlant() {
        this.numberOfPlants++;
    }

    addPrice(plantPrice) {
        this.price += plantPrice;
    }

    getPrice() {
        return this.price;
    }

    getNumberOfPlants() {
        return this.numberOfPlants;
    }

    addFlower(flower) {
        console.log(flower)
        this.addPlant();
        this.flowers.push(flower)
        this.addPrice(flower.cost);
        // this.flower.numberOfDifferencePlant();
    }

    addGrass() {
        this.addPlant();
        this.addPrice(this.grass.cost);
        //this['grass'].numberOfDifferencePlant();
    }
}

const flowerbed = new Flowerbed();

// flowerbed.addGrass();
flowerbed.addFlower(new Romashka("red", "", 3, 10, ""));
flowerbed.addFlower(new Vasylek("red", "", 3, 20, ""));
flowerbed.addFlower(new Pion("red", "", 3, 30, ""));
flowerbed.addFlower(new Pion("red", "", 3, 30, ""));
//
// flowerbed.addFlower('romashka');
// flowerbed.addFlower('romashka');
// flowerbed.addFlower('vasylek');
// flowerbed.addFlower('pion');

console.log(flowerbed);
console.log(flowerbed.getPrice());
console.log(flowerbed.getNumberOfPlants());
