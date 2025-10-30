import Head from "next/head";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pamela Alfred – Consultante IA</title>
        <meta name="description" content="IA, No-Code, Transformation Numérique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold">Pamela Alfred</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Consultante IA | No-Code | CHAFRIC</p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded hover:bg-blue-700">
                <Mail className="h-5 w-5" /> Me Contacter
              </a>
              <a href="/cv.pdf" className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded hover:bg-gray-800">
                CV
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Pamela" className="rounded-lg" />
            <div>
              <p className="text-lg mb-6">Experte en IA générative, j'aide les entrepreneurs africains à innover avec le no-code.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-500" /> <strong>Localisation:</strong> Montréal</li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-500" /> <strong>Email:</strong> pamela@chafric.com</li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-500" /> <strong>Tél:</strong> +1 (514) 555-0192</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 bg-slate-900 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à innover ?</h2>
          <p className="text-lg mb-8">Discutons de votre projet</p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/pamela-alfred" target="_blank"><Linkedin className="h-8 w-8 text-gray-400 hover:text-white" /></a>
            <a href="https://twitter.com/pamela_alfred" target="_blank"><Twitter className="h-8 w-8 text-gray-400 hover:text-white" /></a>
            <a href="https://github.com/QueenMakaya" target="_blank"><Github className="h-8 w-8 text-gray-400 hover:text-white" /></a>
          </div>
        </section>
      </main>
    </>
  );
}
