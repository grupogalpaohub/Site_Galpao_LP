import React from 'react';

const casesData = [
  { id: 1, title: 'E-commerce', metric: '+150%', desc: 'Aumento em vendas online no primeiro trimestre.', tag: 'Varejo' },
  { id: 2, title: 'Empreiteira', metric: '3x', desc: 'Mais leads qualificados e redução de CPL.', tag: 'B2B' },
  { id: 3, title: 'Saúde', metric: '+85%', desc: 'Crescimento no agendamento de consultas particulares.', tag: 'Serviços' },
  { id: 4, title: 'Tecnologia', metric: '2.5x', desc: 'Aumento na conversão de trials para planos pagos.', tag: 'SaaS' }
];

const Cases = () => {
  return (
    <div className="w-full">
      {/* Slider Container with Scroll Snap */}
      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 gap-6">
        {casesData.map((caseItem) => (
          <div
            key={caseItem.id}
            className="snap-start snap-always shrink-0 w-[85vw] max-w-[320px] bg-auxiliary-light rounded-xl overflow-hidden flex flex-col shadow-lg"
          >
            {/* Card Image Placeholder */}
            <div className="w-full h-48 bg-primary-whiteDesert flex items-center justify-center border-b border-auxiliary-gray relative">
               <span className="absolute top-4 left-4 bg-primary-candelabra text-primary-lushAqua text-xsmall font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                 {caseItem.tag}
               </span>
               <svg className="w-12 h-12 text-primary-lushAqua opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-primary-lushAqua font-bold mb-2">{caseItem.title}</h4>
              <div className="text-primary-megaman font-ubuntu text-3xl font-bold mb-3">{caseItem.metric}</div>
              <p className="text-primary-graphite text-small mb-6 flex-grow">{caseItem.desc}</p>

              <button className="mt-auto w-full border border-primary-lushAqua text-primary-lushAqua py-3 rounded-md font-bold text-small hover:bg-primary-lushAqua hover:text-auxiliary-light transition-colors">
                Ver Case Completo
              </button>
            </div>
          </div>
        ))}
        {/* Spacer item for proper padding on right end on scroll */}
        <div className="shrink-0 w-2 snap-start"></div>
      </div>

      {/* Scroll indicator instructions (optional, typical for mobile) */}
      <div className="flex justify-center gap-2 mt-4 items-center md:hidden">
        <svg className="w-5 h-5 text-auxiliary-gray animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span className="text-xsmall text-auxiliary-gray uppercase tracking-widest">Deslize para ver mais</span>
      </div>
    </div>
  );
};

export default Cases;
