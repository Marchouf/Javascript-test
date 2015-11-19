var chien = {
  nom: "Crokdur",
  race: "matîn de Naples",
  taille: "75",
    
    aboyer: function()
    {
     return("Grr ! Grrr !");
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());