# 🎨 Color Palette Generator

Générateur de palettes de couleurs aléatoires avec copie facile au presse-papiers.

## 📋 Description

Ce projet génère des palettes de 5 couleurs aléatoires. Chaque couleur peut être copiée individuellement au presse-papiers en cliquant sur le code HEX ou l'icône de copie. Parfait pour les designers et développeurs à la recherche d'inspiration couleur.

## ✨ Fonctionnalités

- ✅ Génération automatique de palettes de 5 couleurs
- ✅ Affichage des codes HEX pour chaque couleur
- ✅ Copie au presse-papiers avec un clic
- ✅ Feedback visuel lors de la copie (transition icône ✓)
- ✅ Interface responsive et moderne
- ✅ Utilisation de Font Awesome pour les icônes

## 🚀 Comment Utiliser

1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur le bouton **"Generate Palette"** pour générer une nouvelle palette
3. Cliquez sur :
   - L'icône de copie 📋 pour copier le code HEX
   - Ou directement sur la couleur pour copier son code

## 🛠️ Structure du Code

### HTML
```html
<div class="palette-container">
  <div class="color-box">
    <div class="color"></div>
    <div class="color-info">
      <span class="hex-value">#XXXXXX</span>
      <i class="far fa-copy copy-btn"></i>
    </div>
  </div>
</div>
```

### JavaScript Principal

```javascript
// Générer une couleur aléatoire en HEX
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Copier au presse-papiers
navigator.clipboard.writeText(hexValue)
  .then(() => showCopySuccess(element))
  .catch((err) => console.error(err));
```

## 📐 Technologie Utilisée

| Technologie | Utilisation |
|------------|------------|
| HTML5 | Structure |
| CSS3 | Mise en page, animations |
| JavaScript ES6+ | Génération, gestion des événements |
| Font Awesome 7 | Icônes |

## 🎯 Apprentissages Clés

- **Génération aléatoire** : Math.random() et manipulation de chaînes
- **Clipboard API** : `navigator.clipboard.writeText()`
- **Event Delegation** : Gestion des événements sur un conteneur parent
- **DOM Manipulation** : Sélection et modification des éléments
- **Feedback UX** : Animations et transitions visuelles

## 📱 Compatibilité

- Chrome/Edge 90+
- Firefox 88+
- Safari 13.1+
- Opera 76+

⚠️ **Note** : La Clipboard API nécessite HTTPS ou localhost

## 🎨 Personnalisation

### Changer le nombre de couleurs
Modifiez la boucle dans `generatePalette()` :
```javascript
function generatePalette() {
  const colors = [];
  for(let i = 0; i < 5; i++) {  // Changer ici
    colors.push(generateRandomColor());
  }
  updatePaletteDisplay(colors);
}
```

### Ajouter des options de copie
Générer d'autres formats (RGB, HSL) :
```javascript
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}
```

## 🚀 Améliorations Futures

- [ ] Ajouter des palettes prédéfinies
- [ ] Exporter en JSON/CSS
- [ ] Mode sombre/clair
- [ ] Partager sur les réseaux sociaux
- [ ] Historique des palettes
- [ ] Verrouiller certaines couleurs
- [ ] Filtrer par teinte/saturation

## 🐛 Dépannage

**Q: La copie ne fonctionne pas**
- R: Vérifiez que vous utilisez HTTPS ou localhost
- Certains navigateurs nécessitent une permission

**Q: Les couleurs sont toujours les mêmes**
- R: C'est normal ! Les couleurs sont générées aléatoirement. Appuyez plusieurs fois.

## 📚 Ressources

- [MDN - Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [Font Awesome Icons](https://fontawesome.com/)
- [CSS Gradient Generator](https://cssgradient.io/)

## 📄 Licence

MIT - Libre d'utilisation et de modification

---

**Créé par** : Modou Niane  
**Basé sur** : FreeCodeCamp Tutorials
