# 🎯 Quiz Game

Un jeu de quiz interactif et amusant construit avec HTML, CSS et JavaScript vanilla. Testez vos connaissances avec des questions variées et recevez un feedback instantané !

## 📋 Fonctionnalités

- ✅ **Interface intuitive** : Écran d'accueil, écran de quiz et écran de résultats
- ✅ **5 questions** : Variées (géographie, religions, politique, etc.)
- ✅ **Score en temps réel** : Suivi du score pendant le quiz
- ✅ **Barre de progression** : Visualisez votre progression
- ✅ **Feedback instantané** : Réponses correctes/incorrectes mises en évidence
- ✅ **Messages personnalisés** : Feedback basé sur votre score final
- ✅ **Responsive Design** : Fonctionne parfaitement sur mobile et desktop
- ✅ **Redémarrage rapide** : Rejouez autant de fois que vous le souhaitez

## 🚀 Comment démarrer

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)

### Installation
1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. Commencez à jouer ! 🎮

```bash
# Simplement ouvrir le fichier
open QUIZ-GAME/index.html
```

## 📁 Structure du projet

```
QUIZ-GAME/
├── index.html      # Structure HTML et mise en page
├── script.js       # Logique du quiz et gestion des événements
└── style.css       # Styles et design responsif
```

## 🎮 Comment jouer

1. **Écran d'accueil** : Cliquez sur "Start Quiz" pour commencer
2. **Questions** : Lisez chaque question et sélectionnez votre réponse
3. **Feedback** : La réponse correcte s'affiche en vert, les réponses incorrectes en rouge
4. **Résultats** : À la fin, voyez votre score et un message personnalisé
5. **Recommencer** : Cliquez sur "Restart Quiz" pour rejouer

## 📊 Système de notation

| Score | Message |
|-------|---------|
| 100% | Excellent work! 🌟 |
| 80-99% | Good job! 👏 |
| 60-79% | Better luck next time! 💪 |
| 40-59% | Keep practicing! 📚 |
| 0-39% | Don't give up! 🔄 |

## 🎨 Personnalisation

### Ajouter de nouvelles questions

Modifiez le tableau `quizQuestions` dans `script.js` :

```javascript
{
    question: "Votre question ici?",
    answers: [
        { text: "Réponse 1", correct: false },
        { text: "Réponse correcte", correct: true },
        { text: "Réponse 3", correct: false },
        { text: "Réponse 4", correct: false },
    ],
}
```

### Changer les couleurs

Modifiez les variables CSS dans `style.css` :

```css
:root {
    --bg-color-body: #f5efe6;    /* Couleur de fond */
    --font-color: #e86a33;       /* Couleur du texte principal */
}
```

## 🛠️ Technologies utilisées

- **HTML5** : Sémantique et structure
- **CSS3** : Flexbox, Grid, animations, responsive design
- **JavaScript (ES6)** : DOM manipulation, gestion d'événements, logique applicative

## 💡 Concepts JavaScript utilisés

- `classList` : Gestion dynamique des classes CSS
- `dataset` : Stockage de données personnalisées
- `Array.from()` : Conversion des collections en tableaux
- `setTimeout()` : Délais et animations
- `addEventListener()` : Gestion des événements utilisateur

## 🐛 Problèmes connus

- Aucun connu actuellement

## 🎯 Améliorations futures possibles

- [ ] Ajouter plus de catégories de questions
- [ ] Système de difficulté (facile, moyen, difficile)
- [ ] Sauvegarde des meilleurs scores
- [ ] Mode multijoueur
- [ ] Minuteur pour chaque question
- [ ] Banque de questions plus large avec mélange aléatoire
- [ ] Thème sombre/clair

## 📄 Licence

Ce projet est libre d'utilisation à des fins éducatives.

## 👨‍💻 Auteur

Créé comme projet d'apprentissage FreeCodeCamp

---

**Amusez-vous bien ! 🎉**
