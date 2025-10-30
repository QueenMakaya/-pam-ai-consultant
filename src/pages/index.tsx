import Head from "next/head";
import { ArrowRight, Brain, Zap, Globe, Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pamela Alfred | Consultante IA & Transformation Numérique</title>
        <meta name="description" content="IA Générative • No-Code • Automatisation • Canada-Afrique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Pamela Alfred
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Consultante en <span className="font-semibold text-blue-600">Intelligence Artificielle</span> & 
              <span className="font-semibold text-indigo-600"> Transformation Numérique</span>
            </p>
            <p className="mt-4 text-lg text-gray-600">Fondatrice de CHAFRIC • Pont Canada-Afrique</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                Lancer mon projet IA <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:pamela@chafric.com" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                <Mail className="h-5 w-5" /> Me contacter
              </a>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">IA Générative</h3>
                <p className="text-gray-600">ChatGPT, LLM, automatisation intelligente</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">No-Code & Automatisation</h3>
                <p className="text-gray-600">Make.com, Zapier, Bubble, Airtable</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Canada-Afrique</h3>
                <p className="text-gray-600">Accompagnement biculturel, CHAFRIC</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à transformer votre entreprise ?</h2>
            <p className="text-xl mb-8 opacity-90">Automatisation • IA • Croissance</p>
            <a href="mailto:pamela@chafric.com" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all text-lg shadow-lg">
              <Mail className="h-6 w-6" /> Démarrer maintenant
            </a>
            <div className="mt-10 flex justify-center gap-6">
              <a href="https://linkedin.com/in/pamela-alfred" target="_blank" className="hover:text-blue-200 transition-colors">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="https://twitter.com/pamela_alfred" target="_blank" className="hover:text-blue-200 transition-colors">
                <Twitter className="h-7 w-7" />
              </a>
              <a href="https://github.com/QueenMakaya" target="_blank" className="hover:text-blue-200 transition-colors">
                <Github className="h-7 w-7" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
