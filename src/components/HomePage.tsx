import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Megaphone } from "lucide-react";
import { useState, useEffect } from "react";

export function HomePage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const galleryPhotos = [
    {
      image:
        "https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUHRyYWluaW5nfGVufDF8fHx8MTc2NDcxMDQ5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Jiu-jitsu training session",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591978638709-bd73f437243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2NDcxMDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Competition event",
    },
    {
      image:
        "https://images.unsplash.com/photo-1612073584622-335da5fadd8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdSUyMGd5bXxlbnwxfHx8fDE3NjQ3MTA1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Empire Jiu-jitsu gym",
    },
    {
      image:
        "https://images.unsplash.com/photo-1612073584622-335da5fadd8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdSUyMGd5bXxlbnwxfHx8fDE3NjQ3MTA1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Empire Jiu-jitsu team photo",
    },
  ];

  // Auto-rotate photos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex(
        (prevIndex) => (prevIndex + 1) % galleryPhotos.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryPhotos.length]);

  return (
    <div className="space-y-6">
      {/* Empire Gallery */}
      <Card className="overflow-hidden">
        <div className="relative h-40 sm:h-48">
          <ImageWithFallback
            src={galleryPhotos[currentPhotoIndex]?.image || ""}
            alt={
              galleryPhotos[currentPhotoIndex]?.alt ||
              "Empire Jiu-jitsu"
            }
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-4 sm:p-6 text-white">
              <h2 className="text-lg sm:text-xl font-medium mb-1">
                What's going on at Empire
              </h2>
            </div>
          </div>
          {/* Photo indicators */}
          <div className="absolute bottom-4 right-4 flex space-x-1">
            {galleryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentPhotoIndex
                    ? "bg-white"
                    : "bg-white/50"
                }`}
                aria-label={`View photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>

      {/* Announcements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5" />
            Announcements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "New Schedule Starting Next Week",
              message:
                "We're adding more morning classes starting Monday. Check the schedule tab for details!",
              date: "Nov 24",
              priority: "high",
            },
            {
              title: "Holiday Break Notice",
              message:
                "The gym will be closed Dec 24-26 for the holidays. Happy training until then!",
              date: "Nov 20",
              priority: "medium",
            },
            {
              title: "New Belt Promotions",
              message:
                "Congratulations to all students who earned promotions at last week's ceremony!",
              date: "Nov 18",
              priority: "low",
            },
          ].map((announcement, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="flex-1">{announcement.title}</h4>
                <Badge
                  variant={
                    announcement.priority === "high"
                      ? "default"
                      : "secondary"
                  }
                  className="shrink-0"
                >
                  {announcement.priority === "high"
                    ? "Important"
                    : "New"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {announcement.message}
              </p>
              <p className="text-xs text-muted-foreground">
                {announcement.date}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "NAGA Tournament",
              date: "Fri, Sept 20, 7:00 AM",
            },
            {
              title: "Kids Event",
              date: "Sun, Sept 22, 6:00 PM",
            },
            {
              title: "Open",
              date: "Tue, Sept 24, 8:00 AM",
            },
          ].map((event, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <h4>{event.title}</h4>
              <p className="text-sm text-muted-foreground">
                {event.date}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}