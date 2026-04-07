import React from 'react';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Performance from './components/Performance';

function App() {
  return (
    <div className="min-h-screen bg-primary-lushAqua text-auxiliary-light font-manrope selection:bg-primary-megaman selection:text-primary-lushAqua w-full flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-6 bg-primary-lushAqua border-b border-primary-lushAqua/50 flex justify-between items-center z-50">
        <div className="font-ubuntu font-bold text-h4 text-auxiliary-light">Galpão</div>
        <button className="bg-primary-megaman text-primary-lushAqua px-5 py-2 rounded-md font-bold text-small hover:bg-opacity-90 transition-all">
          Começar
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero Section */}
        <Hero />

        {/* Methodology / Performance+ Section */}
        <section id="metodologia" className="w-full py-16 px-6 bg-primary-whiteDesert text-primary-lushAqua">
          <div className="max-w-md mx-auto flex flex-col">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-candelabra/20 text-primary-graphite font-bold text-xsmall tracking-wide uppercase self-start">
              A Metodologia
            </div>
            <h2 className="mb-6 text-primary-lushAqua">Performance+</h2>
            <p className="text-primary-graphite text-lg mb-10">
              O ecossistema completo para escalar sua empresa. Não é apenas tráfego, é a união de dados, criatividade e gestão.
            </p>
            <Performance />
          </div>
        </section>

        {/* Results / Cases Section */}
        <section id="resultados" className="w-full py-16 px-6 bg-primary-lushAqua text-auxiliary-light">
          <div className="max-w-md mx-auto w-full flex flex-col">
            <h2 className="mb-4 text-auxiliary-light text-left">Alguns Resultados</h2>
            <p className="text-auxiliary-gray text-p mb-8 text-left">
              Não acreditamos em achismos. Acreditamos em dados, testes e escala.
            </p>
            <Cases />
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="w-full py-16 px-6 bg-primary-candelabra text-primary-lushAqua text-center">
          <div className="max-w-md mx-auto flex flex-col items-center">
            <h2 className="mb-6">Pronto para transformar sua performance?</h2>
            <p className="mb-8 font-medium">Entre em contato hoje e descubra como nossa metodologia pode alavancar os resultados do seu negócio.</p>
            <button className="w-full bg-primary-lushAqua text-auxiliary-light px-8 py-4 rounded-md font-bold text-p hover:bg-opacity-90 transition-all">
              Quero Decidir com Clareza
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-6 bg-primary-lushAqua text-auxiliary-gray border-t border-primary-lushAqua/50">
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <div className="font-ubuntu font-bold text-h5 text-auxiliary-light">Galpão Hub</div>
          <p className="text-small text-center">
            &copy; {new Date().getFullYear()} Galpão. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App;