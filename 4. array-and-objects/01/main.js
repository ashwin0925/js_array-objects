var foods =["pizza","burger","sandwich"];
var myPenguin = {
        name : "Pinto",
        canFly : false,
        favouriteFoods: "foods",
        firstFavFood : foods[1],
//        lastFavFood : myPenguin.favouriteFoods[favouriteFoods.length - 1],
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
console.log(myPenguin["favouriteFoods"][1]);
// myPenguin["favouriteFoods"].push("Biscuts");
console.log(myPenguin["favouriteFoods"].length);

for (i = 0; i<(myPenguin["favouriteFoods"].length);i++){
    console.log(myPenguin["favouriteFoods"][i]);
    }
