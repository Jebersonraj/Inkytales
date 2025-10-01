"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface Comment {
  id: string
  username: string
  comment: string
  timestamp: string
}

interface CommentModalProps {
  quoteId: string
  trigger: React.ReactNode
}

export function CommentModal({ quoteId, trigger }: CommentModalProps) {
  const [comments, setComments] = useState<Comment[]>([
    { id: "c1", username: "Reader1", comment: "Beautiful quote!", timestamp: "2 hours ago" },
    { id: "c2", username: "Bookworm", comment: "So true, love this!", timestamp: "1 hour ago" },
  ])
  const [newComment, setNewComment] = useState("")

  const handlePostComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: String(comments.length + 1),
        username: "Current_User", // Placeholder for current user
        comment: newComment,
        timestamp: "Just now",
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif">Comments</DialogTitle>
          <DialogDescription>Share your thoughts on this quote.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="max-h-60 overflow-y-auto pr-2">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-3 mb-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?key=06f8t" alt={comment.username} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-sm">
                      {comment.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{comment.username}</span>
                      <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm">{comment.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground">No comments yet. Be the first!</p>
            )}
          </div>
          <div className="flex gap-2">
            <Textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 resize-none"
            />
            <Button onClick={handlePostComment}>Post</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
