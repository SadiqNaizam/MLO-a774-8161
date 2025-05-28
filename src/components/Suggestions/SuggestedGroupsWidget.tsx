import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, X } from 'lucide-react';

interface SuggestedGroup {
  id: string;
  name: string;
  tagline?: string;
  memberCount: number;
  bannerUrl: string;
  memberAvatars: string[];
}

interface SuggestedGroupsWidgetProps {
  className?: string;
}

const SuggestedGroupsWidget: React.FC<SuggestedGroupsWidgetProps> = ({ className }) => {
  const [groups, setGroups] = React.useState<SuggestedGroup[]>([
    {
      id: 'group_1',
      name: 'Mad Men',
      tagline: '(MADdicts)',
      memberCount: 6195,
      bannerUrl: 'https://via.placeholder.com/300x100.png?text=Mad+Men',
      memberAvatars: Array(6).fill(0).map((_, i) => `https://via.placeholder.com/24x24.png?text=M${i+1}`),
    },
    {
      id: 'group_2',
      name: 'Dexter Morgan',
      memberCount: 6984,
      bannerUrl: 'https://via.placeholder.com/300x100.png?text=Dexter',
      memberAvatars: Array(7).fill(0).map((_, i) => `https://via.placeholder.com/24x24.png?text=U${i+1}`),
    },
    {
      id: 'group_3',
      name: 'Tech Innovators',
      memberCount: 12030,
      bannerUrl: 'https://via.placeholder.com/300x100.png?text=Tech',
      memberAvatars: Array(5).fill(0).map((_, i) => `https://via.placeholder.com/24x24.png?text=T${i+1}`),
    },
  ]);

  const handleDismissGroup = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full shadow-none border-none rounded-none bg-transparent', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 pt-4">
        <CardTitle className="text-base font-semibold text-foreground">Suggested Groups</CardTitle>
        <Button variant="link" size="sm" className="text-xs text-primary hover:underline p-0 h-auto">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-3 pt-0 space-y-3">
        {groups.map((group) => (
          <div key={group.id} className="rounded-lg border border-border overflow-hidden bg-card">
            <div className="relative h-20 w-full">
              <img src={group.bannerUrl} alt={`${group.name} banner`} className="w-full h-full object-cover" />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-1 right-1 h-6 w-6 bg-black/30 hover:bg-black/60 text-white rounded-full"
                onClick={() => handleDismissGroup(group.id)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Dismiss {group.name}</span>
              </Button>
              <div className="absolute bottom-2 left-2 flex -space-x-2">
                {group.memberAvatars.slice(0,5).map((avatarUrl, index) => (
                  <Avatar key={index} className="h-6 w-6 border-2 border-card">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>{group.name.substring(0,1)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-foreground hover:underline cursor-pointer">
                {group.name} {group.tagline && <span className="text-muted-foreground font-normal">{group.tagline}</span>}
              </h4>
              <p className="text-xs text-muted-foreground">{group.memberCount.toLocaleString()} members</p>
              <Button variant="outline" size="sm" className="w-full mt-2 text-primary border-primary/50 hover:bg-primary/5 hover:border-primary">
                <Plus className="h-4 w-4 mr-1" /> Join
              </Button>
            </div>
          </div>
        ))}
        {groups.length === 0 && (
          <p className='text-sm text-muted-foreground text-center py-4'>No more group suggestions for now.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroupsWidget;
