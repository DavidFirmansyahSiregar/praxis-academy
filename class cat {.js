class cat { 
    constructor(tiredness, hunger, lonelines, happiness){
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = hapiiness
    }
}
cat.prototype.increase = function(){
    return '$(this.happiness) pet the cat'
}
cat.prototype.paws = function(){
    return '$(this.hunger) the cat is really hungry'
}
cat.prototype.paws = function(){
    return '$(this.happiness) the cat is very happy'
}
function arbitary(){
    // if(" + " + this.happiness, arbitrary++);
    // return '$(this.happiness)';
    // else(" + " + this.loneliness, arbitrary--);
    // return '$(this loneliness)';
    if (feed) {
        return '$(this.hunger)';
    } else if (sleep){
        return '$(this.tiredness)';
    } else if (pet){
        return '$(this.happiness)';
    } else {
        return '$(this.loneliness)';
    }
}

