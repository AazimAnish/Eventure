"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Table, TableHeader, TableCell, TableRow, TableBody } from "../../components/ui/table"

// Custom List component in shadcn style
const List = ({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={`space-y-1 ${className}`} {...props}>
      {children}
    </ul>
  )
}

const ListItem = ({ children, className, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={`text-sm ${className}`} {...props}>
      {children}
    </li>
  )
}

export default function Profile() {
  // Demo data
  const userData = {
    walletAddress: "0x1234...5678",
    fundedEvents: [
      { event: "Event 1", amount: 100 },
      { event: "Event 2", amount: 200 },
      { event: "Event 3", amount: 300 },
    ],
    joinedCommunity: ["Community 1", "Community 2", "Community 3"],
    ticketOwned: [
      { event: "Summer Music Festival", time: "2024-07-15 14:00", location: "Central Park, NY" },
      { event: "Tech Conference 2024", time: "2024-09-20 09:00", location: "Convention Center, SF" },
      { event: "Art Exhibition", time: "2024-11-05 11:00", location: "Modern Art Museum, LA" },
    ],
    userCreatedEvents: [
      { event: "Event 1", date: "2024-01-01" },
      { event: "Event 2", date: "2024-01-15" },
      { event: "Event 3", date: "2024-02-01" },
    ],
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="walletAddress">Wallet Address</Label>
          <Input id="walletAddress" defaultValue={userData.walletAddress} disabled />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fundedEvents">Funded Events</Label>
          <Table>
            <TableHeader>
              <TableCell>Event</TableCell>
              <TableCell>Amount Funded</TableCell>
            </TableHeader>
            <TableBody>
              {userData.fundedEvents.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.event}</TableCell>
                  <TableCell>${event.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-2">
          <Label htmlFor="joinedCommunity">Joined Community</Label>
          <List>
            {userData.joinedCommunity.map((community, index) => (
              <ListItem key={index}>{community}</ListItem>
            ))}
          </List>
        </div>

        <div className="space-y-2">
          <Label htmlFor="ticketOwned">Ticket Owned</Label>
          <div className="space-y-4">
            {userData.ticketOwned.map((ticket, index) => (
              <Card key={index} className="p-4">
                <CardContent className="space-y-2 p-0">
                  <div className="font-semibold">{ticket.event}</div>
                  <div className="text-sm text-gray-600">Time: {ticket.time}</div>
                  <div className="text-sm text-gray-600">Location: {ticket.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="userCreatedEvents">User Created Events</Label>
          <List>
            {userData.userCreatedEvents.map((event, index) => (
              <ListItem key={index}>{event.event} ({event.date})</ListItem>
            ))}
          </List>
        </div>
      </CardContent>
    </Card>
  )
}