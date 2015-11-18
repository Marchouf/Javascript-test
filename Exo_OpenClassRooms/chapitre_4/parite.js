var userNumber = Number(prompt("Saisir un nombrer entre 1 et 10:"));

while ( userNumber  <= 10)
{
    if (userNumber % 2 === 0) 
    {
        console.log(userNumber + " est pair");
    }
    else
    {
        console.log(userNumber + " est impair");
    }
    userNumber++;
}