import Hero from './components/Hero'
import Cases from './components/Cases'
import Performance from './components/Performance'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-manrope text-primary-graphite bg-primary-whiteDesert">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-primary-lushAqua text-auxiliary-light">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-ubuntu font-bold text-xl tracking-wider">LOGO</div>
          <button className="bg-primary-megaman text-primary-lushAqua px-4 py-2 rounded-md font-bold text-small">
            Fale Conosco
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full">
        <Hero />

        {/* Metodologia Performance+ Section */}
        <section id="metodologia" className="w-full py-16 px-6 bg-auxiliary-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-primary-lushAqua font-bold mb-10 text-center">Metodologia Performance+</h2>
            <Performance />
          </div>
        </section>

        {/* Resultados / Cases Section */}
        <section id="cases" className="w-full py-16 pl-6 bg-primary-lushAqua text-auxiliary-light overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-bold mb-4">Alguns Resultados</h2>
            <p className="mb-10 text-auxiliary-gray">Cases de sucesso da nossa metodologia aplicada.</p>
            <Cases />
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="w-full py-20 px-6 bg-primary-candelabra text-primary-lushAqua text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-bold mb-6">Pronto para transformar sua performance?</h2>
            <p className="mb-8 max-w-2xl mx-auto">Entre em contato hoje e descubra como nossa metodologia pode alavancar os resultados do seu negócio.</p>
            <button className="bg-primary-lushAqua text-auxiliary-light px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all">
              Quero Decidir com Clareza
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-6 bg-primary-lushAqua text-auxiliary-gray border-t border-primary-lushAqua">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-ubuntu font-bold text-xl text-auxiliary-light">LOGO</div>
          <p className="text-small text-center md:text-left">
            &copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-megaman transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-megaman transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
