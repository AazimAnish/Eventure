"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Label } from "../../components/ui/label"

export default function CreateCommunityForm() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create New Community</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Community Name</Label>
            <Input id="name" placeholder="Enter community name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter community description" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instaHandle">Instagram Handle</Label>
            <Input id="instaHandle" placeholder="Enter Instagram handle" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedinHandle">LinkedIn Handle</Label>
            <Input id="linkedinHandle" placeholder="Enter LinkedIn handle" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitterHandle">Twitter Handle</Label>
            <Input id="twitterHandle" placeholder="Enter Twitter handle" required />
          </div>

          <Button type="submit" className="w-full">Create Community</Button>
        </form>
      </CardContent>
    </Card>
  )
}

