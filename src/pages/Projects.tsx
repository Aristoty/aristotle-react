import React from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: 'BIOMEDARIS 2.0',
    description: 'Système expert intelligent pour le diagnostic, la gestion de maintenance et la téléassistance des équipements biomédicaux avec Deep Learning.',
    tags: ['Deep Learning', 'FastAPI', 'Medical AI', 'Expert System'],
    link: '#',
  },
  {
    title: 'Système de reconnaissance de maladies pulmonaires',
    description: 'Reconnaissance automatique via CNN sur imagerie médicale. Intégré dans un système hybride expert + IA.',
    tags: ['CNN', 'Radiomics', 'Python', 'Keras'],
    link: '#',
  },
  {
    title: 'Portfolio Web Pro',
    description: 'Ce site portfolio moderne réalisé avec React, TypeScript et TailwindCSS pour mettre en valeur mes projets et expertises.',
    tags: ['React', 'TailwindCSS', 'Responsive Design'],
    link: '#',
  },
  // Tu peux en ajouter d'autres ici
];

const Projects: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-slate-200">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">Mes projets</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-slate-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-cyan-600/20 text-cyan-300 px-2 py-1 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline"
              >
                Voir le projet <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
