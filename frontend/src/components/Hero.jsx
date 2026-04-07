import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-primary-lushAqua text-auxiliary-light px-6 py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-megaman/20 text-primary-megaman font-bold text-xsmall tracking-wide uppercase">
            Alta Performance
          </div>
          <h1 className="text-auxiliary-light font-bold mb-6">
            Clareza para <span className="text-primary-megaman">decidir</span> e resultados para <span className="text-primary-candelabra">crescer</span>.
          </h1>
          <p className="text-auxiliary-gray text-lg mb-8 max-w-lg">
            [Placeholder Text] Descubra como nossa metodologia ajuda sua empresa a escalar vendas, estruturar dados e otimizar processos com foco total no ROI.
          </p>

          <div className="flex flex-col sm:flex-row w-full gap-4">
            <button className="w-full sm:w-auto bg-primary-megaman text-primary-lushAqua px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all text-center">
              Falar com Especialista
            </button>
            <button className="w-full sm:w-auto border border-auxiliary-gray text-auxiliary-light px-8 py-4 rounded-md font-bold text-lg hover:bg-auxiliary-light/10 transition-all text-center">
              Ver Cases
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
          {/* Placeholder for Hero Image/Illustration */}
          <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-primary-candelabra/20 to-primary-megaman/20 rounded-2xl border border-primary-megaman/30 flex items-center justify-center p-8">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-primary-megaman opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-auxiliary-gray font-medium text-small">[Placeholder Imagem Hero]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
