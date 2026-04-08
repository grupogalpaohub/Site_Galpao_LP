import React from 'react';

const casesData = [
  {
    id: 1,
    title: 'E-Commerce de Moda',
    metric1Label: 'ROAS',
    metric1Value: '12x',
    metric2Label: 'Faturamento Mensal',
    metric2Value: 'R$ 2.5M',
    tag: 'E-commerce',
    logo: '/Logos Clientes/SoHighCinzaFundoEscuro.png'
  },
  {
    id: 2,
    title: 'Empreiteira Nova Zelândia',
    metric1Label: 'CPL',
    metric1Value: '-45%',
    metric2Label: 'Volume de Leads',
    metric2Value: '+300%',
    tag: 'Serviços',
    logo: '/Logos Clientes/PCTilingCinzaFundoEscuro.png'
  },
  {
    id: 3,
    title: 'E-Commerce de Jalecos Personalizados',
    metric1Label: 'Conversão',
    metric1Value: '+85%',
    metric2Label: 'Faturamento',
    metric2Value: 'R$ 850k',
    tag: 'E-commerce',
    logo: '/Logos Clientes/LIVIA-RIBEIRO-LOGO-HORIZONTALCinzaFundoEscuro.png'
  }
];

const Cases = () => {
  return (
    <div className="w-full">
      {/* Slider Container with Scroll Snap */}
      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 gap-4">
        {casesData.map((caseItem) => (
          <div
            key={caseItem.id}
            className="snap-center shrink-0 w-[85vw] max-w-[320px] bg-primary-graphite rounded-xl overflow-hidden flex flex-col shadow-lg border border-primary-lushAqua"
          >
            {/* Card Content Header */}
            <div className="p-6 border-b border-primary-lushAqua/50 relative flex flex-col items-start">
               <span className="inline-block bg-primary-candelabra text-primary-lushAqua text-xsmall font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                 {caseItem.tag}
               </span>
               <div className="h-12 mb-4 flex items-center justify-start">
                 {caseItem.logo && (
                   <img src={caseItem.logo} alt={caseItem.title} className="max-h-full max-w-[120px] object-contain opacity-80" />
                 )}
               </div>
               <h4 className="text-auxiliary-light font-bold leading-tight">{caseItem.title}</h4>
            </div>

            {/* Metrics Section */}
            <div className="p-6 flex flex-col gap-4 flex-grow bg-primary-lushAqua/20">
              <div className="flex justify-between items-center">
                <span className="text-auxiliary-gray text-small">{caseItem.metric1Label}</span>
                <span className="text-primary-megaman font-ubuntu text-h3 font-bold">{caseItem.metric1Value}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-auxiliary-gray text-small">{caseItem.metric2Label}</span>
                <span className="text-primary-candelabra font-ubuntu text-h4 font-bold">{caseItem.metric2Value}</span>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer item for proper padding on right end on scroll */}
        <div className="shrink-0 w-2 snap-center"></div>
      </div>

      {/* Scroll indicator instructions */}
      <div className="flex justify-center gap-2 mt-2 items-center">
        <svg className="w-5 h-5 text-auxiliary-gray animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span className="text-xsmall text-auxiliary-gray uppercase tracking-widest">Deslize para ver</span>
      </div>
    </div>
  );
};

export default Cases;