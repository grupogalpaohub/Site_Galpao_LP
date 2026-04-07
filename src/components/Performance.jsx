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
    <div className="w-full relative py-4">
      {/* Vertical Connecting Line strictly on left for mobile */}
      <div className="absolute left-[23px] top-8 bottom-8 w-1 bg-primary-lushAqua/20 rounded-full z-0"></div>

      <div className="flex flex-col gap-8 relative z-10">
        {methodologySteps.map((step) => (
          <div
            key={step.id}
            className="flex items-start gap-6 w-full"
          >
            {/* Step Number */}
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary-lushAqua border-4 border-primary-whiteDesert text-primary-candelabra font-ubuntu font-bold text-h5 flex items-center justify-center shadow-sm relative z-10">
              {step.id}
            </div>

            {/* Step Content */}
            <div className="flex flex-col pt-2">
              <h4 className="text-primary-lushAqua font-bold mb-2 text-lg">{step.title}</h4>
              <p className="text-primary-graphite text-small leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 w-full">
        <button className="w-full border-2 border-primary-lushAqua text-primary-lushAqua px-8 py-4 rounded-md font-bold text-p hover:bg-primary-lushAqua hover:text-auxiliary-light transition-all">
          Entenda a Metodologia
        </button>
      </div>
    </div>
  );
};

export default Performance;