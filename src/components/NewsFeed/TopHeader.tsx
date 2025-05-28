import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Search,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Box, // Placeholder for Facebook logo
  Home as HomeIcon,
  Users2
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const currentUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/32x32.png?text=OM',
  };

  const navLinks = [
    {
      id: 'profile',
      label: currentUser.name,
      href: '#',
      icon: () => <Avatar className="h-7 w-7 mr-1"><AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} /><AvatarFallback>{currentUser.name.substring(0,1)}</AvatarFallback></Avatar>,
      isActive: false,
    },
    {
      id: 'home',
      label: 'Home',
      href: '#',
      icon: HomeIcon, // Using HomeIcon alias to avoid conflict
      isActive: true,
    },
    {
      id: 'findfriends',
      label: 'Find Friends',
      href: '#',
      icon: Users2,
      isActive: false,
    },
  ];

  const userActions = [
    { id: 'friends', icon: Users, count: 0, ariaLabel: 'Friend Requests' }, // Original image shows no count on friends icon
    { id: 'messages', icon: MessageCircle, count: 8, ariaLabel: 'Messages' },
    { id: 'notifications', icon: Bell, count: 36, ariaLabel: 'Notifications' },
  ];

  return (
    <header className={cn('fixed top-0 left-0 right-0 h-16 bg-card shadow-sm flex items-center justify-between px-4 sm:px-6 z-50', className)}>
      {/* Left Section */} 
      <div className="flex items-center space-x-2">
        <Box className="h-8 w-8 text-primary" /> {/* Facebook Logo Placeholder */} 
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 pr-3 py-2 h-10 w-60 rounded-full bg-background border-transparent focus:bg-background focus:border-primary"
          />
        </div>
      </div>

      {/* Center Section - Navigation Links */} 
      <nav className="hidden md:flex items-center space-x-1">
        {navLinks.map(link => (
          <Button
            key={link.id}
            variant="ghost"
            asChild
            className={cn(
              'h-12 px-6 rounded-lg text-sm font-medium',
              link.isActive ? 'text-primary border-b-2 border-primary rounded-none' : 'text-muted-foreground hover:bg-accent'
            )}
          >
            <a href={link.href} className="flex items-center">
              {link.icon && <link.icon />}
              {link.label === currentUser.name ? <span className="ml-1">{currentUser.name.split(' ')[0]}</span> : <span className={link.icon ? 'ml-2' : ''}>{link.label}</span>}
            </a>
          </Button>
        ))}
      </nav>

      {/* Right Section - User Actions */} 
      <div className="flex items-center space-x-1">
        {userActions.map(action => (
          <Button key={action.id} variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-secondary hover:bg-accent relative">
            <action.icon className="h-5 w-5 text-foreground" />
            {action.count !== undefined && action.count > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] p-1 text-xs rounded-full flex items-center justify-center">
                {action.count}
              </Badge>
            )}
            <span className="sr-only">{action.ariaLabel}</span>
          </Button>
        ))}
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-secondary hover:bg-accent">
          <HelpCircle className="h-5 w-5 text-foreground" />
          <span className="sr-only">Help</span>
        </Button>
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-secondary hover:bg-accent">
                    <ChevronDown className="h-5 w-5 text-foreground" />
                    <span className="sr-only">Account Settings</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-2">
                <div className="p-2 hover:bg-accent rounded-md cursor-pointer">Settings & Privacy</div>
                <div className="p-2 hover:bg-accent rounded-md cursor-pointer">Help & Support</div>
                <div className="p-2 hover:bg-accent rounded-md cursor-pointer">Display & Accessibility</div>
                <Separator className="my-1"/>
                <div className="p-2 hover:bg-accent rounded-md cursor-pointer">Log Out</div>
            </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default TopHeader;
