import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, Heart } from "lucide-react";

export function CommunityPage() {
  const communityPosts = [
    {
      id: 1,
      author: "Alex Chen",
      avatar: "/api/placeholder/40/40",
      time: "2 hours ago",
      content: "Just completed my first 5K run! Can't believe I went from couch to 5K in 8 weeks. This community's support has been amazing! 🏃‍♂️",
      likes: 24,
      comments: 8,
      image: "https://images.unsplash.com/photo-1756314355692-56276a5b7bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29tbXVuaXR5JTIwZ3JvdXB8ZW58MXx8fHwxNzU4MjAwNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      author: "Maria Rodriguez",
      avatar: "/api/placeholder/40/40",
      time: "4 hours ago",
      content: "Weekly meal prep done! These Mediterranean bowls are my new obsession. Recipe in comments if anyone's interested! 🥗",
      likes: 31,
      comments: 12,
      image: null
    },
    {
      id: 3,
      author: "James Park",
      avatar: "/api/placeholder/40/40",
      time: "1 day ago",
      content: "Hit a new personal record on deadlifts today - 225lbs! The progress tracking feature in the app really helps me stay motivated.",
      likes: 18,
      comments: 6,
      image: null
    }
  ];

  return (
    <div className="space-y-4">
      {/* Community Feed */}
      {communityPosts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={post.avatar} />
                <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.time}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.content}</p>
            {post.image && (
              <div className="mb-4">
                <ImageWithFallback
                  src={post.image}
                  alt="Community post"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex items-center flex-wrap gap-2 sm:gap-4 pt-3 border-t">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs sm:text-sm">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs sm:text-sm">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
