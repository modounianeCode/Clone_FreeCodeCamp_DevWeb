# 📋 Drag And Drop - Kanban Board

Tableau Kanban simple et intuitif avec système de glisser-déposer (drag & drop) fonctionnel.

## 📋 Description

Un tableau Kanban classique avec trois colonnes (To Do, In Progress, Done) permettant de glisser-déposer les tâches entre les différents états. Idéal pour la gestion de projets simple et la compréhension de l'API Drag & Drop du HTML5.

## ✨ Fonctionnalités

- ✅ Trois colonnes de statut (To Do, In Progress, Done)
- ✅ Drag & Drop des cartes entre colonnes
- ✅ Feedback visuel lors du survol
- ✅ Tâches prédéfinies d'exemple
- ✅ Interface responsive et intuitive

## 🚀 Comment Utiliser

1. Ouvrez `index.html` dans votre navigateur
2. **Glissez** une carte d'une colonne à une autre
3. **Déposez** la carte dans la colonne cible
4. La carte se repositionne automatiquement

## 🛠️ Structure du Code

### HTML Structure
```html
<div class="board">
  <!-- Colonne 1: To Do -->
  <div class="list" id="list1">
    <h2>To Do</h2>
    <div class="card" draggable="true" id="card1">Wash Dishes</div>
    <div class="card" draggable="true" id="card2">Buy Groceries</div>
  </div>
  
  <!-- Colonne 2: In Progress -->
  <div class="list" id="list2">
    <h2>In Progress</h2>
    <div class="card" draggable="true" id="card4">Buy iphone XR</div>
  </div>
  
  <!-- Colonne 3: Done -->
  <div class="list" id="list3">
    <h2>Done</h2>
    <div class="card" id="card5" draggable="true">Buy iphone XR</div>
  </div>
</div>
```

### JavaScript - Drag & Drop API

```javascript
const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

// Événements pour les cartes (source)
card.addEventListener("dragstart", dragStart);   // Début du drag
card.addEventListener("dragend", dragEnd);       // Fin du drag

// Événements pour les colonnes (cible)
list.addEventListener("dragover", dragOver);    // Au-dessus de la zone
list.addEventListener("dragenter", dragEnter);  // Entrée dans la zone
list.addEventListener("dragleave", dragLeave);  // Sortie de la zone
list.addEventListener("drop", dragDrop);        // Dépôt
```

### Fonctions Clés

```javascript
function dragStart(e) {
  // Stocke l'ID de l'élément en cours de déplacement
  e.dataTransfer.setData("text/plain", this.id);
}

function dragOver(e) {
  // Permet le drop
  e.preventDefault();
}

function dragDrop(e) {
  // Récupère l'ID et déplace l'élément
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  this.appendChild(card);  // Ajoute la carte à la nouvelle colonne
}
```

## 📐 Technologie Utilisée

| Technologie | Utilisation |
|------------|------------|
| HTML5 | Structure, attribut `draggable` |
| CSS3 | Mise en page, transitions |
| JavaScript ES6+ | Drag & Drop API, DOM manipulation |

## 🎯 Apprentissages Clés

### Drag & Drop API
- **dragstart** : Début du drag
- **dragend** : Fin du drag
- **dragover** : Au-dessus d'une zone de drop
- **dragenter** : Entrée dans une zone de drop
- **dragleave** : Sortie d'une zone de drop
- **drop** : Dépôt effectué
- **dataTransfer** : Transfert de données pendant le drag

### Concepts JavaScript
- Event listeners sur plusieurs éléments
- Boucles `for...of`
- Manipulation du DOM avec `appendChild()`
- Classes CSS dynamiques

## 📱 Compatibilité

- Chrome/Edge 4+
- Firefox 3.6+
- Safari 3.1+
- Opera 12+
- IE 10+

## 🎨 Personnalisation

### Ajouter une nouvelle colonne
```javascript
// Dans le HTML
<div class="list" id="list4">
  <h2>Review</h2>
</div>

// Le JavaScript détectera automatiquement
```

### Ajouter des tâches d'exemple
```html
<div class="card" draggable="true" id="card6">Your Task Here</div>
```

### Styliser les cartes
Modifiez `styles.css` pour personnaliser :
```css
.card {
  background-color: #your-color;
  border: 2px solid #your-border;
  /* ... */
}
```

## 🚀 Améliorations Futures

- [ ] Sauvegarder l'état dans localStorage
- [ ] Ajouter/supprimer des tâches dynamiquement
- [ ] Dépôt sur une zone vide
- [ ] Animations de transition
- [ ] Mode édition des tâches
- [ ] Couleurs différentes par colonne
- [ ] Export CSV/JSON
- [ ] Undo/Redo

## 🐛 Dépannage

**Q: Je ne peux pas glisser les cartes**
- R: Assurez-vous que l'attribut `draggable="true"` est présent sur chaque carte

**Q: Les cartes ne restent pas dans la nouvelle colonne**
- R: Vérifiez que les event listeners sont correctement attachés aux colonnes (lists)

**Q: Le feedback visuel n'apparaît pas**
- R: Vérifiez les styles CSS pour la classe `.over`

## 💡 Cas d'Usage

- ✅ Gestion de projet agile
- ✅ Gestion des tâches personnelles
- ✅ Tableaux de bord
- ✅ Workflow visualisé
- ✅ CRM simple

## 📚 Ressources

- [MDN - HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [W3C - Drag and Drop Specification](https://html.spec.whatwg.org/multipage/dnd.html)
- [CSS Tricks - Drag and Drop](https://css-tricks.com/drag-and-drop-in-webkit-browsers/)

## 📄 Licence

MIT - Libre d'utilisation et de modification

---

**Créé par** : Modou Niane  
**Basé sur** : FreeCodeCamp Tutorials
