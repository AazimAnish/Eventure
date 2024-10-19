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
import { ReactNode } from "react";
import { GlareCard } from "../../components/ui/glare-card";

interface CommunityCardProps {
  communityName: string;
  description: string;
}

interface CommunityDetailsDialogProps {
  communityName: string;
  description: string;
}

interface EventCardProps {
  eventName: string;
  description: string;
}

export default function CommunityDashboard(): ReactNode {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Community Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CommunityCard
          communityName="Blockchain Enthusiasts"
          description="A community for blockchain technology enthusiasts and developers."
        />
        {/* Add more CommunityCard components as needed */}
      </div>
    </div>
  );
}

function CommunityCard({ communityName, description }: CommunityCardProps): ReactNode {
  return (
    <CardSpotlight className="h-96 w-full rounded-3xl">
      <div className="relative z-20 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{communityName}</h2>
          <p className="text-neutral-200 mb-4">{description}</p>
        </div>
        <div className="flex space-x-10 justify-center">
          <CommunityDetailsDialog communityName={communityName} description={description} />
          <EventsDialog communityName={communityName} />
        </div>
      </div>
    </CardSpotlight>
  );
}

function CommunityDetailsDialog({ communityName, description }: CommunityDetailsDialogProps): ReactNode {
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
              <p id="instagram" className="col-span-3">@{communityName.toLowerCase().replace(/\s/g, '')}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="linkedin" className="text-right">LinkedIn</Label>
              <p id="linkedin" className="col-span-3">linkedin.com/company/{communityName.toLowerCase().replace(/\s/g, '-')}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="twitter" className="text-right">Twitter</Label>
              <p id="twitter" className="col-span-3">@{communityName.toLowerCase().replace(/\s/g, '_')}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="creator" className="text-right">Creator</Label>
              <p id="creator" className="col-span-3">0x1234...5678</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Follow</Button>
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
