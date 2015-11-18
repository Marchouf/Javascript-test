var numberMulti = Number(prompt("Saisir le nombre de la table de multiplication :"));

var resultmulti;

for(i=1; i<= 10; i++)
    {
        resultmulti = numberMulti * i;
        console.log(numberMulti + " x " + i + " = " +  resultmulti);
    }