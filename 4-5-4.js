class Device {
    constructor(name) {
        this.category = 'electric devices',
            this.name = name,
            this.pluggedIn = false,
            this.plugIn = function () {
                this.pluggedIn = true
            },
            this.plugOut = function () {
                this.pluggedIn = false
            }
    }
}


class KitchenDevice extends Device {
    constructor(name, watt) {
        super();
        this.name = name;
        this.watt = watt;

    }

    getWatt() {
        if (this.pluggedIn) {
            return this.watt
        } else {
            return 0
        }
    }
}


class KitchenLight extends Device {
    constructor(name, watt) {
        super();
        this.name = name;
        this.watt = watt;
    }

    getWatt() {
        if (this.pluggedIn) {
            return this.watt
        } else {
            return 0
        }
    }
}



const kitchenLamp1 = new KitchenLight('lamp_1', 60);
kitchenLamp1.plugIn();

const oven = new KitchenDevice('oven', 1000);
oven.plugIn();

console.log(kitchenLamp1.getWatt() + oven.getWatt())

