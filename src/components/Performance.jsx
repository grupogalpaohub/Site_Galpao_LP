import React from 'react';

const methodologySteps = [
  { id: 1, title: 'Infraestrutura de Dados', desc: 'Configuração robusta de rastreamento para garantir que todas as decisões sejam baseadas em dados reais.' },
  { id: 2, title: 'Estruturação de Criativos', desc: 'Desenvolvimento de peças visuais focadas em conversão, testadas e otimizadas continuamente.' },
  { id: 3, title: 'Gestão de Tráfego', desc: 'Distribuição inteligente de orçamento nas melhores plataformas para o seu público-alvo.' },
  { id: 4, title: 'Otimização de Conversão (CRO)', desc: 'Análise e melhoria contínua da experiência do usuário nas páginas de destino.' },
  { id: 5, title: 'Escala e Expansão', desc: 'Ampliação dos canais e do orçamento de forma segura, mantendo ou melhorando o ROI.' }
];

const Performance = () => {
  return (
    <div className="w-full relative px-2">
      {/* Vertical Connecting Line */}
      <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-auxiliary-gray/50 rounded-full z-0 md:left-1/2 md:-ml-0.5"></div>

      <div className="flex flex-col gap-8 md:gap-12 relative z-10">
        {methodologySteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-start gap-6 md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Step Number/Icon */}
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary-megaman border-4 border-auxiliary-light text-primary-lushAqua font-ubuntu font-bold text-xl flex items-center justify-center shadow-md relative z-10 md:mx-auto">
              {step.id}
            </div>

            {/* Step Content */}
            <div className={`bg-primary-whiteDesert p-6 rounded-xl shadow-sm border border-auxiliary-gray/30 w-full md:w-[calc(50%-3rem)]`}>
              <h4 className="text-primary-lushAqua font-bold mb-3">{step.title}</h4>
              <p className="text-primary-graphite text-small">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-primary-candelabra text-primary-lushAqua px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all inline-block">
          Entenda a Metodologia Completa
        </button>
      </div>
    </div>
  );
};

export default Performance;
