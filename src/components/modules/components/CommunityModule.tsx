import { CommunityModule as CommunityModuleType } from '../ModuleTypes';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Heart, MessageCircle, Calendar, MapPin } from 'lucide-react';

interface CommunityModuleProps {
  module: CommunityModuleType;
}

export function CommunityModule({ module }: CommunityModuleProps) {
  const { data } = module;

  return (
    <div className="mb-6">
      <h2 className="mb-4">{module.title}</h2>
      
      {/* Events Section */}
      {data.events.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-3">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.events.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{event.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Community Posts */}
      {data.posts.length > 0 && (
        <div>
          <h3 className="mb-3">Community Feed</h3>
          <div className="space-y-4">
            {data.posts.map((post, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm text-primary">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm">{post.author}</span>
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <p className="mb-3">{post.content}</p>
                      {post.image && (
                        <div className="mb-3">
                          <img 
                            src={post.image} 
                            alt="Post image" 
                            className="rounded-lg max-h-64 w-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MessageCircle className="h-4 w-4" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}