import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Clock, Star, Filter, Search } from "lucide-react";
import { Input } from "./ui/input";

export function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Arm Bar From Guard - Complete Tutorial",
      instructor: "Professor Marcus Silva",
      duration: "12 min",
      difficulty: "Intermediate",
      rating: 4.9,
      views: "5.2k",
      category: "Submissions",
      thumbnail: "https://images.unsplash.com/photo-1542937306-d1056fdd367a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjM4MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "White Belt Fundamentals - Shrimping & Hip Escape",
      instructor: "Coach Amanda Rodriguez",
      duration: "8 min",
      difficulty: "White Belt",
      rating: 5.0,
      views: "8.1k",
      category: "Fundamentals",
      thumbnail: "https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGdyYXBwbGluZ3xlbnwxfHx8fDE3NjIzODA1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Triangle Choke Setup From Closed Guard",
      instructor: "Master João Santos",
      duration: "15 min",
      difficulty: "Blue Belt",
      rating: 4.8,
      views: "4.3k",
      category: "Submissions",
      thumbnail: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiamolMjBnaSUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjM4MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Guard Passing Fundamentals for Beginners",
      instructor: "Professor David Chen",
      duration: "18 min",
      difficulty: "White Belt",
      rating: 4.9,
      views: "6.7k",
      category: "Guard Passing",
      thumbnail: "https://images.unsplash.com/photo-1602827115146-853fa12ba155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hdHxlbnwxfHx8fDE3NjIzODA1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Kimura Lock - Multiple Entries & Finishes",
      instructor: "Coach Sarah Martinez",
      duration: "20 min",
      difficulty: "Blue Belt",
      rating: 4.7,
      views: "3.9k",
      category: "Submissions",
      thumbnail: "https://images.unsplash.com/photo-1602827114394-463fcc49bae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWRvJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzYyMzgwNTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Takedowns for BJJ - Double Leg Technique",
      instructor: "Coach Mike Thompson",
      duration: "14 min",
      difficulty: "Intermediate",
      rating: 4.8,
      views: "5.5k",
      category: "Takedowns",
      thumbnail: "https://images.unsplash.com/photo-1563844528129-067e06a638e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVzdGxpbmclMjBjb21iYXQlMjBzcG9ydHxlbnwxfHx8fDE3NjIzODA1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 7,
      title: "Mount Escapes - Essential Defense Techniques",
      instructor: "Professor Lisa Park",
      duration: "16 min",
      difficulty: "White Belt",
      rating: 5.0,
      views: "7.2k",
      category: "Escapes",
      thumbnail: "https://images.unsplash.com/photo-1542937306-d1056fdd367a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjM4MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 8,
      title: "Rear Naked Choke - Perfect Your Finish",
      instructor: "Master Carlos Oliveira",
      duration: "10 min",
      difficulty: "Intermediate",
      rating: 4.9,
      views: "4.8k",
      category: "Submissions",
      thumbnail: "https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGdyYXBwbGluZ3xlbnwxfHx8fDE3NjIzODA1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 9,
      title: "Side Control Basics & Maintenance",
      instructor: "Coach Jennifer Lee",
      duration: "13 min",
      difficulty: "White Belt",
      rating: 4.7,
      views: "5.9k",
      category: "Positions",
      thumbnail: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiamolMjBnaSUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjM4MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const categories = ["All", "Fundamentals", "Submissions", "Guard Passing", "Escapes", "Takedowns", "Positions"];
  const difficulties = ["All Levels", "White Belt", "Blue Belt", "Intermediate", "Advanced"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "White Belt":
        return "bg-white text-gray-900 border border-gray-300";
      case "Blue Belt":
        return "bg-blue-100 text-blue-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Technique Videos</h1>
          <p className="text-muted-foreground">Master your Jiu-Jitsu skills with our expert tutorials</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search techniques..." 
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge 
            key={category} 
            variant={category === "All" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured Video */}
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative">
            <ImageWithFallback
              src={videos[0].thumbnail}
              alt={videos[0].title}
              className="w-full h-48 md:h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button size="lg" className="rounded-full w-16 h-16">
                <Play className="h-6 w-6 ml-1" />
              </Button>
            </div>
            <Badge className="absolute top-3 left-3" variant="secondary">
              Featured
            </Badge>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="mb-3">{videos[0].title}</h2>
            <p className="text-muted-foreground mb-4">
              Master one of the most fundamental submissions in Brazilian Jiu-Jitsu. {videos[0].instructor} breaks down the arm bar from guard position with detailed step-by-step instruction.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {videos[0].duration}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                {videos[0].rating}
              </div>
              <Badge className={getDifficultyColor(videos[0].difficulty)}>
                {videos[0].difficulty}
              </Badge>
            </div>
            <Button size="lg" className="w-full">
              <Play className="h-4 w-4 mr-2" />
              Watch Technique
            </Button>
          </div>
        </div>
      </Card>

      {/* Video Grid */}
      <div>
        <h2 className="mb-4">All Techniques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video) => (
            <Card key={video.id} className="overflow-hidden group cursor-pointer">
              <div className="relative">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="lg" className="rounded-full">
                    <Play className="h-5 w-5 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <Badge className={`absolute top-3 left-3 ${getDifficultyColor(video.difficulty)}`}>
                  {video.difficulty}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{video.instructor}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    {video.rating}
                  </div>
                  <span className="text-muted-foreground">{video.views} views</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
