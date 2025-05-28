import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  PlusCircle,
  Archive,
  Settings,
  BookOpen // Placeholder for a story icon, if needed
} from 'lucide-react';

interface StoryItem {
  id: string;
  userName: string;
  avatarUrl: string;
  storyImageUrl: string; // Image for the story preview circle
  isCurrentUser?: boolean;
}

interface RightSidebarStoriesProps {
  className?: string;
}

const RightSidebarStories: React.FC<RightSidebarStoriesProps> = ({ className }) => {
  const storiesData: StoryItem[] = [
    {
      id: 'current_user_story',
      userName: 'Add to Story',
      avatarUrl: '', // No avatar for 'Add to story' in this style
      storyImageUrl: '', // No background image for 'Add to story' button
      isCurrentUser: true,
    },
    {
      id: 'story_1',
      userName: 'Jane Doe',
      avatarUrl: 'https://via.placeholder.com/32x32.png?text=JD',
      storyImageUrl: 'https://via.placeholder.com/80x120.png?text=Story1',
    },
    {
      id: 'story_2',
      userName: 'John Smith',
      avatarUrl: 'https://via.placeholder.com/32x32.png?text=JS',
      storyImageUrl: 'https://via.placeholder.com/80x120.png?text=Story2',
    },
    {
      id: 'story_3',
      userName: 'Alice Wonderland',
      avatarUrl: 'https://via.placeholder.com/32x32.png?text=AW',
      storyImageUrl: 'https://via.placeholder.com/80x120.png?text=Story3',
    },
  ];

  return (
    <Card className={cn('w-full shadow-none border-none rounded-none bg-transparent', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b">
        <CardTitle className="text-base font-semibold text-foreground">Stories</CardTitle>
        <div className="space-x-1">
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-accent p-1 h-auto">
            <Archive className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-accent p-1 h-auto">
            <Settings className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-2 pb-2">
            {storiesData.map((story) => (
              story.isCurrentUser ? (
                <button 
                  key={story.id} 
                  className="flex flex-col items-center justify-center w-24 h-36 rounded-lg border-2 border-dashed border-primary/50 hover:border-primary bg-primary/5 text-primary transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-1">
                    <PlusCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium text-center w-full px-1">{story.userName}</span>
                  <span className="text-[10px] text-muted-foreground text-center w-full px-1">Share a photo, video or write something</span>
                </button>
              ) : (
                <a href="#" key={story.id} className="block w-24 h-36 rounded-lg overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                  <img 
                    src={story.storyImageUrl} 
                    alt={`${story.userName}'s story`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <img 
                     src={story.avatarUrl}
                     alt={story.userName}
                     className="absolute top-2 left-2 h-7 w-7 rounded-full border-2 border-primary bg-card"
                  />
                  <p className="absolute bottom-1 left-0 right-0 text-center text-white text-xs font-medium p-1 truncate">
                    {story.userName}
                  </p>
                </a>
              )
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RightSidebarStories;
