import { SubscriptionModule as SubscriptionModuleType } from '../ModuleTypes';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Check } from 'lucide-react';

interface SubscriptionModuleProps {
  module: SubscriptionModuleType;
}

export function SubscriptionModule({ module }: SubscriptionModuleProps) {
  const { data } = module;

  return (
    <div className="mb-6">
      <h2 className="mb-4">{module.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-center">
                <div className="text-lg">{plan.name}</div>
                <div className="text-2xl text-primary mt-2">{plan.price}</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.popular ? 'default' : 'outline'}
              >
                Choose {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}