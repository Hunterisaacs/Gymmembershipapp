export interface BaseModule {
  id: string;
  type: string;
  title: string;
  order: number;
}

export interface HeroModule extends BaseModule {
  type: 'hero';
  data: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
    ctaLink: string;
  };
}

export interface StatsModule extends BaseModule {
  type: 'stats';
  data: {
    stats: Array<{
      label: string;
      value: number;
      target: number;
      icon: string;
    }>;
  };
}

export interface BlogModule extends BaseModule {
  type: 'blog';
  data: {
    posts: Array<{
      title: string;
      excerpt: string;
      category: string;
      author: string;
      readTime: string;
      image: string;
    }>;
    showFeatured: boolean;
  };
}

export interface VideoModule extends BaseModule {
  type: 'video';
  data: {
    videos: Array<{
      title: string;
      description: string;
      thumbnail: string;
      duration: string;
      category: string;
      level: string;
    }>;
    layout: 'grid' | 'list';
  };
}

export interface CommunityModule extends BaseModule {
  type: 'community';
  data: {
    posts: Array<{
      author: string;
      content: string;
      timestamp: string;
      likes: number;
      image?: string;
    }>;
    events: Array<{
      title: string;
      date: string;
      time: string;
      description: string;
    }>;
  };
}

export interface TextModule extends BaseModule {
  type: 'text';
  data: {
    content: string;
    alignment: 'left' | 'center' | 'right';
    size: 'sm' | 'md' | 'lg';
  };
}

export interface ImageModule extends BaseModule {
  type: 'image';
  data: {
    src: string;
    alt: string;
    caption?: string;
    width: string;
    height: string;
  };
}

export interface SubscriptionModule extends BaseModule {
  type: 'subscription';
  data: {
    plans: Array<{
      name: string;
      price: string;
      features: string[];
      popular?: boolean;
    }>;
  };
}

export type Module = 
  | HeroModule 
  | StatsModule 
  | BlogModule 
  | VideoModule 
  | CommunityModule 
  | TextModule 
  | ImageModule 
  | SubscriptionModule;

export interface PageConfig {
  [pageName: string]: Module[];
}

export const MODULE_TEMPLATES: Record<string, Omit<Module, 'id' | 'order'>> = {
  hero: {
    type: 'hero',
    title: 'Hero Section',
    data: {
      title: 'Welcome to Empire Jiu-jitsu',
      subtitle: 'Transform your fitness journey',
      backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZXJvfGVufDF8fHx8MTc1ODIyNDE2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      ctaText: 'Start Training',
      ctaLink: '#'
    }
  },
  stats: {
    type: 'stats',
    title: 'Progress Stats',
    data: {
      stats: [
        { label: 'Workouts This Month', value: 18, target: 20, icon: 'Zap' },
        { label: 'Weight Goal Progress', value: 75, target: 100, icon: 'Target' },
        { label: 'Streak Days', value: 12, target: 30, icon: 'Trophy' }
      ]
    }
  },
  blog: {
    type: 'blog',
    title: 'Blog Posts',
    data: {
      posts: [
        {
          title: '5 Essential Exercises for Building Core Strength',
          excerpt: 'Discover the most effective core exercises that will transform your stability and power.',
          category: 'Strength Training',
          author: 'Dr. Michelle Chen',
          readTime: '6 min read',
          image: 'https://images.unsplash.com/photo-1593476087123-36d1de271f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JlJTIwc3RyZW5ndGglMjBleGVyY2lzZXN8ZW58MXx8fHwxNzU4MjI0MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ],
      showFeatured: true
    }
  },
  video: {
    type: 'video',
    title: 'Video Library',
    data: {
      videos: [
        {
          title: 'Basic Jiu-jitsu Fundamentals',
          description: 'Learn the essential movements and positions',
          thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhqaXUlMjBqaXRzdXxlbnwxfHx8fDE3NTgyMjQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '15:30',
          category: 'Technique',
          level: 'Beginner'
        }
      ],
      layout: 'grid'
    }
  },
  community: {
    type: 'community',
    title: 'Community Feed',
    data: {
      posts: [
        {
          author: 'Sarah Johnson',
          content: 'Just completed my first month of training! Feeling stronger every day.',
          timestamp: '2 hours ago',
          likes: 12
        }
      ],
      events: [
        {
          title: 'Open Mat Session',
          date: '2024-09-25',
          time: '6:00 PM',
          description: 'Free rolling session for all skill levels'
        }
      ]
    }
  },
  text: {
    type: 'text',
    title: 'Text Block',
    data: {
      content: 'Add your custom text content here.',
      alignment: 'left',
      size: 'md'
    }
  },
  image: {
    type: 'image',
    title: 'Image Block',
    data: {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhneW0lMjBpbWFnZXxlbnwxfHx8fDE3NTgyMjQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Gym image',
      caption: 'Image caption',
      width: '100%',
      height: '300px'
    }
  },
  subscription: {
    type: 'subscription',
    title: 'Subscription Plans',
    data: {
      plans: [
        {
          name: 'Basic',
          price: '$29/month',
          features: ['Access to gym', 'Basic classes', 'Locker room']
        },
        {
          name: 'Premium',
          price: '$59/month',
          features: ['All Basic features', 'Personal training', 'Nutrition plan', 'Priority booking'],
          popular: true
        }
      ]
    }
  }
};