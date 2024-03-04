Carosello Autoplay
===
Riprendendo il carousel realizzato in passato  e con le Timeng Function rendete lo scroll automatico ogni 3 secondi.
Attenzione: dopo l’ultima slide deve riapparire la prima e così via
BONUS
Per evitare conflitti con lo scroll manuale, quando il mouse si trova sopra lo slider lo scroll automatico si interrompe per poi ripartire all’uscita del mouse

## Svolgimento
1. Creare una timing function che si ripete ogni 3 secondi con lo slide all'interno
2. Creare un'arrow function che si attiva al mouse enter e una al mouse leave, nella prima utilizzare un clearInterval per bloccare il timer e nella seconda fare un'altra arrow function con lo stesso setInterval.