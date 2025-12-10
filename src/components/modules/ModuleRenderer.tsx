import { Module } from './ModuleTypes';
import { HeroModule } from './components/HeroModule';
import { StatsModule } from './components/StatsModule';
import { BlogModule } from './components/BlogModule';
import { VideoModule } from './components/VideoModule';
import { CommunityModule } from './components/CommunityModule';
import { TextModule } from './components/TextModule';
import { ImageModule } from './components/ImageModule';
import { SubscriptionModule } from './components/SubscriptionModule';

interface ModuleRendererProps {
  module: Module;
  isEditMode?: boolean;
  onEdit?: (module: Module) => void;
  onDelete?: (moduleId: string) => void;
}

export function ModuleRenderer({ module, isEditMode, onEdit, onDelete }: ModuleRendererProps) {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(module);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(module.id);
    }
  };

  const renderModule = () => {
    switch (module.type) {
      case 'hero':
        return <HeroModule module={module} />;
      case 'stats':
        return <StatsModule module={module} />;
      case 'blog':
        return <BlogModule module={module} />;
      case 'video':
        return <VideoModule module={module} />;
      case 'community':
        return <CommunityModule module={module} />;
      case 'text':
        return <TextModule module={module} />;
      case 'image':
        return <ImageModule module={module} />;
      case 'subscription':
        return <SubscriptionModule module={module} />;
      default:
        return <div>Unknown module type</div>;
    }
  };

  if (isEditMode) {
    return (
      <div className="relative group border-2 border-dashed border-transparent hover:border-primary/50 rounded-lg">
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="px-2 py-1 bg-primary text-primary-foreground text-sm rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-2 py-1 bg-destructive text-destructive-foreground text-sm rounded"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="pointer-events-none">
          {renderModule()}
        </div>
      </div>
    );
  }

  return renderModule();
}