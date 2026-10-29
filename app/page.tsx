const LIEN_PAIEMENT = "https://buy.stripe.com/REMPLACER";
const EMAIL = "REMPLACER@email.com";

const faq = [
  {
    q: "Est-ce que ça marche pour mon cas ?",
    r: "Si vous gérez les réseaux de clients facturés au mois, oui. Vous saisissez vos chiffres, le bilan est mis en page pour vous.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Environ une minute par client et par mois. Le reste est automatique.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Vous résiliez quand vous voulez, en un message. Dans les 14 premiers jours, vous êtes remboursé sur simple demande.",
  },
  {
    q: "À quoi sert ce que je paie ?",
    r: "À l'accès à Chaque Mois : saisie des chiffres, bilan à vos couleurs, envoi le 1er du mois, accusé de lecture. Les premiers abonnés reçoivent la première version sous 14 jours.",
  },
];

function Bouton() {
  return (
    
