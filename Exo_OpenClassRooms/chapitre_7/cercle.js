var rayonUser = Number(prompt("Veuillez saisir le rayon du cercle"));

var cercle ={
    rayon: rayonUser,
    perimetre:function()
    {
        return(2*this.rayon*Math.PI);
    },
    aire:function()
    {
        return(this.rayon*this.rayon*Math.PI);
    } 
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());