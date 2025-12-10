import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, User, Heart } from "lucide-react";

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Exercises for Building Core Strength",
      excerpt: "Discover the most effective core exercises that will transform your fitness routine and improve your overall stability.",
      author: "Dr. Mike Johnson",
      readTime: "5 min read",
      category: "Strength Training",
      likes: 124,
      image: "https://images.unsplash.com/photo-1739430548261-ccb06b55501c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMHNlc3Npb258ZW58MXx8fHwxNzU4MjI0MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Nutrition 101: Pre and Post Workout Meals",
      excerpt: "Learn what to eat before and after your workouts to maximize performance and recovery.",
      author: "Sarah Martinez",
      readTime: "8 min read",
      category: "Nutrition",
      likes: 89,
      image: "https://images.unsplash.com/photo-1576491742123-735882d4ca7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4MjI0MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "The Science of Recovery: Why Rest Days Matter",
      excerpt: "Understanding the importance of recovery and how to optimize your rest days for better results.",
      author: "Tom Wilson",
      readTime: "6 min read",
      category: "Recovery",
      likes: 156,
      image: "https://images.unsplash.com/photo-1756314355692-56276a5b7bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29tbXVuaXR5JTIwZ3JvdXB8ZW58MXx8fHwxNzU4MjAwNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const categories = ["All", "Strength Training", "Cardio", "Nutrition", "Recovery", "Mindfulness"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl">Fitness Blog</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Expert tips and insights for your fitness journey</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className="text-xs sm:text-sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Article */}
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <ImageWithFallback
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <Badge variant="secondary" className="mb-3">Featured</Badge>
            <h2 className="mb-3">{blogPosts[0].title}</h2>
            <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span className="truncate">{blogPosts[0].author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blogPosts[0].readTime}
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {blogPosts[0].likes}
              </div>
            </div>
            <Button>Read More</Button>
          </div>
        </div>
      </Card>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 left-3" variant="secondary">
                {post.category}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="truncate">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">Read More</Button>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  {post.likes}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}