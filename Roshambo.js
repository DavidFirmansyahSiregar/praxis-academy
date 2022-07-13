class player_1{
    constructor(rock1, paper1, scissor1){
        this.rock1 = rock;
        this.paper1 = paper;
        this.scissor1 = scissor;
    }
}
class player_2{
    constructor(rock2, paper2, scissor2){
        this.rock2 = rock;
        this.paper2 = paper;
        this.scissor2 = scissor;
    }
}
movelist1.prototype.rock = function(){
    return '(this.rock1) rock';
}
movelist1.prototype.paper = function(){
    return '(this.paper1) paper';
}
movelist1.prototype.scissor = function(){
    return '(this.scissor1) scissor';
}
movelist2.prototype.rock = function(){
    return '(this.rock2) rock';
}
movelist2.prototype.paper = function(){
    return '(this.paper2) paper';
}
movelist2.prototype.scissor = function(){
    return '(this.scissor2) scissor';
}
function condition(){
    if(win){
        "movelist1 > movelist2"
        (rock > scissor, paper > rock, scissor > paper);
        return;
    }
    else if(draw){
        "movelist1 == movelist2"
        (rock = rock, paper = paper, scissor = scissor);
        return;
    }
    else {
        "movelist1 < movelist2"
        (rock < paper, paper < scissor, scissor < rock);
        return;
    }
}