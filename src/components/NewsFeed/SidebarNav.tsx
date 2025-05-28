import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquare,
  Tv,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  UserCog,
  HeartHandshake,
  ChevronDown,
  MoreHorizontal,
  Settings, // Placeholder for Create section icons
  FilePlus2,
  UserPlus,
  CalendarPlus,
  Megaphone
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  hasMore?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, hasMore, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center justify-between p-2 rounded-md text-sm font-medium',
        'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        isActive && 'bg-sidebar-accent text-sidebar-primary font-semibold'
      )}
    >
      <div className="flex items-center space-x-3">
        <Icon className={cn('h-5 w-5', isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground/80')} />
        <span>{label}</span>
      </div>
      {hasMore && <MoreHorizontal className="h-5 w-5 text-sidebar-foreground/60" />}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/32x32.png?text=OM',
  };

  const mainNavItems = [
    { id: 'olenna', label: user.name, icon: () => <Avatar className="h-7 w-7"><AvatarImage src={user.avatarUrl} alt={user.name} /><AvatarFallback>{user.name.substring(0,1)}</AvatarFallback></Avatar>, href: '#' },
    { id: 'newsfeed', label: 'News Feed', icon: Newspaper, href: '#', isActive: true, hasMore: true },
    { id: 'messenger', label: 'Messenger', icon: MessageSquare, href: '#' },
    { id: 'watch', label: 'Watch', icon: Tv, href: '#' },
    { id: 'marketplace', label: 'Marketplace', icon: Store, href: '#' },
  ];

  const shortcuts = [
    { id: 'farmville', label: 'FarmVille 2', icon: Gamepad2, href: '#' },
    // Add more shortcuts here if needed
  ];

  const exploreItems = [
    { id: 'events', label: 'Events', icon: CalendarDays, href: '#' },
    { id: 'pages', label: 'Pages', icon: Flag, href: '#' },
    { id: 'groups', label: 'Groups', icon: Users, href: '#' },
    { id: 'friendlists', label: 'Friend Lists', icon: UserCog, href: '#' },
    { id: 'fundraisers', label: 'Fundraisers', icon: HeartHandshake, href: '#' },
  ];

  const createItems = [
    { id: 'ad', label: 'Ad', icon: Megaphone, href: '#' },
    { id: 'page', label: 'Page', icon: FilePlus2, href: '#' },
    { id: 'group', label: 'Group', icon: UserPlus, href: '#' },
    { id: 'event', label: 'Event', icon: CalendarPlus, href: '#' },
    { id: 'fundraiser', label: 'Fundraiser', icon: HeartHandshake, href: '#' }, // Reusing icon
  ];

  return (
    <aside className={cn('fixed left-0 top-0 h-screen w-72 bg-sidebar text-sidebar-foreground flex flex-col', className)}>
      <ScrollArea className="flex-1 pt-16"> {/* pt-16 for fixed header */} 
        <div className="p-4 space-y-2">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}

          <Separator className="my-3 bg-sidebar-border" />

          <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">Shortcuts</h3>
          {shortcuts.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}

          <Separator className="my-3 bg-sidebar-border" />

          <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">Explore</h3>
          {exploreItems.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2">
            <ChevronDown className="h-5 w-5 mr-3 text-sidebar-foreground/80" />
            See More...
          </Button>

          <Separator className="my-3 bg-sidebar-border" />

          <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">Create</h3>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 px-2">
            {createItems.map((item) => (
                <a key={item.id} href={item.href} className='text-sm text-sidebar-foreground/80 hover:text-sidebar-primary hover:underline'>
                    {item.label}
                </a>
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border text-xs text-muted-foreground">
        Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2024
      </div>
    </aside>
  );
};

export default SidebarNav;
