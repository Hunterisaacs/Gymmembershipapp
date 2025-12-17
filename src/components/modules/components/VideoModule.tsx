import { VideoModule as VideoModuleType } from "../ModuleTypes";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Play, Clock } from "lucide-react";

interface VideoModuleProps {
  module: VideoModuleType;
}

export function VideoModule({ module }: VideoModuleProps) {
  const { data } = module;

  return (
    <div className="mb-6">
      <h2 className="mb-4">{module.title}</h2>
      <div
        className={`grid gap-4 ${data.layout === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {data.videos.map((video, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${video.thumbnail})`,
                }}
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-3">
                  <Play className="h-6 w-6 text-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                <Clock className="h-3 w-3 inline mr-1" />
                {video.duration}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex gap-2 mb-2">
                <Badge variant="outline">
                  {video.category}
                </Badge>
                <Badge variant="secondary">{video.level}</Badge>
              </div>
              <h3 className="mb-2 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {video.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}