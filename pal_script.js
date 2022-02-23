// >:]


//Cherche les valeurs que l'on va utiliser plus tard
let objtxt = document.getElementById("IDentree")
let objbutton = document.getElementById("btnvalider")

function inverser(chaineC) {
    let chaineInv = ""

    //retire les espaces et accents et la ponctuation // ICI C'EST JUSTE POUR QUE LE MACHIN FONCTIONNE DE LUI MEME SINON C'EST OSEF
    //au passage c'est egalement le seul morceau de code que j'ai pompé sur internet
    chaineC = chaineC.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    chaineC = chaineC.replace(/\s/g, '')
    chaineC = chaineC.replace(/[.,\/#!$%\^&\*;:{"'}=\-_`~()]/g, "")
    //met en minuscule
    chaineC = chaineC.toLowerCase()


    //console.log(chaineC.length) //DEBUG

    //inverse la chaine
    for (let i = (chaineC.length) - 1; i >= 0; i--) {
        chaineInv = chaineInv + chaineC[i]
        //console.log(chaineInv)   //DEBUG
    }
    return chaineInv
}

function Comparer(chaineC) {

    //retire les espaces et accents et la pontuation et les majuscules
    let chaineC2 = chaineC.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    chaineC2 = chaineC2.replace(/\s/g, '')
    chaineC2 = chaineC2.replace(/[.,\/#!$%\^&\*;:{'}=\-"_`~()]/g, "")
    chaineC2 = chaineC2.toLowerCase()
    console.log(chaineC2) // DEBUG

    let objremarque = document.getElementById("remarque")

    //EXECUTE LA FONCTION INVERSER
    let chaineinv = inverser(chaineC2)
    console.log(chaineinv)
    //ICI c'est la comparaison des 2 string (si c pareil c bien sinon c nul)
    // NOTE: ca change aussi le texte
    if (chaineinv == chaineC2) {
        console.log("palindrome") //DEBUG
        objremarque.innerHTML = "''" + chaineC + "'' est un palindrome."
    }
    else {
        console.log("pas palindrome") //DEBUG
        objremarque.innerHTML = "''" + chaineC + "'' n'est pas un palindrome."
    }
}
//LE truc pour que le bouton fasse des trucs
objbutton.addEventListener("click", function () { Comparer(objtxt.value) })
// >:]
