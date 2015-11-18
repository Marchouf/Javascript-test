var userTxt = prompt("Veuillez saisir un mot:");

function compterNbVoyelles(value)
{
  var tmpTxt = userTxt.toLocaleLowerCase();
  var nbVoyelles = 0;
    for(i=0; i < tmpTxt.length; i++)
    {
        if (tmpTxt[i] == "a" || tmpTxt[i] == "e" || tmpTxt[i] == "i" || tmpTxt[i] == "o" || tmpTxt[i] == "u" || tmpTxt[i] == "y")
            {
                nbVoyelles += 1;
            }
    }
      return (nbVoyelles);
}


function inverser(value)
{
    var reverseTxt = "";
    for(i=value.length-1; i >= 0 ; i--)
    {
        reverseTxt += value[i];        
    }
    return(reverseTxt);
}


function palindrome(value1, value2)
{
    if(value1.toLowerCase() == value2.toLowerCase())
        {
            console.log("C'est un palindrome");
        }
    else
        {
            console.log("Ce n'est pas un palindrome");
        }
}

console.log("Le mot " + userTxt + " contient " + userTxt.length + " caratère(s)");
console.log("Il s'écrit en minuscules " + userTxt.toLowerCase() );
console.log("Il s'écrit en majuscules " + userTxt.toUpperCase() );
console.log("Il contient " + compterNbVoyelles(userTxt) + " voyelle(s) et " + (userTxt.length -compterNbVoyelles(userTxt)) + " consonne(s)" );
console.log("Il s'écrit à l'envers " + inverser(userTxt) );
palindrome(userTxt, inverser(userTxt));