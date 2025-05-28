import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
          Bonjour, je suis Aristote
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
          Ingénieur en Électronique & Intelligence Artificielle, spécialisé dans les systèmes experts, la détection précoce des maladies et les technologies médicales intelligentes.
        </p>

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
      </div>
    </section>
  );
};

export default Home;
