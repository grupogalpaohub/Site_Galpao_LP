import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-primary-lushAqua text-auxiliary-light px-6 py-16 flex flex-col items-center">
      <div className="max-w-md mx-auto w-full flex flex-col items-start text-left">

        {/* Main Headline */}
        <h1 className="text-auxiliary-light font-bold mb-6 leading-tight">
          Clareza para decidir. Segurança para crescer.
        </h1>

        {/* Exact Subtitle */}
        <p className="text-auxiliary-gray text-p mb-10">
          A maioria das empresas tenta anunciar sem estrutura. Nós organizamos dados, criativos, canais e ofertas para crescer de forma sustentável.
        </p>

        {/* CTA Buttons - Mobile Stacked */}
        <div className="flex flex-col w-full gap-4">
          <button className="w-full bg-primary-megaman text-primary-lushAqua px-8 py-4 rounded-md font-bold text-p hover:bg-opacity-90 transition-all text-center">
            Falar com Especialista
          </button>
          <button className="w-full border border-auxiliary-gray text-auxiliary-light px-8 py-4 rounded-md font-bold text-p hover:bg-auxiliary-light/10 transition-all text-center">
            Ver Cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;