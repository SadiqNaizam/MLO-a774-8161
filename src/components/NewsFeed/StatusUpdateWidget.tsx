import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Edit3,       // Make Post
  ImageUp,     // Photo/Video Album
  RadioTower,  // Live Video
  List,        // List (Feeling/Activity)
  Image as ImageIcon, // Photo/Video
  Tag,         // Tag Friends
  MoreHorizontal
} from 'lucide-react';

interface StatusUpdateWidgetProps {
  className?: string;
}

const StatusUpdateWidget: React.FC<StatusUpdateWidgetProps> = ({ className }) => {
  const currentUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/40x40.png?text=OM',
  };

  const topActions = [
    { id: 'make_post', label: 'Make Post', icon: Edit3, variant: 'ghost' as const, className: 'text-primary font-semibold border-b-2 border-primary rounded-none' },
    { id: 'album', label: 'Photo/Video Album', icon: ImageUp, variant: 'ghost' as const },
    { id: 'live', label: 'Live Video', icon: RadioTower, variant: 'ghost' as const },
  ];

  const bottomActions = [
    { id: 'feeling', label: 'List', icon: List, color: 'text-orange-500' }, // Placeholder for feeling/activity (list from image)
    { id: 'photo_video', label: 'Photo/Video', icon: ImageIcon, color: 'text-green-500' },
    { id: 'tag', label: 'Tag Friends', icon: Tag, color: 'text-blue-500' },
  ];

  return (
    <Card className={cn('w-full shadow-md rounded-lg', className)}>
      <div className="p-3 border-b border-border">
        <div className="flex space-x-1">
          {topActions.map(action => (
            <Button
              key={action.id}
              variant={action.variant}
              className={cn('text-sm text-muted-foreground hover:bg-accent font-medium px-3 py-3 h-auto', action.className)}
            >
              <action.icon className="h-5 w-5 mr-2" />
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <textarea
            placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
            className="flex-1 p-2 text-base bg-transparent border-none focus:ring-0 resize-none min-h-[60px] placeholder-muted-foreground"
          />
        </div>
        <Separator className="my-3 bg-border" />
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {bottomActions.map(action => (
              <Button key={action.id} variant="ghost" className="text-sm text-muted-foreground hover:bg-accent font-medium">
                <action.icon className={cn('h-5 w-5 mr-2', action.color)} />
                {action.label}
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusUpdateWidget;
