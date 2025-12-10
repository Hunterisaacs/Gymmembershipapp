import { ImageModule as ImageModuleType } from '../ModuleTypes';

interface ImageModuleProps {
  module: ImageModuleType;
}

export function ImageModule({ module }: ImageModuleProps) {
  const { data } = module;

  return (
    <div className="mb-6">
      <div className="relative">
        <img 
          src={data.src} 
          alt={data.alt}
          className="rounded-lg object-cover"
          style={{ 
            width: data.width, 
            height: data.height 
          }}
        />
        {data.caption && (
          <p className="text-sm text-muted-foreground mt-2 text-center italic">
            {data.caption}
          </p>
        )}
      </div>
    </div>
  );
}