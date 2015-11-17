var myPriceHT = prompt("Entrez le prix ht");
var myTVA = 19.6/100;

var myPrice = (Number(myPriceHT) + Number(myPriceHT) * myTVA);

console.log("Le prix TTC est de " + myPrice + " euros");