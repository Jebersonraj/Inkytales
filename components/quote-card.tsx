"use client"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { HeartIcon, MessageCircleIcon, BookmarkIcon } from "lucide-react"
import { CommentModal } from "./comment-modal"

interface QuoteCardProps {
  quote: string
  genre: string
  author?: string
  id: string // Added id for unique key and comment modal
}

export function QuoteCard({ quote, genre, author, id }: QuoteCardProps) {
  const [likes, setLikes] = useState(0) // Placeholder for likes
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
    setIsLiked((prev) => !prev)
  }

  const handleSave = () => {
    setIsSaved((prev) => !prev)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <p className="text-sm text-muted-foreground">{genre}</p>
      </CardHeader>
      <CardContent>
        <blockquote className="text-lg font-serif italic leading-relaxed">&ldquo;{quote}&rdquo;</blockquote>
        {author && <p className="text-right text-sm text-muted-foreground mt-2">- {author}</p>}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLike}
            className={isLiked ? "text-primary hover:text-primary/80" : "text-foreground hover:text-primary"}
          >
            <HeartIcon className="w-5 h-5 fill-current" />
            <span className="sr-only">Like</span>
          </Button>
          <CommentModal
            quoteId={id}
            trigger={
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <MessageCircleIcon className="w-5 h-5" />
                <span className="sr-only">Comment</span>
              </Button>
            }
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSave}
            className={isSaved ? "text-primary hover:text-primary/80" : "text-foreground hover:text-primary"}
          >
            <BookmarkIcon className="w-5 h-5 fill-current" />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          <span>{likes} Likes</span> &bull; <span>0 Comments</span> {/* Placeholder for comment count */}
        </div>
      </CardFooter>
    </Card>
  )
}
