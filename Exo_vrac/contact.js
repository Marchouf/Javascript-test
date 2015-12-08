var bob = {
    prenom: "Bob",
    nom: "Jones",
    telephone: "01 23 45 67 89",
    email: "bob.jones@exemple.com"
};

var mary = {
    prenom: "Mary",
    nom: "Johnson",
    telephone: "02 34 56 78 91",
    email: "mary.johnson@exemple.com"
};

var contacts = [bob, mary];

function affichePersonne(personne) {
    console.log(personne.prenom + " " + personne.nom);
}

function liste() {
	var longueurContacts = contacts.length;
	for (var i = 0; i < longueurContacts; i++) {
		affichePersonne(contacts[i]);
	}
}

function recherche(nom) {
    var longueurContacts = contacts.length;
    for (var i = 0; i < longueurContacts; i++) {
		if (contacts[i].nom === nom) {
		} else {
		    return false;
		};
	}
};


function ajout(prenom, nom, email, telephone){
    var longueurContacts = contacts.length;
    var personne = {
    prenom: prenom,
    nom: nom,
    telephone: telephone,
    email: email
    };
    
    contacts[longueurContacts] = personne;
};


ajout("john","smith", "john.smith@toto.fr", "0615984565");
liste();
