"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { DateTimePickerComponent } from "../../components/ui/date-time-picker"
import { Label } from "../../components/ui/label"

export default function CreateEventForm() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create New Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Event Name</Label>
            <Input id="name" placeholder="Enter event name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter event description" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date & Time</Label>
              <DateTimePickerComponent />
            </div>
            <div className="space-y-2">
              <Label>End Date & Time</Label>
              <DateTimePickerComponent />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter event location" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="community">Community</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a community" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="community1">Community 1</SelectItem>
                <SelectItem value="community2">Community 2</SelectItem>
                <SelectItem value="community3">Community 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ticketPrice">Ticket Price</Label>
              <Input id="ticketPrice" type="number" placeholder="Enter ticket price" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacity">Accommodation Capacity</Label>
              <Input id="capacity" type="number" placeholder="Enter capacity" required />
            </div>
          </div>

          <Button type="submit" className="w-full">Create Event</Button>
        </form>
      </CardContent>
    </Card>
  )
}
