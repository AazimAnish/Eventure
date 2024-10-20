"use client";

import { CardSpotlight } from "../../components/ui/card-spotlight";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { ReactNode, useState } from "react";
import { GlareCard } from "../../components/ui/glare-card";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface CommunityCardProps {
  communityId: string;
  communityName: string;
  description: string;
  instagramHandle: string;
  linkedinHandle: string;
  twitterHandle: string;
  creatorAddress: string;
  followerCount: number;
}

interface CommunityDetailsDialogProps {
  communityId: string;
  communityName: string;
  description: string;
  instagramHandle: string;
  linkedinHandle: string;
  twitterHandle: string;
  creatorAddress: string;
  followerCount: number;
}

interface EventCardProps {
  eventName: string;
  description: string;
}

export default function CommunityDashboard(): ReactNode {
  const { data: communities } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "getAllCommunities",
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Community Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities && communities[0].map((id, index) => (
          <CommunityCard
            key={id.toString()}
            communityId={id.toString()}
            communityName={communities[1][index]}
            description={communities[2][index]}
            instagramHandle={communities[3][index]}
            linkedinHandle={communities[4][index]}
            twitterHandle={communities[5][index]}
            creatorAddress={communities[6][index]}
            followerCount={Number(communities[7][index])}
          />
        ))}
      </div>
    </div>
  );
}

function CommunityCard({ communityId, communityName, description, instagramHandle, linkedinHandle, twitterHandle, creatorAddress, followerCount }: CommunityCardProps): ReactNode {
  return (
    <CardSpotlight className="h-96 w-full rounded-3xl">
      <div className="relative z-20 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{communityName}</h2>
          <p className="text-neutral-200 mb-4">{description}</p>
          <p className="text-sm text-neutral-300">Followers: {followerCount}</p>
        </div>
        <div className="flex space-x-4 justify-center"> {/* Reduced gap between buttons */}
          <CommunityDetailsDialog 
            communityId={communityId}
            communityName={communityName} 
            description={description}
            instagramHandle={instagramHandle}
            linkedinHandle={linkedinHandle}
            twitterHandle={twitterHandle}
            creatorAddress={creatorAddress}
            followerCount={followerCount}
          />
          <EventsDialog communityName={communityName} />
        </div>
      </div>
    </CardSpotlight>
  );
}

function CommunityDetailsDialog({ communityId, communityName, description, instagramHandle, linkedinHandle, twitterHandle, creatorAddress, followerCount }: CommunityDetailsDialogProps): ReactNode {
  const [isFollowing, setIsFollowing] = useState(false);
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("YourContract");

  const handleFollowClick = async () => {
    try {
      await writeYourContractAsync({
        functionName: "followCommunity",
        args: [BigInt(communityId)],
      });
      setIsFollowing(!isFollowing);
    } catch (e) {
      console.error("Error following/unfollowing community:", e);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Community Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{communityName}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="instagram" className="text-right">Instagram</Label>
              <p id="instagram" className="col-span-3">@{instagramHandle}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="linkedin" className="text-right">LinkedIn</Label>
              <p id="linkedin" className="col-span-3">{linkedinHandle}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="twitter" className="text-right">Twitter</Label>
              <p id="twitter" className="col-span-3">@{twitterHandle}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="creator" className="text-right">Creator</Label>
              <p id="creator" className="col-span-3">{creatorAddress}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="followers" className="text-right">Followers</Label>
              <p id="followers" className="col-span-3">{followerCount}</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleFollowClick}>
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EventsDialog({ communityName }: { communityName: string }): ReactNode {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Community Events</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Events by {communityName}</DialogTitle>
          <DialogDescription>Upcoming and past events</DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto p-4">
          <div className="grid gap-4">
            <EventCard
              eventName="Web3 Hackathon 2024"
              description="Join us for an exciting 48-hour hackathon focused on Web3 technologies."
            />
            <EventCard
              eventName="Blockchain Workshop"
              description="Learn the basics of blockchain technology in this hands-on workshop."
            />
            {/* Add more EventCard components as needed */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function EventCard({ eventName, description }: EventCardProps): ReactNode {
  return (
    <GlareCard className="flex flex-col items-center justify-center p-4">
      <h3 className="text-white font-bold text-xl mb-2">{eventName}</h3>
      <p className="text-neutral-200 text-center">{description}</p>
    </GlareCard>
  );
}
