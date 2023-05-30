class Vehicle{
    constructor(model){
        this.model= model
    }
    drive(){
        return this.model + ' drives'
    }
}
class Sedan extends Vehicle{
    constructor(model, backupCamera){
        super(model)
        this.backupCamera=backupCamera
    }
}           
class Suv extends Vehicle{
    constructor(model, offroadPackage){
        super(model)
        this.offroadPackage= offroadPackage
    }
}
class Truck extends Vehicle{
    constructor(model, towingCapacity){
        super(model)
        this.towingCapacity = towingCapacity
    }
}
class EVSedan extends Sedan{
    constructor(model){
        super(model)
    }
    recharge(){
        return this.model +' recharges'
    }
}
// let truck = new Truck('jord j-051', 5000)
// console.log(truck.towingCapacity)
// let sedan = new Sedan('jexus', true)
// console.log(sedan.drive())