import { BlogModule as BlogModuleType } from '../ModuleTypes';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Clock, User } from 'lucide-react';

interface BlogModuleProps {
  module: BlogModuleType;
}

export function BlogModule({ module }: BlogModuleProps) {
  const { data } = module;

  return (
    <div className="mb-6">
      <h2 className="mb-4">{module.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data.posts.map((post, index) => (
          <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3">
                {post.category}
              </Badge>
              <h3 className="mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}