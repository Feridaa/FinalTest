"use strict";

import { generateurPalette, isHex } from "./modules/utilis";
import { Color } from "./Color";

//generateurPalette("#ffffff");

const form = document.querySelector("form");
const tousLesPannaux = document.querySelector("main");
const headerElement = document.querySelector("header");
// POUR ETRE PLUS PRECIS
//const input = document.querySelector("input[type='text']");

// on va créer une fonction qui va être le callback de notre Eventlisener et qui va ce déclancher dès que le form et submite
//on fait ca ici car c'est une manière plus propre de code en séparant la fonction du eventlistener

const miseEnForme = (e) => {
  // on élève le comportement par défaut de la page qui est d'effacer le code couleur entrer

  // **************ENLEVE LE REFRESH************************
  e.preventDefault();

  // ************ CHERCHER VALAUER SAISIE *******************

  // Méthode 1 : on peut le faire avec e.target mais aussi avec un querySelecot
  // const value = e.target.firstElemnetChild.value;

  // Méthode 2 : avec un querrySelecor
  const inputGuess = document.querySelector("input");
  const valeurSaisieUtilisateur = inputGuess.value;
  console.log(valeurSaisieUtilisateur);

  //condition pour controler si bien valeur hex
  if (isHex(valeurSaisieUtilisateur)) {
    // on sait qu'on va utiliser la valeur saise pour générer la palette de coueleur
    // on a créer la fonction generateurPalette dans utils qu'on va appeler ici
    const palette = generateurPalette(valeurSaisieUtilisateur);

    // il appelle sa fonction display color pour afficher les palettes
    displayColor(palette);
  } else {
    throw new Error("Ceci n'est pas une couleur");
  }
};

// AFFICHER TOUTES MES PALLETTES
const displayColor = (palette) => {
  //****************Pour reset le main une fois nouvelle saisie !! ********************
  tousLesPannaux.innerHTML = "";

  //pour chaque
  palette.forEach((couleur) => {
    //
    new Color(couleur).display(tousLesPannaux);
  });

  headerElement.classList.add("minimized");
};

//déclancher un événement lorsqu'un formulaire est soumis
form.addEventListener("submit", miseEnForme);
