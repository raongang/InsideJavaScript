function Duck() {}
 
Duck.prototype.swim = function() {
    console.log("swim!");
};
 
function BlackDuck() {}
 
BlackDuck.prototype = new Duck();
BlackDuck.prototype.fly = function() {
    console.log("fly!");
};
 
 
var blackDuck = new BlackDuck();

console.dir(blackDuck);
blackDuck.swim();
blackDuck.fly();
 



