var outfit = {
    hat : "baseball cap",
    shirt : "Hawaiian shirt",
    pants : "cargo shorts",
    shoes : "flip-flops"
}
for (var penguin in penguins) {
    penguin["outFit"] = outfit;
}
var penguins = [gunter , ramon , fred, myPenguin];
var foods =["pizza","burger","pasta","takos"];
for (var penguin in penguins){
    penguinHatType = penguin["outFit"].hat;
}
for (var penguin in penguins) {
    penguin["outFit"].accessory = "pocket watch";
}
for (var penguin in  penguins) {
    penguin["outfit"].hat = "top hat";
}
for (var penguin in penguins) {
    delete penguin["outFit"].pants;
}
for (var penguin in penguins) {
    console.log(`${penguins[penguin].outFit}`);
}
