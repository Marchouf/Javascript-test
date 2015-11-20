var chien = {
  init: function(nom, race, taille)
    {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
  
    aboyer: function()
    {
        var bruit;
        if(this.taille<50)
        {
            bruit = "Grrr ! Grrr !";
        }
        else
        {
            bruit = "Kaii ! Kaii !";
        }
     return(bruit);
    }
};

var crokdur = Object.create(chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());