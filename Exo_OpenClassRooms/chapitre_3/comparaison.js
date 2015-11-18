var number1 = prompt("Saisir le premier nombre: ");
var number2 = prompt("Saisir le deuxième nombre: ");


if (number1 && number2)
    {
        if (number1 > number2)
            {
                console.log("number1 est plus grand que le number2");    
            }
        else if (number1 < number2)
            {
                console.log("number1 est plus petit que le number2");
            }
        else if (number1 = number2)
            {
                console.log("number1 est égal à number2");
            }
    }
else
    {
        console.log("Merci de recommencer!!");
    }