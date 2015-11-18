var rayonUser = Number(prompt("Veuillez saisir le rayon du cercle"));

function perimetre(value)
{
    return(2*value*Math.PI);
}

function aire(value)
{
    return(value*value*Math.PI);
}

console.log(perimetre(rayonUser));
console.log(aire(rayonUser));