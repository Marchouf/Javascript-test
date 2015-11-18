// TODO : écrire la fonction calculer()
function calculer(value1, operator, value2)
{
    switch (operator)
        {
            case "+":
                return(value1 + value2);
            break;
            case "-":
                return(value1 - value2);
            break;
            case "*":
                return(value1 * value2);
            break;
            case "/":
                return(value1 / value2);
            break;
        }
        
    
}


console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity