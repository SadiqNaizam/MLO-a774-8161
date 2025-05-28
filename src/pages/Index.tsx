import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import StatusUpdateWidget from '@/components/NewsFeed/StatusUpdateWidget';
import PostCard from '@/components/NewsFeed/PostCard';
import RightSidebarStories from '@/components/Stories/RightSidebarStories';
import SuggestedGroupsWidget from '@/components/Suggestions/SuggestedGroupsWidget';
import { Users2, Globe } from 'lucide-react';

// Interfaces for PostCard data
interface PostUser {
  name: string;
  avatarUrl: string;
}

interface PostLocation {
  name: string;
  type: string;
}

// This interface is derived from PostCardProps in PostCard.tsx
interface PostData {
  id: string;
  user: PostUser;
  timestamp: string;
  privacyIcon?: React.ElementType;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  location?: PostLocation;
  taggedInfo?: string;
  likes: number;
  comments: number;
  shares: number;
}

const postsData: PostData[] = [
  {
    id: 'post_1',
    user: { name: 'Julia Fillory', avatarUrl: 'https://via.placeholder.com/40x40.png?text=JF' },
    timestamp: '2 hrs ago',
    privacyIcon: Users2,
    content: 'Checking out some new stores downtown! It\'s such a vibrant area, loving the atmosphere and unique finds. Can\'t wait to explore more tomorrow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Downtown+Raleigh+Exploration',
    imageAlt: 'A bustling street in downtown Raleigh with shops and pedestrians',
    location: { name: 'Raleigh, North Carolina', type: 'City - United States' },
    taggedInfo: 'Bryan Durand and 2 others have been here',
    likes: 128,
    comments: 17,
    shares: 5,
  },
  {
    id: 'post_2',
    user: { name: 'Alex Doe', avatarUrl: 'https://via.placeholder.com/40x40.png?text=AD' },
    timestamp: '5 hrs ago',
    privacyIcon: Globe,
    content: "Just had a great lunch! Feeling energized for the rest of the day. 🥗☕️\nWorking on a new project, feeling inspired!\n#foodie #productive #afternoonboost #newbeginnings",
    likes: 75,
    comments: 12,
    shares: 2,
  },
  {
    id: 'post_3',
    user: { name: 'Olenna Mason', avatarUrl: 'https://via.placeholder.com/40x40.png?text=OM' },
    timestamp: '1 day ago',
    privacyIcon: Users2,
    content: "Beautiful sunset today! 🌅 The colors were absolutely breathtaking. Nature's art at its finest. Sometimes it's the simple things that bring the most joy.",
    imageUrl: 'https://via.placeholder.com/600x350.png?text=Sunset+Over+Mountains',
    imageAlt: 'Vibrant sunset with orange and purple hues over a mountain landscape',
    likes: 230,
    comments: 45,
    shares: 11,
  },
  {
    id: 'post_4',
    user: { name: 'TechReviewer Tom', avatarUrl: 'https://via.placeholder.com/40x40.png?text=TR' },
    timestamp: '3 days ago',
    privacyIcon: Globe,
    content: "Excited to share my thoughts on the new XYZ gadget. Full review coming soon! It's packed with features but how does it perform in real-world usage? Spoiler: it's pretty impressive, but with a few caveats. Stay tuned! 💻📱 #techreview #gadget #xyz",
    likes: 95,
    comments: 22,
    shares: 8,
  }
];

const NewsFeedPage: React.FC = () => {
  const mainContent = (
    <div className="flex flex-col gap-6">
      <StatusUpdateWidget />
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );

  const rightSidebarContent = (
    <>
      <RightSidebarStories />
      <SuggestedGroupsWidget />
    </>
  );

  return (
    <MainAppLayout rightSidebarContent={rightSidebarContent}>
      {mainContent}
    </MainAppLayout>
  );
};

export default NewsFeedPage;
