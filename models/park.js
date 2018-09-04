const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    let index = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(index, 1);
}

Park.prototype.findMostPopular = function(){
    let mostPopularDinosaur = this.collectionOfDinosaurs[0];
    for(let dinosaur of this.collectionOfDinosaurs){
        if(dinosaur.guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay){
            mostPopularDinosaur = dinosaur;
        }
    }
    return mostPopularDinosaur;
}

Park.prototype.findAllOfSpecies = function(species){
    let results = [];
    for(let dinosaur of this.collectionOfDinosaurs){
        if(dinosaur.species === species){
            results.push(dinosaur);
        }
    }
    return results;
}

Park.prototype.removeAllOfSpecies = function(species){
    let toBeRemoved = [];
    for(let dinosaur of this.collectionOfDinosaurs){
        if(dinosaur.species === species){
            toBeRemoved.push(dinosaur);
        }
    }
    for(let dinosaur of toBeRemoved){
        this.collectionOfDinosaurs.splice(this.collectionOfDinosaurs.indexOf(dinosaur), 1);
    }
}


Park.prototype.getDailyVisitors = function(){
    let total = 0;
    for(let dinosaur of this.collectionOfDinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.getYearlyVisitors = function(){
    return 364 * this.getDailyVisitors();
}

Park.prototype.getYearlyRevenue = function(){
    return this.ticketPrice * this.getYearlyVisitors();
}

// Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
// Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }

Park.prototype.getDinosaurTypes = function(){
    let dinosaurTypes = {};
    for(let dinosaur of this.collectionOfDinosaurs){
        dinosaurTypes[dinosaur.species] = 0;
    }
    for(let dinosaur of this.collectionOfDinosaurs){
        dinosaurTypes[dinosaur.species]++;
    }
    return dinosaurTypes;
}

module.exports = Park;