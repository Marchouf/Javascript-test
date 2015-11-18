var studentGrade = Number(prompt("Veuillez saisir la moyenne du candidat"));

if (studentGrade)
    {
        if (studentGrade >= 10 && studentGrade < 12)
            {
                console.log("Reçu!!");
            }
        else if (studentGrade >= 12)
            {
                console.log("Reçu avec mention!!");
            }
        else
            {
                console.log("Recalé");
            }
    }
else
    {
        console.log("Merci de recommencer!!");
    }