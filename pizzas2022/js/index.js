// Récupération de la chaîne xml pour une table ou une vue spécifiée

xmlpizzas=remplirListe("pizzas","0","0");
// alert(xmlpizzas); 
afficheListe("listepizzas", xmlpizzas, "pizzas","numPizza", "nomPizza");

//Procédure qui remplit la liste déroulante
function remplirListe(nomtable,clef,valeur)
{
    xmlpizzas=getXmlBase(nomtable,clef,valeur)
    return xmlpizzas
}