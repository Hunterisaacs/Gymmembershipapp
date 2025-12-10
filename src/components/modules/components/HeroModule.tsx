import { HeroModule as HeroModuleType } from '../ModuleTypes';
import { Button } from '../../ui/button';

interface HeroModuleProps {
  module: HeroModuleType;
}

export function HeroModule({ module }: HeroModuleProps) {
  const { data } = module;

  return (
    <div 
      className="relative h-64 md:h-80 bg-cover bg-center rounded-lg overflow-hidden mb-6"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
        <h1 className="text-3xl md:text-4xl mb-2">{data.title}</h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">{data.subtitle}</p>
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-gray-100"
        >
          {data.ctaText}
        </Button>
      </div>
    </div>
  );
}