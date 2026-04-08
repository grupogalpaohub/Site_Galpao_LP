import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="w-full py-16 px-6 bg-primary-whiteDesert text-primary-lushAqua">
      <div className="max-w-md mx-auto flex flex-col">
        <h2 className="mb-2 text-[34px] font-ubuntu font-bold text-primary-lushAqua leading-[1.2]">Blog</h2>
        <p className="text-primary-graphite text-[16px] font-manrope font-normal mb-8">Nossas últimas postagens</p>

        <div className="flex flex-col gap-6">
          {/* Post 1 */}
          <div className="bg-[#FFFFFF] border border-[#E2E3E4] rounded-[16px] overflow-hidden flex flex-col">
            <div className="h-[240px] bg-auxiliary-gray relative">
                <img src="/images/figma/11.png" alt="Do Caos à Clareza" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h4 className="text-primary-lushAqua font-ubuntu font-bold text-[24px] leading-[1.2]">Do Caos à Clareza: Como Transformar Dados em Decisões E...</h4>
              <a href="#" className="text-primary-lushAqua font-bold text-[16px] font-manrope hover:text-primary-megaman transition-colors">
                Ver mais
              </a>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-[#FFFFFF] border border-[#E2E3E4] rounded-[16px] overflow-hidden flex flex-col">
            <div className="h-[240px] bg-auxiliary-gray relative">
               <img src="/images/figma/12.png" alt="A Nova Era dos Criativos" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h4 className="text-primary-lushAqua font-ubuntu font-bold text-[24px] leading-[1.2]">A Nova Era dos Criativos: Como Estruturar seus Anúncios em...</h4>
              <a href="#" className="text-primary-lushAqua font-bold text-[16px] font-manrope hover:text-primary-megaman transition-colors">
                Ver mais
              </a>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-[#FFFFFF] border border-[#E2E3E4] rounded-[16px] overflow-hidden flex flex-col">
            <div className="h-[240px] bg-auxiliary-gray relative">
               <img src="/images/figma/13.png" alt="Server-side Tracking" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h4 className="text-primary-lushAqua font-ubuntu font-bold text-[24px] leading-[1.2]">Server-side Tracking: Como Garantir Qualidade de Dados e O...</h4>
              <a href="#" className="text-primary-lushAqua font-bold text-[16px] font-manrope hover:text-primary-megaman transition-colors">
                Ver mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
