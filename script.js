let totalCal = 0;

function ajoutIngredient() {
    let ingredient = document.getElementById("food-select").value;

    let ingredientTab = {};
    ingredientTab['abricot'] = 'Abricot: 48 kcal pour 100g';
    ingredientTab['compote-de-pommes'] = 'Compote de pommes: 68 kcal pour 100g';
    ingredientTab['viande-hachee'] = 'Viande hachée: 250 kcal pour 100g';
    ingredientTab['chaource'] = 'Chaource: 292 kcal pour 100g';
    ingredientTab['oranges-sanguines'] = 'Oranges sanguines: 50 kcal pour 100g';

    let caloriesTab = {};
    caloriesTab['abricot'] = 48;
    caloriesTab['compote-de-pommes'] = 68;
    caloriesTab['viande-hachee'] = 250;
    caloriesTab['chaource'] = 292;
    caloriesTab['oranges-sanguines'] = 50;

    let ingredientChoisi = [];

    if (ingredient != '') {
        ingredientChoisi[ingredientChoisi.length] = ingredientTab[ingredient];
    } else {

    }

    
    for (let i = 0; i < ingredientChoisi.length; i++) {
        document.getElementById('affichage').innerText += ingredientChoisi;
        document.getElementById('affichage').innerText += "\n";

        totalCal += caloriesTab[ingredient];
    }
    document.getElementById('qt-total').innerText = "Quantité totale de calories : " + totalCal + " kcal";
}