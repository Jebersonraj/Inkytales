"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function QuoteForm() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle quote submission logic here
    console.log("Quote form submitted")
    // For now, redirect to home after submission
    router.push("/")
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif">Post a New Quote</CardTitle>
        <CardDescription>Share your favorite words of wisdom with the InkyTales community.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <Label htmlFor="quote-text">Quote</Label>
            <Textarea id="quote-text" placeholder="Type your quote here..." rows={5} required className="resize-none" />
          </div>
          <div>
            <Label htmlFor="genre">Genre</Label>
            <Input id="genre" type="text" placeholder="e.g., Fantasy, Philosophy" required />
          </div>
          <div>
            <Label htmlFor="author">Author (Optional)</Label>
            <Input id="author" type="text" placeholder="e.g., J.R.R. Tolkien" />
          </div>
          <Button type="submit" className="w-full">
            Post Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
