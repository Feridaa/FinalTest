// ON GARDE CE DOCUMENT (DONC LE MODULE D'ENTRÉE)
// POUR DES CHOSES QUI VONT MODIFIER L'ETAT DE NOTRE APP

// Importation du module de couleur (color-convert)
import convert from "color-convert";

// Exemple de comment fonctionne la librairire "color-convert"
// let color = convert.hex.hsl("#ffffff");
//(console.log(color);)

// générer une palette de couleur avec une fonction, on lui passe un hex et on veut qu'il nous retourne un hsl
export const generateurPalette = (hex) => {
  // ici on creer un tableau vide dans le quel on va stocker toutes nos couleurs final
  const palette = [];

  //on dit que les deux première valeur hsl, seront stocker dans un tab car H et S vont jms changer
  let [h, s] = convert.hex.hsl(hex);

  //pour le L qui reste, on va faire une boule dessus pour changer la luminosité de 10 en 10
  for (let l = 0; l <= 100; l += 10) {
    // on stock à chaque fois le nouveau L avec les deux première H et S dans le tableau palette
    palette.push([h, s, l]);
  }

  console.log(palette);
  return palette;
};

// pour controler que la couleur saisir est bien une couleur et non une connerie, on fait un controle
// on va faire une regex qui fait tout le controle pour nous

export const isHex = (hex) => {
  return /^#[0-9A-F]{6}$/i.test(hex);
};
