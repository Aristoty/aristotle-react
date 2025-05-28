import React from 'react';

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-slate-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">À propos de moi</h2>

      <p className="text-lg leading-relaxed mb-6 text-slate-300">
        Je suis <strong>Aristotle</strong>, ingénieur en électronique, électrotechnique et automatisme,
        passionné par l'intelligence artificielle, les systèmes experts et la médecine intelligente.
        Mon travail se concentre sur la conception de solutions innovantes pour la détection précoce
        des maladies, l'optimisation de la maintenance biomédicale, et l’intégration de l’IA dans les systèmes de santé.
      </p>

      <p className="text-lg leading-relaxed mb-6 text-slate-300">
        Titulaire de deux masters, l’un professionnel en <strong>GEII</strong> et un second en
        recherche dans le domaine <strong>EEA (Électronique, Électrotechnique, Automatique)</strong>,
        j’ai mené des travaux alliant deep learning, radiomique, et prise de décision assistée.
        Mes projets visent à répondre aux besoins critiques en Afrique, notamment dans la santé intelligente.
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">Compétences clés</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-slate-300 text-sm">
          <li className="bg-slate-800 px-4 py-2 rounded-xl">React & TailwindCSS</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Python & FastAPI</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Deep Learning (CNN, Radiomics)</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Systèmes embarqués</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Laravel & MySQL</li>
          <li className="bg-slate-800 px-4 py-2 rounded-xl">Expert systems & IA médicale</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
