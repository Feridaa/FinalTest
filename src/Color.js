import { generateurPalette } from "./modules/utilis.js";
import convert from "color-convert";

// TOUJOURS EXPORTER CLASS
export class Color {
  // PROPRIETE PRIVE

  //dans notre cas, 3 propriétés
  #hsl;
  #hex;
  #element;

  //DU A CETTE INFO, ON SAIT QU'ON LUI PASSE QUE LE HSL
  //new Color([0,0,100]) => Color.#hex === "#ffffff"
  constructor(hsl) {
    this.#hsl = hsl;
    this.#hex = `#${convert.hsl.hex(this.#hsl)}`;
    this.#element = this.#generateurElementPalette();
  }

  #generateurElementPalette() {
    //****************CREER ELEMENT DIV DANS LE DOM ****************** */ <div>
    const colorElement = document.createElement("div");
    // ********************* Lui AJOUTER CALSSE "color"**************************************
    colorElement.classList.add("color");
    // ********************* AJOUTER ATTRIBUT de donnée "data-color"******************
    colorElement.dataset.color = this.#hex;
    // *********************** CHANGER COULEUR de fond de l'élément******************
    colorElement.style.backgroundColor = this.#hex;

    //****************** Crée un élément <p> ***************************
    const textElement = document.createElement("p");
    // Lui ajoute comme texte la valeur hexadécimale
    textElement.textContent = this.#hex;
    // Change la couleur du texte selon la luminosité de la couleur de fond
    textElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
    // *****************Ajoute l'élément <p> comme enfant du <div>*******************
    // appendChild = ajoute un élément à ma div
    colorElement.appendChild(textElement);

    //REMOVE DIV :
    //1) FAIRE QUERRYSELECORT
    //2).REMOVE

    // Retourne le <div>
    return colorElement;
  }

  /// vu que ma prorpiété élément est privé je suis obligé de faire l'affichage de ma div ici
  //prendre l'élément créer et l'insère dans le Dom
  //.appendChild permet de mettre un élément après un autre élément
  display(panneauDeCouleur) {
    // Ajoute this.#element comme enfant d'un élément parent passé en argument.
    panneauDeCouleur.appendChild(this.#element);
  }
}
