import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import pic from '../assets/pic.jpg'; // ✅ Image importée

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
      {/* Photo de profil */}
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg mb-6">
        <img
          src={pic}
          alt="Aristote Fankam"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Infos de présentation */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
          Aristote FANKAM
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-300 leading-relaxed">
          Ingénieur R&D en <strong>IA Médicale</strong>, <strong>Électronique</strong> et <strong>Systèmes Intelligents</strong>, avec plus de 5 ans d’expérience en développement logiciel, automatisation et innovation technologique.
        </p>

        <p className="mt-3 text-base text-slate-400">
          J’allie deep learning, systèmes embarqués et développement web pour créer des solutions à impact dans la santé, l’éducation et l’industrie en Afrique.
        </p>

        {/* Boutons d'action */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition"
          >
            Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-900 transition"
          >
            Me contacter
          </Link>
        </div>

        <div className="mt-6 text-sm text-slate-500">
          Basé à Bafoussam, Cameroun • Bilingue FR/EN • Ouvert à la collaboration
        </div>
      </div>
    </section>
  );
};

export default Home;
