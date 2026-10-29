
const LIEN_PAIEMENT = "https://buy.stripe.com/dRm00l5Z23lH2sU4XxbII00";
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
    <a
      href={LIEN_PAIEMENT}
      className="block w-full rounded-xl bg-corail px-6 py-4 text-center text-lg font-semibold text-white active:opacity-90"
    >
      Réserver mon accès à 39 €/mois
    </a>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-md px-5 pb-16 pt-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-sapin">
        Chaque Mois
      </p>
      <h1 className="mt-4 font-titre text-4xl font-bold leading-tight">
        Le bilan de vos clients, envoyé sans y penser.
      </h1>
      <p className="mt-4 text-lg">
        Vous saisissez vos chiffres en une minute. Le bilan part tout seul le
        1er du mois, à vos couleurs.
      </p>

      <div className="mt-6">
        <Bouton />
        <p className="mt-2 text-center text-sm">
          Sans engagement, résiliable à tout moment
        </p>
      </div>

      <section className="mt-12 rounded-xl border border-trait bg-white p-5">
        <h2 className="font-titre text-2xl font-bold">
          Le bilan à la main, c&apos;est 7 h 30 par mois
        </h2>
        <p className="mt-3">
          Un bilan fait à la main prend environ 45 minutes. Avec 10 clients, ça
          fait 7 h 30 chaque mois. Et un client qui ne voit pas ce qu&apos;il a
          obtenu finit par arrêter le contrat.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-titre text-2xl font-bold">Ce que vous gagnez</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <strong className="text-sapin">Une minute par client.</strong>{" "}
            Vous saisissez les chiffres du mois, c&apos;est tout.
          </li>
          <li>
            <strong className="text-sapin">Un rapport à vos couleurs.</strong>{" "}
            Mis en page automatiquement, prêt à être lu.
          </li>
          <li>
            <strong className="text-sapin">Un envoi sans y penser.</strong>{" "}
            Le 1er de chaque mois, avec accusé de lecture.
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl bg-sapin p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-widest">
          Accès fondateur
        </p>
        <p className="mt-2 font-titre text-5xl font-bold">
          39 €<span className="text-xl font-normal"> /mois</span>
        </p>
        <p className="mt-1">
          Soit 1,30 € par jour, pour jusqu&apos;à 10 clients suivis.
        </p>
        <div className="mt-5 rounded-lg bg-white/10 p-4 text-sm">
          <strong>Satisfait ou remboursé, 14 jours.</strong> Écrivez à {EMAIL}{" "}
          dans les 14 jours suivant votre paiement : vous êtes remboursé
          intégralement sous 5 jours ouvrés, sans justification.
        </div>
        <div className="mt-5">
          <Bouton />
          <p className="mt-2 text-center text-sm">
            Sans engagement, résiliable à tout moment
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-titre text-2xl font-bold">Questions fréquentes</h2>
        <div className="mt-4 divide-y divide-trait">
          {faq.map((item) => (
            <div key={item.q} className="py-4">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="mt-1">{item.r}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-trait pt-4 text-center text-sm">
        Chaque Mois · Contact : {EMAIL}
      </footer>
    </main>
  );
}

    
