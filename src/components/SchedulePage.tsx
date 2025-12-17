import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function SchedulePage() {
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM", name: "Fundamentals", instructor: "Coach Mike", level: "Beginner" },
        { time: "12:00 PM", name: "All Levels", instructor: "Coach Sarah", level: "All Levels" },
        { time: "6:00 PM", name: "Advanced Training", instructor: "Coach Mike", level: "Advanced" },
        { time: "7:30 PM", name: "Competition Team", instructor: "Coach John", level: "Invite Only" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "6:00 AM", name: "Fundamentals", instructor: "Coach Sarah", level: "Beginner" },
        { time: "10:00 AM", name: "Women Only", instructor: "Coach Lisa", level: "Women Only" },
        { time: "4:00 PM", name: "Kids Class", instructor: "Coach Mike", level: "Ages 6-12" },
        { time: "6:00 PM", name: "No-Gi Training", instructor: "Coach John", level: "All Levels" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM", name: "Drilling Session", instructor: "Coach Mike", level: "Intermediate" },
        { time: "12:00 PM", name: "All Levels", instructor: "Coach Sarah", level: "All Levels" },
        { time: "6:00 PM", name: "Gi Training", instructor: "Coach Mike", level: "All Levels" },
        { time: "7:30 PM", name: "Open Mat", instructor: "Open", level: "All Levels" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "6:00 AM", name: "Fundamentals", instructor: "Coach John", level: "Beginner" },
        { time: "10:00 AM", name: "Women Only", instructor: "Coach Lisa", level: "Women Only" },
        { time: "4:00 PM", name: "Kids Class", instructor: "Coach Sarah", level: "Ages 6-12" },
        { time: "6:00 PM", name: "Competition Prep", instructor: "Coach Mike", level: "Advanced" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "6:00 AM", name: "Fundamentals", instructor: "Coach Sarah", level: "Beginner" },
        { time: "12:00 PM", name: "All Levels", instructor: "Coach Mike", level: "All Levels" },
        { time: "6:00 PM", name: "Friday Night Rolls", instructor: "All Coaches", level: "All Levels" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "9:00 AM", name: "Kids Class", instructor: "Coach John", level: "Ages 6-12" },
        { time: "10:30 AM", name: "All Levels", instructor: "Coach Mike", level: "All Levels" },
        { time: "12:00 PM", name: "Open Mat", instructor: "Open", level: "All Levels" }
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "10:00 AM", name: "Open Mat", instructor: "Open", level: "All Levels" }
      ]
    }
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();
  const [selectedDayIndex, setSelectedDayIndex] = useState(() => {
    // Initialize to today's index
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days.indexOf(currentDay);
  });

  const selectedDay = weeklySchedule[selectedDayIndex];

  const goToPreviousDay = () => {
    setSelectedDayIndex((prev) => (prev === 0 ? 6 : prev - 1));
  };

  const goToNextDay = () => {
    setSelectedDayIndex((prev) => (prev === 6 ? 0 : prev + 1));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'border-green-500 text-green-700 bg-green-50';
      case 'Intermediate':
        return 'border-yellow-500 text-yellow-700 bg-yellow-50';
      case 'Advanced':
        return 'border-red-500 text-red-700 bg-red-50';
      case 'All Levels':
        return 'border-blue-500 text-blue-700 bg-blue-50';
      case 'Women Only':
        return 'border-purple-500 text-purple-700 bg-purple-50';
      case 'Kids':
      case 'Ages 6-12':
        return 'border-orange-500 text-orange-700 bg-orange-50';
      case 'Invite Only':
        return 'border-gray-500 text-gray-700 bg-gray-50';
      default:
        return 'border-gray-300 text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          Class Schedule
        </h1>
        {selectedDay.day === currentDay && (
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Today
          </Badge>
        )}
      </div>

      {/* Single Day Schedule */}
      <Card>
        <CardContent className="p-4">
          {/* Day Navigation */}
          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPreviousDay}
              aria-label="Previous day"
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-center flex-1">
              <h2 className="text-lg font-semibold">{selectedDay.day}</h2>
              {selectedDay.day === currentDay && (
                <p className="text-xs text-muted-foreground">Today's Classes</p>
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNextDay}
              aria-label="Next day"
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {selectedDay.classes.map((classItem, classIndex) => (
              <div 
                key={classIndex} 
                className={`p-3 rounded-lg border hover:bg-accent/50 transition-colors ${
                  classIndex !== selectedDay.classes.length - 1 ? 'mb-2' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold">{classItem.name}</h3>
                    <p className="text-sm text-muted-foreground">{classItem.instructor}</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`flex-shrink-0 ${getLevelColor(classItem.level)}`}
                  >
                    {classItem.level}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{classItem.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}