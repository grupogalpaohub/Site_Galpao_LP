import React from 'react';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Performance from './components/Performance';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-primary-lushAqua text-auxiliary-light font-manrope selection:bg-primary-megaman selection:text-primary-lushAqua w-full flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-primary-lushAqua border-b border-primary-lushAqua/50 flex justify-between items-center z-50">
        <img src="/Logos Galpão/Logo01-CLight.svg" alt="Galpão" className="h-8 object-contain" />
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

        {/* Blog Section */}
        <Blog />

        {/* CTA Section - O que falta para destravar? */}
        <section id="cta" className="w-full py-16 px-6 relative text-auxiliary-light overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/figma/10.png" alt="Background CTA" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-md mx-auto flex flex-col items-center text-center relative z-10">
            <h2 className="mb-4 text-[34px] font-ubuntu font-bold text-auxiliary-light leading-[1.2]">
              O que falta para destravar?
            </h2>
            <p className="mb-8 text-[16px] font-manrope font-normal text-auxiliary-light opacity-90">
              A reunião é gratuita e sem obrigação de contratação. Em me...
            </p>
            <button className="w-full bg-transparent border-2 border-primary-megaman text-primary-megaman px-8 py-4 rounded-[8px] font-bold text-[16px] font-manrope hover:bg-primary-megaman hover:text-primary-lushAqua transition-all flex justify-center items-center gap-2">
              <span>Quero agendar uma reunião</span>
            </button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="w-full py-12 px-6 bg-primary-lushAqua border-b border-white/10 text-auxiliary-light">
          <div className="max-w-md mx-auto flex flex-col items-center text-center">
            <h3 className="mb-6 text-[28px] font-ubuntu font-bold text-auxiliary-light leading-[1.2]">
              Assine nossa Newsletter
            </h3>
            <div className="w-full flex">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-transparent border border-auxiliary-gray/50 rounded-l-[8px] px-4 py-3 text-[16px] font-manrope text-auxiliary-light focus:outline-none focus:border-primary-megaman placeholder-auxiliary-gray/50"
              />
              <button className="bg-primary-megaman text-primary-lushAqua px-6 py-3 rounded-r-[8px] font-bold text-[16px] font-manrope hover:bg-opacity-90 transition-all flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-12 pb-6 px-6 bg-primary-lushAqua text-[#E2E3E4]">
        <div className="max-w-md mx-auto flex flex-col gap-10">

          <div className="flex flex-col items-center gap-6">
            <img src="/Logos Galpão/Logo01-CLight.svg" alt="Galpão" className="h-8 object-contain" />
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-megaman hover:text-primary-lushAqua transition-colors">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-megaman hover:text-primary-lushAqua transition-colors">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.525 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18C16.522 2.044 15.608 1.998 14.693 2c-2.7 0-4.52 1.654-4.52 4.656v2.344H7v3.22h3.173V22h3.827v-9.78h3.198l.327-3.22z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-megaman hover:text-primary-lushAqua transition-colors">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-megaman hover:text-primary-lushAqua transition-colors">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.06-.297-.15-1.265-.476-2.408-1.484-.888-.788-1.487-1.761-1.663-2.061-.177-.304-.019-.467.132-.616.133-.135.297-.348.448-.521.147-.174.198-.298.298-.497.102-.198.05-.371-.025-.521-.075-.148-.673-1.62-.922-2.218-.239-.584-.486-.505-.673-.513-.174-.01-.373-.01-.571-.01-.198 0-.523.074-.796.371-.274.296-1.045 1.02-1.045 2.489 0 1.467 1.069 2.885 1.219 3.084.148.195 2.105 3.21 5.097 4.502.712.308 1.267.492 1.7.63.714.227 1.365.195 1.879.118.577-.087 1.767-.721 2.016-1.42.249-.696.249-1.293.174-1.42-.075-.123-.274-.198-.573-.347zM12 21.84c-1.613 0-3.193-.434-4.576-1.254l-.328-.195-3.398.892.909-3.313-.213-.34A9.82 9.82 0 0 1 2.16 12C2.16 6.57 6.57 2.16 12 2.16 17.43 2.16 21.84 6.57 21.84 12c0 5.43-4.41 9.84-9.84 9.84zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.183 1.605 5.995L.082 23.473l5.63-1.476A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
            </div>
            <p className="text-[14px] font-manrope font-normal text-center mt-2">Nossas Redes Sociais</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[14px] font-manrope font-normal">
            <div className="flex flex-col gap-4">
              <h5 className="font-ubuntu font-bold text-auxiliary-light text-[19px] mb-2">Grupo Galpão</h5>
              <a href="#" className="hover:text-primary-megaman transition-colors">Contato</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">Performance+ Ecomm</a>
              <p className="mt-4">(32) 9999-0000</p>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="font-ubuntu font-bold text-auxiliary-light text-[19px] mb-2">Links Úteis</h5>
              <a href="#" className="hover:text-primary-megaman transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">Termos de Serviços</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">Política de Uso</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">E-book Ecomm System 2026</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">E-book Lead Quality</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">Checklist E-Commerce</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">Blog</a>
              <a href="#" className="hover:text-primary-megaman transition-colors">Nossos Parceiros</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 pt-8 border-t border-white/10 text-[12px] font-manrope text-center">
            <p>contato@grupogalpaohub.com.br</p>
            <p>&copy; 2026 Grupo Galpão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;