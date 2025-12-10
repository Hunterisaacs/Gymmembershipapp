import { TextModule as TextModuleType } from '../ModuleTypes';

interface TextModuleProps {
  module: TextModuleType;
}

export function TextModule({ module }: TextModuleProps) {
  const { data } = module;

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="mb-6">
      <div 
        className={`${alignmentClasses[data.alignment]} ${sizeClasses[data.size]} whitespace-pre-wrap`}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
}