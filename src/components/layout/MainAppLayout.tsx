import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, rightSidebarContent, className }) => {
  const hasRightSidebar = Boolean(rightSidebarContent);

  return (
    <div className={cn("min-h-screen flex flex-col bg-background", className)}>
      <Header />
      <div className="flex flex-1 pt-16"> {/* pt-16 for fixed header height */}
        <Sidebar />
        <main
          className={cn(
            'flex-1 overflow-y-auto p-6',
            'ml-72', // Space for fixed left sidebar (width w-72)
            hasRightSidebar ? 'mr-80' : 'mr-0' // Space for fixed right sidebar (width w-80)
          )}
        >
          <div className="max-w-full mx-auto">
             {/* Container for main content if needed, e.g., max-w-7xl */} 
            {children}
          </div>
        </main>
        {hasRightSidebar && (
          <aside 
            className={cn(
              'fixed top-16 right-0 bottom-0 w-80 border-l border-border bg-card overflow-y-auto p-4',
              'flex flex-col space-y-4' // Added flex for internal layout of right sidebar items
            )}
          >
            {rightSidebarContent}
          </aside>
        )}
      </div>
    </div>
  );
};

export default MainAppLayout;
