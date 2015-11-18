var initHour = Number(prompt("Saisir l'heure: "));
var initMinute = Number(prompt("Saisir les minutes: "));
var initSeconde = Number(prompt("Saisir les secondes: "));

if (initHour >= 24 || initMinute > 59 || initSeconde > 59)
    {
        cosole.log("Erreure de saisie");
    }
else
    {
        if(initSeconde == "59")
            {
                initSeconde = "00";
                initMinute += 1;
                if(initMinute >= "59")
                    {
                        initMinute = "00";
                        initHour +=1;
                        if (initHour == "23")
                            {
                                initHour = "00";
                            }
                    }
            }
        else
            {
                initSeconde += 1;
            }       
        console.log("Il sera une seconde plus tard: " + initHour + "H" + initMinute + ":" + initSeconde);
    }