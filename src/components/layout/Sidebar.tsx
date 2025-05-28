import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquare,
  PlaySquare, // For Watch
  Store,      // For Marketplace
  LayoutGrid, // For Shortcuts section
  Gamepad2,   // Example shortcut
  Compass,    // For Explore section
  Flame,      // Example explore item (Trending)
  Settings,   // Example explore item (Settings)
  ChevronDown,
  Info,       // For Footer: About
  Shield,     // For Footer: Privacy
  BookOpen    // For Footer: Terms
} from 'lucide-react';

interface NavItemProps {
  icon?: React.ElementType; // Optional for items like user profile with Avatar
  label: string;
  href?: string;
  isActive?: boolean;
  isAvatarItem?: boolean;
  avatarSrc?: string;
  avatarFallback?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, isAvatarItem, avatarSrc, avatarFallback }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center space-x-3 p-2 rounded-md text-sm font-medium',
        'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        isActive && 'bg-sidebar-accent text-sidebar-primary font-semibold'
      )}
    >
      {isAvatarItem ? (
        <Avatar className="h-7 w-7">
          {avatarSrc && <AvatarImage src={avatarSrc} alt={label} />}
          <AvatarFallback>{avatarFallback || label.substring(0, 1)}</AvatarFallback>
        </Avatar>
      ) : (
        Icon && <Icon className={cn('h-5 w-5', isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground/80')} />
      )}
      <span>{label}</span>
    </a>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const currentUser = {
    name: 'Alex Doe',
    avatarUrl: 'https://via.placeholder.com/32x32.png?text=AD',
  };

  const mainNavItems: NavItemProps[] = [
    { label: currentUser.name, isAvatarItem: true, avatarSrc: currentUser.avatarUrl, avatarFallback: currentUser.name.substring(0,1).toUpperCase(), href: '/profile' },
    { label: 'News Feed', icon: Newspaper, href: '/', isActive: true },
    { label: 'Messenger', icon: MessageSquare, href: '/messenger' },
    { label: 'Watch', icon: PlaySquare, href: '/watch' },
    { label: 'Marketplace', icon: Store, href: '/marketplace' },
  ];

  const shortcuts: NavItemProps[] = [
    { label: 'Awesome Game', icon: Gamepad2, href: '/games/awesome' },
    // Add more shortcuts here
  ];

  const exploreItems: NavItemProps[] = [
    { label: 'Trending Topics', icon: Flame, href: '/explore/trending' },
    { label: 'Account Settings', icon: Settings, href: '/settings/account' },
    // Add more explore items here
  ];

  const footerLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'More', href: '#' },
  ];

  return (
    <aside className={cn('fixed left-0 top-0 h-screen w-72 bg-sidebar text-sidebar-foreground flex flex-col z-40', className)}>
      {/* Placeholder for a logo or app name if needed, aligned with Header height */}
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <a href="/" className="flex items-center space-x-2">
          {/* <YourLogoIcon className="h-8 w-8 text-sidebar-primary" /> */}
          <h1 className="font-semibold text-lg text-sidebar-primary">Dashboard</h1>
        </a>
      </div>
      <ScrollArea className="flex-1"> {/* Content starts below the 64px (h-16) sidebar header part */}
        <nav className="p-4 space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}

          <Separator className="my-3 bg-sidebar-border" />

          <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase flex items-center">
            <LayoutGrid className="h-4 w-4 mr-2" /> Shortcuts
          </h3>
          {shortcuts.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}

          <Separator className="my-3 bg-sidebar-border" />

          <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase flex items-center">
            <Compass className="h-4 w-4 mr-2" /> Explore
          </h3>
          {exploreItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 mt-1">
            <ChevronDown className="h-5 w-5 mr-3 text-sidebar-foreground/80" />
            See More...
          </Button>
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border text-xs text-muted-foreground space-x-2">
        {footerLinks.map(link => <a key={link.label} href={link.href} className='hover:underline'>{link.label}</a>)}
        <span>· Meta © {new Date().getFullYear()}</span>
      </div>
    </aside>
  );
};

export default Sidebar;
