import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Users2, // Privacy icon (e.g., Friends)
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Globe
} from 'lucide-react';

interface PostCardProps {
  post: {
    id: string;
    user: {
      name: string;
      avatarUrl: string;
    };
    timestamp: string;
    privacyIcon?: React.ElementType; // Optional, can default to Globe or Users2
    content: string;
    imageUrl?: string;
    imageAlt?: string;
    location?: {
      name: string;
      type: string;
    };
    taggedInfo?: string; // e.g., "Bryan Durand and 2 others have been here"
    likes: number;
    comments: number;
    shares: number;
  };
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  const { 
    user, timestamp, privacyIcon: PrivacyIcon = Users2, content, 
    imageUrl, imageAlt = 'Post image', location, taggedInfo, 
    likes, comments, shares 
  } = post;

  return (
    <Card className={cn('w-full shadow-md rounded-lg', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <a href="#" className="font-semibold text-sm text-foreground hover:underline">
                {user.name}
              </a>
              {location && <span className='text-sm text-muted-foreground'> is in <a href='#' className='font-semibold text-sm text-foreground hover:underline'>{location.name}</a>.</span>}
              <div className="text-xs text-muted-foreground flex items-center">
                <span>{timestamp}</span>
                <span className="mx-1">·</span>
                <PrivacyIcon className="h-3 w-3" />
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent h-8 w-8">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {content && <p className="px-4 pb-3 text-sm text-foreground whitespace-pre-wrap">{content}</p>}
        {imageUrl && (
          <div className="bg-gray-200 dark:bg-gray-700">
            <img src={imageUrl} alt={imageAlt} className="w-full object-cover max-h-[400px]" />
          </div>
        )}
        {location && taggedInfo && (
            <div className='px-4 py-3 border-t border-border flex justify-between items-center'>
                <div>
                    <p className='font-semibold text-sm text-foreground'>{location.name}</p>
                    <p className='text-xs text-muted-foreground'>{location.type}</p>
                    <p className='text-xs text-muted-foreground'>{taggedInfo}</p>
                </div>
                <Button variant='outline' size='sm'>Save</Button>
            </div>
        )}
      </CardContent>
      {(likes > 0 || comments > 0) && (
         <div className="px-4 pt-3 pb-1 flex justify-between items-center text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
                {likes > 0 && <><ThumbsUp className='h-3 w-3 text-primary fill-primary'/> <span>{likes}</span></>}
            </div>
            <div className="space-x-2">
                {comments > 0 && <span>{comments} comments</span>}
                {shares > 0 && <span>{shares} shares</span>}
            </div>
        </div>
      )}
      <Separator className="mx-4 bg-border" />
      <CardFooter className="p-2 flex justify-around">
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent">
          <ThumbsUp className="h-5 w-5 mr-2" /> Like
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent">
          <MessageSquare className="h-5 w-5 mr-2" /> Comment
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent">
          <Share2 className="h-5 w-5 mr-2" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
};

// Example usage (not part of the component file itself, but for demonstration)
// const samplePostData = {
//   id: '1',
//   user: { name: 'Julia Fillory', avatarUrl: 'https://via.placeholder.com/40x40.png?text=JF' },
//   timestamp: '2 hrs',
//   content: 'Checking out some new stores downtown!',
//   imageUrl: 'https://via.placeholder.com/600x300.png?text=Raleigh+Map',
//   location: { name: 'Raleigh, North Carolina', type: 'City - United States' },
//   taggedInfo: 'Bryan Durand and 2 others have been here',
//   likes: 120,
//   comments: 15,
//   shares: 7,
// };
// <PostCard post={samplePostData} />

export default PostCard;
