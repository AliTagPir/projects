class Bag {
    constructor(weight) {
        if (!weight) {
            throw new Error("bag must have a weight")
        }

        this.weight = weight

    }
    overLimit(){
        if (weight<=30){
            return true
        }else {
            alert("Bag is over limit")
        }
        
    }

}

class Passenger {
    bags=[]
    constructor(passengerName,passportNo,seatNo){
        this.passengerName = passengerName
        this.passportNo = passportNo
        this.seatNo = seatNo
    }
    addBag(Bag){
        this.bags.push(Bags)
    }
    
    
    
}

const bob = new Passenger("Bob the Builder","PN49502","11B");
const bobsCabinBag = new Bag(9);
const bobsHullBag = new Bag(23);
if (!bobsCabinBag.overLimit){
    addBag(bobsCabinBag)
}

try {
    const bag = new Bag(16);
    //no error if we made it this far
} catch (Error) {
    console.log("whoops");
}
