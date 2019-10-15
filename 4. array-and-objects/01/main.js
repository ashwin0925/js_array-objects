var foods =["pizza","burger","sandwich"];
var myPenguin = {
        name : "Pinto",
        canFly : false,
        frvFoods: "foods",
        firstFavFood : foods[1],
//        lastFavFood : myPenguin.favouriteFoods[frvFoods.length - 1],
        sayHello : function sayHello(){
            return (`Hello, I'm a penguin and my name is ${myPenguin.penguin.name}!`);
            },
        chirp : function chrip(){
           return  "CHIRP CHIRP! Is this what penguins sound like?";
             },
        fly : function fly(){
            if (canFly == true) {
                consloe.log("I can fly!");
            } else {
                console.log("No flying for me!");
            }
        }
      };
console.log(myPenguin["frvFoods"][1]);
// myPenguin["frvFoods"].push("Biscuts");
console.log(myPenguin["frvFoods"].length);

for (i = 0; i<(myPenguin["frvFoods"].length);i++){
    console.log(myPenguin["frvFoods"][i]);
    }
