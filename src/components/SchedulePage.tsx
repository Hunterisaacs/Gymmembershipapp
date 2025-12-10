import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock } from "lucide-react";

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
        <Badge variant="secondary" className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {currentDay}
        </Badge>
      </div>

      {/* Compact Weekly Schedule */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-3">
            {weeklySchedule.map((daySchedule, dayIndex) => (
              <div 
                key={dayIndex} 
                className={`pb-3 ${dayIndex !== weeklySchedule.length - 1 ? 'border-b' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm font-medium min-w-[80px] ${daySchedule.day === currentDay ? 'text-primary' : 'text-muted-foreground'}`}>
                    {daySchedule.day}
                  </span>
                  {daySchedule.day === currentDay && (
                    <Badge variant="default" className="text-xs h-5">Today</Badge>
                  )}
                </div>
                
                <div className="space-y-1.5 ml-0 sm:ml-20">
                  {daySchedule.classes.map((classItem, classIndex) => (
                    <div 
                      key={classIndex} 
                      className="flex items-center justify-between gap-2 p-2 rounded hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="text-xs font-medium text-muted-foreground min-w-[50px]">
                          {classItem.time}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium block truncate">{classItem.name}</span>
                          <span className="text-xs text-muted-foreground">{classItem.instructor}</span>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs flex-shrink-0 ${getLevelColor(classItem.level)}`}
                      >
                        {classItem.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}