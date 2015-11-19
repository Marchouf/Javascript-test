var compte ={
 titulaire:"Alex",
 solde:0,
 crediter:function(value)
 {
    this.solde += value;
 },
 debiter:function(value)
 {
    this.solde -= value;
 },
 decrire:function()
 {
    return("Tittulaire : " + this.titulaire + ", solde : " + this.solde + " euros");
 }
};


console.log(compte.decrire());
compte.crediter(200);
compte.debiter(150);
console.log(compte.decrire());