import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 text-slate-200">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Contactez-moi</h2>
      
      <p className="mb-8 text-slate-300 text-lg">
        Une idée de collaboration, une question, ou juste envie d'échanger ? Envoyez-moi un message via le formulaire ci-dessous.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">Adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-600 transition"
        >
          Envoyer le message
        </button>
      </form>
    </section>
  );
};

export default Contact;
