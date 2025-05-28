import React from 'react';

const About: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-slate-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">À propos de moi</h2>

      <p className="text-lg leading-relaxed mb-6 text-slate-300">
        Je suis <strong>Aristotle FANKAM</strong>, ingénieur chercheur passionné par l’innovation technologique appliquée à la santé, l’éducation et l’industrie.
        Mon profil allie rigueur scientifique, polyvalence technique et vision orientée impact, avec plus de <strong>5 ans d'expérience</strong> en informatique, électronique, et intelligence artificielle.
      </p>

      <p className="text-lg leading-relaxed mb-6 text-slate-300">
        Titulaire de deux Masters en <strong>Génie Électrique & Informatique Industrielle (GEII)</strong> et en <strong>Électronique, Électrotechnique & Automatique (EEA)</strong>, j’ai conçu plusieurs systèmes experts hybrides, combinant <strong>IA, deep learning, radiomique et automatisation</strong>, notamment pour la reconnaissance précoce de maladies comme Alzheimer ou les pathologies pulmonaires.
      </p>

      <p className="text-lg leading-relaxed mb-6 text-slate-300">
        En parallèle de mon activité de développement full stack, je suis également impliqué dans la <strong>formation universitaire</strong>, la gestion de projets techniques et le soutien aux initiatives éducatives et numériques en Afrique.
      </p>
      

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">Compétences principales</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-slate-300 text-sm">
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Deep Learning & Radiomics</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Systèmes experts & IA médicale</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">React, TypeScript, TailwindCSS</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Laravel, FastAPI, Django</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Maintenance & automatisation</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Électronique & systèmes embarqués</li>
        </ul>
      </div>

      <div className="mt-16">
  <h3 className="text-2xl font-semibold mb-8 text-white">Parcours chronologique</h3>

  <ol className="relative border-l border-cyan-600 ml-3">
    {/* ITEM 1 */}
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-medium text-cyan-400">2024 – Aujourd’hui</time>
      <h4 className="text-lg font-semibold text-white">Responsable IT & Enseignant</h4>
      <p className="text-slate-400">
        Université BIAST – Gestion IT, enseignement en IA, mathématiques, électrotechnique, projet.
      </p>
    </li>

    {/* ITEM 2 */}
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-medium text-cyan-400">2023 – 2024</time>
      <h4 className="text-lg font-semibold text-white">Développeur Full Stack & Conseiller</h4>
      <p className="text-slate-400">
        Stage chez Uni2grow (React, SpringBoot), conseiller d’orientation et animateur pédagogique.
      </p>
    </li>

    {/* ITEM 3 */}
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-medium text-cyan-400">2021 – 2024</time>
      <h4 className="text-lg font-semibold text-white">Masters EEA & GEII</h4>
      <p className="text-slate-400">
        Intelligence artificielle appliquée à la santé, systèmes experts hybrides, automatisation.
      </p>
    </li>

    {/* ITEM 4 */}
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-medium text-cyan-400">2017 – 2021</time>
      <h4 className="text-lg font-semibold text-white">Licence en Mathématiques Appliquées</h4>
      <p className="text-slate-400">Université de Dschang – Modélisation, statistiques, bases de l’IA et physique appliquée.</p>
    </li>
  </ol>
</div>


      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">Langues</h3>
        <p className="text-slate-300">• Français (natif) • Anglais (intermédiaire B2) • Italien / Espagnol (débutant A1)</p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">Centres d’intérêt</h3>
        <p className="text-slate-300">Stylisme, modélisme, musique, sport, langues, dessin et engagement communautaire.</p>
      </div>
    </section>
  );
};

export default About;
