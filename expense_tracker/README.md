# 💰 Expense Tracker

Application de suivi des dépenses et revenus avec calcul automatique du solde.

## 📋 Description

Un gestionnaire de transactions simple et efficace pour suivre vos revenus et dépenses. Chaque transaction est ajoutée via un formulaire, et l'application calcule automatiquement le solde total, les revenus totaux et les dépenses totales.

## ✨ Fonctionnalités

- ✅ Ajouter des transactions (revenus positifs, dépenses négatives)
- ✅ Calcul automatique du solde total
- ✅ Affichage des résumés (revenus/dépenses totales)
- ✅ Liste des transactions avec descriptions
- ✅ Interface responsive et moderne
- ✅ Validation du formulaire

## 🚀 Comment Utiliser

1. Ouvrez `index.html` dans votre navigateur
2. Remplissez le formulaire "Add Transaction" :
   - **Description** : Libellé de la transaction (ex: "Salaire", "Épicerie")
   - **Amount** : Montant (positif pour revenu, négatif pour dépense)
3. Cliquez sur **"Add Transaction"**
4. Votre transaction apparaît dans la liste et les soldes se mettent à jour

## 📐 Structure du Code

### HTML Structure
```html
<!-- Affichage du solde -->
<div class="balance-container">
  <h2>Your Balance</h2>
  <h2 id="balance">$0.00</h2>
  <div class="summary">
    <div class="income">
      <h3>Incomes</h3>
      <p id="income-amount">$0.00</p>
    </div>
    <div class="expense">
      <h3>Expenses</h3>
      <p id="expense-amount">$0.00</p>
    </div>
  </div>
</div>

<!-- Liste des transactions -->
<ul id="transaction-list">
  <!-- Transactions dynamiques -->
</ul>

<!-- Formulaire -->
<form id="transaction-form">
  <div class="form-group">
    <label for="description">Description</label>
    <input type="text" id="description" required>
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="number" id="amount" required>
    <small>Use negative(-) for expenses</small>
  </div>
  <button type="submit">Add Transaction</button>
</form>
```

### JavaScript Logique

```javascript
// État des transactions
let transactions = [];

// Écouter la soumission du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  
  // Créer la transaction
  const transaction = {
    id: Date.now(),
    description,
    amount
  };
  
  transactions.push(transaction);
  updateDisplay();
  form.reset();
});

// Mettre à jour l'affichage
function updateDisplay() {
  updateBalance();
  displayTransactions();
}

// Calculer les soldes
function updateBalance() {
  const totalBalance = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalIncome = transactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);
  
  balanceDisplay.textContent = totalBalance.toFixed(2);
  incomeDisplay.textContent = totalIncome.toFixed(2);
  expenseDisplay.textContent = Math.abs(totalExpense).toFixed(2);
}

// Afficher les transactions
function displayTransactions() {
  transactionList.innerHTML = '';
  
  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${transaction.description}</span>
      <span class="${transaction.amount > 0 ? 'income' : 'expense'}">
        ${transaction.amount > 0 ? '+' : ''}$${Math.abs(transaction.amount).toFixed(2)}
      </span>
    `;
    transactionList.appendChild(li);
  });
}
```

## 📐 Technologie Utilisée

| Technologie | Utilisation |
|------------|------------|
| HTML5 | Structure, formulaires |
| CSS3 | Mise en page, thème |
| JavaScript ES6+ | Gestion des données, calculs |
| Google Fonts | Typographie (Poppins) |

## 🎯 Apprentissages Clés

### Concepts JavaScript
- **Array Methods** : `push()`, `filter()`, `reduce()`
- **Événements** : `submit`, gestion du formulaire
- **DOM Manipulation** : Création/modification d'éléments
- **Calculs** : Sommes, moyennes, filtrage
- **Format** : `toFixed()` pour les décimales
- **Validation** : Formulaires HTML5

### Calculs Effectués

```javascript
// Balance = Revenus - Dépenses
Total Balance = Sum(all amounts)

// Revenus = Somme des montants positifs
Total Income = Sum(amounts > 0)

// Dépenses = Somme des montants négatifs (affichés en positif)
Total Expense = Abs(Sum(amounts < 0))
```

## 📱 Compatibilité

- Chrome/Edge 60+
- Firefox 55+
- Safari 11+
- Opera 47+

## 💡 Format d'Entrée

### Revenus
- Entrée positive : `+500` ou `500`
- Affichage : `+$500.00`

### Dépenses
- Entrée négative : `-50`
- Affichage : `-$50.00`

## 🚀 Améliorations Futures

- [ ] Sauvegarde locale (localStorage)
- [ ] Suppression de transactions
- [ ] Édition de transactions
- [ ] Catégories de transactions
- [ ] Filtrage par date
- [ ] Export CSV
- [ ] Graphiques (Chart.js)
- [ ] Mode sombre/clair
- [ ] Synchronisation en ligne (Firebase)
- [ ] Rapports mensuels

## 🎨 Personnalisation

### Modifier la Devise

```javascript
// Changer $ en € 
function formatCurrency(amount) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}
```

### Ajouter une Catégorie

```javascript
const transaction = {
  id: Date.now(),
  description,
  amount,
  category: 'Food'  // Ajout
};
```

### Couleurs Personnalisées

Modifiez les classes CSS dans `styles.css` pour les revenus/dépenses

## 🐛 Dépannage

**Q: Les montants ne se calculent pas correctement**
- R: Vérifiez que `parseFloat()` convertit bien en nombre
- Assurez-vous que les négatifs commencent par `-`

**Q: Les montants ne s'affichent pas en dollars**
- R: Vérifiez les méthodes de formatage et `toFixed(2)`

**Q: Les transactions disparaissent au rechargement**
- R: C'est normal sans localStorage. Voir améliorations futures.

## 💰 Cas d'Usage

- ✅ Budget personnel
- ✅ Suivi des dépenses mensuelles
- ✅ Gestion de petits projets
- ✅ Entraînement à la programmation
- ✅ Prototype d'application financière

## 📚 Ressources

- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

## 🔐 Sécurité

- ⚠️ Cette application est une démo. Pas de chiffrement ou d'authentification.
- ⚠️ Ne pas utiliser pour des données financières réelles sans sécurisation.
- ✅ Validation basique du formulaire présente.

## 📄 Licence

MIT - Libre d'utilisation et de modification

---

**Créé par** : Modou Niane  
**Basé sur** : FreeCodeCamp Tutorials  
**Devise** : USD (modifiable)
