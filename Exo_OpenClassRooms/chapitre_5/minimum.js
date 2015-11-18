// TODO : écrire la fonction min()
function min(value1, value2)
{
    if (value1 < value2)
        {
            return(value1);
        }
    else if (value1 > value2)
        {
            return(value2);
        }
    else
        {
            return(value1);
        }
}


console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1