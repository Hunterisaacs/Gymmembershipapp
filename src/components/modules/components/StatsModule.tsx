import { StatsModule as StatsModuleType } from '../ModuleTypes';
import { Card, CardContent } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Zap, Target, Trophy, Activity, Calendar, Users } from 'lucide-react';

interface StatsModuleProps {
  module: StatsModuleType;
}

const iconMap = {
  Zap,
  Target,
  Trophy,
  Activity,
  Calendar,
  Users
};

export function StatsModule({ module }: StatsModuleProps) {
  const { data } = module;

  return (
    <div className="mb-6">
      <h2 className="mb-4">{module.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.stats.map((stat, index) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap] || Activity;
          const percentage = Math.round((stat.value / stat.target) * 100);
          
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl">
                      {stat.value}
                      <span className="text-sm text-muted-foreground">/{stat.target}</span>
                    </p>
                  </div>
                </div>
                <Progress value={percentage} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">{percentage}% Complete</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}