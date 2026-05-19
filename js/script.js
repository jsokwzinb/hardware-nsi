function verifierReponse() {
    const options = document.getElementsByName('hardware-quiz');
    let reponseSelectionnee = null;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            reponseSelectionnee = options[i].value;
            break;
        }
    }

    const resultatDiv = document.getElementById('resultat');

    if (!reponseSelectionnee) {
        resultatDiv.innerHTML = "⚠️ Veuillez sélectionner une réponse avant de valider.";
        resultatDiv.style.color = "#fbbf24"; 
        return;
    }

    if (reponseSelectionnee === "vrai") {
        resultatDiv.innerHTML = "✅ Bonne réponse ! La RAM est bien une mémoire volatile qui s'efface à l'extinction.";
        resultatDiv.style.color = "#10b981"; 
    } else {
        resultatDiv.innerHTML = "❌ Mauvaise réponse. Indice : Le SSD garde les données, pas la RAM.";
        resultatDiv.style.color = "#ef4444"; 
    }
}