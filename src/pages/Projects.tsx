import React from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: 'IA médicale' | 'Web' | 'Systèmes embarqués';
  link?: string;
};

const projects: Project[] = [
  {
    title: 'BIOMEDARIS 2.0',
    description: 'Système expert intelligent pour le diagnostic, la maintenance prédictive et la téléassistance biomédicale basé sur l’IA et le deep learning.',
    tags: ['FastAPI', 'AI', 'Système Expert', 'Radiomics'],
    category: 'IA médicale',
    link: '#',
  },
  {
    title: 'Détection précoce Alzheimer & AVC',
    description: 'Modélisation deep learning et radiomique pour la prédiction précoce des maladies neurodégénératives et cardiovasculaires.',
    tags: ['Python', 'CNN', 'Radiomics', 'Recherche'],
    category: 'IA médicale',
    link: '#',
  },
  {
    title: 'Reconnaissance maladies pulmonaires',
    description: 'Système hybride d’IA pour la reconnaissance automatisée des pathologies pulmonaires via imagerie médicale.',
    tags: ['Deep Learning', 'Keras', 'Expert system'],
    category: 'IA médicale',
    link: '#',
  },
  {
    title: 'Portfolio Web Professionnel',
    description: 'Application web responsive moderne pour présenter les projets de recherche et d’ingénierie.',
    tags: ['React', 'TailwindCSS', 'TypeScript'],
    category: 'Web',
    link: '#',
  },
  {
    title: 'Dashboard Edu-IA pour l’Université',
    description: 'Outil pédagogique et administratif avec gestion des étudiants et modules IA (enseignement, orientation, statistiques).',
    tags: ['Laravel', 'MySQL', 'Admin Panel'],
    category: 'Web',
    link: '#',
  },
  {
    title: 'Système embarqué pour monitoring biomédical',
    description: 'Conception d’un prototype embarqué intelligent pour la surveillance de dispositifs médicaux.',
    tags: ['Arduino', 'Proteus', 'Maintenance'],
    category: 'Systèmes embarqués',
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-slate-200">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">Projets R&D et Développements</h2>

      {['IA médicale', 'Web', 'Systèmes embarqués'].map((cat) => (
        <div key={cat} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-white border-b border-slate-700 pb-2">{cat}</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((proj) => proj.category === cat)
              .map((project, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow hover:shadow-lg transition">
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h4>
                  <p className="text-sm text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-cyan-600/20 text-cyan-300 px-2 py-1 text-xs rounded-md">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:underline text-sm">
                      Voir plus <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
