import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Heart, MessageCircle } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE5MzY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Morning Training Session",
    date: "Nov 20, 2024",
    category: "Training",
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1591978638709-bd73f437243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2NDE5MzY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Championship Finals",
    date: "Nov 15, 2024",
    category: "Competition",
    likes: 42,
    comments: 12,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542937306-d1056fdd367a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWRvJTIwZ3JhcHBsaW5nfGVufDF8fHx8MTc2NDE5MzY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Advanced Techniques Workshop",
    date: "Nov 10, 2024",
    category: "Workshop",
    likes: 31,
    comments: 8,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwZ3JvdXB8ZW58MXx8fHwxNzY0MTkzNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Team Conditioning",
    date: "Nov 5, 2024",
    category: "Training",
    likes: 28,
    comments: 6,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1763905720991-0ce68f551743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam98ZW58MXx8fHwxNzY0MTkzNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Dojo Grand Opening",
    date: "Oct 28, 2024",
    category: "Event",
    likes: 56,
    comments: 18,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1727528889601-0ea3d9ee2029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21iYXQlMjBzcG9ydHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjQxMDM4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Sparring Drills",
    date: "Oct 22, 2024",
    category: "Training",
    likes: 19,
    comments: 4,
  },
];

const categories = ["All", "Training", "Competition", "Workshop", "Event"];

export function GalleryPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1>Gallery</h1>
        <p className="text-muted-foreground">
          Moments from our training sessions, competitions, and events
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/10"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group cursor-pointer">
            <div className="relative aspect-square overflow-hidden">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary">{item.category}</Badge>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{item.title}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}