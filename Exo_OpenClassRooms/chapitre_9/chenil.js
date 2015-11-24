var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var chien1 = Object.create(Chien);
chien1.init("Crokdur", "matin de naples", 75);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);

var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(chien1);
chenil.push(chien2);
chenil.push(chien3);

console.log("Le chenil héberge "+ chenil.length + " chien(s) :");


chenil.forEach(function (Chien) {
    console.log(Chien.nom + " est un " + Chien.race + " mesurant " + Chien.taille + " cm. " +
        "Il aboie : " + Chien.aboyer());
});