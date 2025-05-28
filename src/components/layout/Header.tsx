import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import {
  Facebook, // Logo
  Search,
  Home,
  Users,      // For Groups or Friends
  Compass,    // For Explore
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Settings,
  LogOut,
  UserCircle as UserIcon // Generic user icon
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const currentUser = {
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    avatarUrl: 'https://via.placeholder.com/36x36.png?text=AD',
  };

  const mainNavLinks = [
    { id: 'home', label: 'Home', href: '/', icon: Home, isActive: true },
    { id: 'explore', label: 'Explore', href: '/explore', icon: Compass, isActive: false },
    { id: 'groups', label: 'Groups', href: '/groups', icon: Users, isActive: false },
  ];

  const userActionIcons = [
    { id: 'messages', icon: MessageCircle, count: 5, ariaLabel: 'Messages', href: '/messages' },
    { id: 'notifications', icon: Bell, count: 12, ariaLabel: 'Notifications', href: '/notifications' },
  ];

  return (
    <header className={cn('fixed top-0 left-0 right-0 h-16 bg-card shadow-sm flex items-center justify-between px-4 sm:px-6 z-50', className)}>
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <a href="/" aria-label="Homepage">
          <Facebook className="h-8 w-8 text-primary" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-3 py-2 h-10 w-60 rounded-full bg-background border-transparent focus:bg-background focus:border-ring"
          />
        </div>
      </div>

      {/* Center Section: Main Navigation Links */} 
      <nav className="hidden md:flex items-center space-x-1">
        {mainNavLinks.map(link => (
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
              <link.icon className={cn('h-6 w-6', link.isActive ? 'text-primary' : 'text-muted-foreground')} />
              {/* <span className="ml-2">{link.label}</span> */}{/* Label can be sr-only or visible depending on design */}
            </a>
          </Button>
        ))}
      </nav>

      {/* Right Section: User Actions & Profile */} 
      <div className="flex items-center space-x-1 sm:space-x-2">
        {userActionIcons.map(action => (
          <Button key={action.id} variant="ghost" size="icon" asChild className="rounded-full h-10 w-10 bg-secondary hover:bg-accent relative">
            <a href={action.href} aria-label={action.ariaLabel}>
              <action.icon className="h-5 w-5 text-foreground" />
              {action.count !== undefined && action.count > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 text-xs rounded-full flex items-center justify-center">
                  {action.count > 99 ? '99+' : action.count}
                </Badge>
              )}
            </a>
          </Button>
        ))}
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-secondary hover:bg-accent">
          <HelpCircle className="h-5 w-5 text-foreground" />
          <span className="sr-only">Help</span>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-0 bg-secondary hover:bg-accent">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.substring(0,1).toUpperCase()}</AvatarFallback>
              </Avatar>
              {/* <ChevronDown className="h-4 w-4 text-foreground ml-1 hidden sm:inline-block" /> */}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2 mr-2 sm:mr-0">
            <div className="p-2 flex items-start space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.substring(0,1).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground">{currentUser.email}</p>
              </div>
            </div>
            <Separator className="my-2" />
            <Button variant="ghost" className="w-full justify-start p-2 text-sm">
              <UserIcon className="h-4 w-4 mr-2" /> Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start p-2 text-sm">
              <Settings className="h-4 w-4 mr-2" /> Settings
            </Button>
            <Separator className="my-2" />
            <Button variant="ghost" className="w-full justify-start p-2 text-sm text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut className="h-4 w-4 mr-2" /> Log Out
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
