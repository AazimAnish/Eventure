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
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { ReactNode } from "react";

interface EventCardProps {
  eventName: string;
  description: string;
  communityName: string;
}

interface EventDetailsDialogProps {
  eventName: string;
  communityName: string;
}

interface BountyDetailsDialogProps {
  eventName: string;
}

export default function EventDashboard(): ReactNode {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Event Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          eventName="Web3 Conference 2024"
          description="Join us for the biggest Web3 event of the year!"
          communityName="Blockchain Enthusiasts"
        />
        {/* Add more EventCard components as needed */}
      </div>
    </div>
  );
}

function EventCard({ eventName, description, communityName }: EventCardProps): ReactNode {
  return (
    <CardSpotlight className="h-96 w-full rounded-3xl">
      <div className="relative z-20 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{eventName}</h2>
          <p className="text-neutral-200 mb-4">{description}</p>
          <p className="text-sm text-neutral-300">by {communityName}</p>
        </div>
        <div className="flex space-x-16 justify-center">
          <EventDetailsDialog eventName={eventName} communityName={communityName} />
          <BountyDetailsDialog eventName={eventName} />
        </div>
      </div>
    </CardSpotlight>
  );
}

function EventDetailsDialog({ eventName, communityName }: EventDetailsDialogProps): ReactNode {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Event Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{eventName}</DialogTitle>
          <DialogDescription>by {communityName}</DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <p id="description" className="col-span-3">Detailed event description goes here.</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">Time</Label>
              <p id="time" className="col-span-3">Start: 2024-06-01 10:00 AM<br />End: 2024-06-03 5:00 PM</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">Location</Label>
              <p id="location" className="col-span-3">San Francisco Convention Center</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="creator" className="text-right">Creator</Label>
              <p id="creator" className="col-span-3">0x1234...5678</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ticket" className="text-right">Ticket Price</Label>
              <p id="ticket" className="col-span-3">0.5 ETH</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="capacity" className="text-right">Capacity</Label>
              <p id="capacity" className="col-span-3">1000 attendees</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sponsors" className="text-right">Sponsors</Label>
              <p id="sponsors" className="col-span-3">
                0xabcd...efgh (10 ETH)<br />
                0x9876...5432 (5 ETH)
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Buy Ticket</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function BountyDetailsDialog({ eventName }: BountyDetailsDialogProps): ReactNode {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Bounty Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-4">
        <DialogHeader>
          <DialogTitle>Bounty for {eventName}</DialogTitle>
          <DialogDescription>View and contribute to event bounties</DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto p-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bountyTitle" className="text-right">Bounty Title</Label>
              <p id="bountyTitle" className="col-span-3">Best DeFi Project</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bountyDescription" className="text-right">Description</Label>
              <p id="bountyDescription" className="col-span-3">Create an innovative DeFi project during the hackathon.</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="totalAmount" className="text-right">Total Amount</Label>
              <p id="totalAmount" className="col-span-3">5 ETH</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="contribution" className="text-right">Contribute</Label>
              <Input id="contribution" placeholder="Amount in ETH" className="col-span-3" />
            </div>
          </div>
        </div>
        <DialogFooter className="p-4">
          <Button type="submit">Fund Bounty</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
