import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { FileIcon as FireIcon } from "lucide-react" // Corrected import for FireIcon

interface ProfileHeaderProps {
  username: string
  bio?: string
  streak: number
}

export function ProfileHeader({ username, bio, streak }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg shadow-md">
      <Avatar className="w-24 h-24">
        <AvatarImage src="/placeholder.svg?key=06f8t" alt={`${username}'s avatar`} />
        <AvatarFallback className="text-4xl font-serif bg-primary text-primary-foreground">
          {username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <h2 className="text-3xl font-serif font-bold">{username}</h2>
      {bio && <p className="text-muted-foreground text-center max-w-prose">{bio}</p>}
      <div className="flex items-center gap-2 text-lg font-medium text-accent animate-pulse">
        {" "}
        {/* Added animate-pulse for a subtle gamification effect */}
        <FireIcon className="w-6 h-6 text-red-500" /> {/* Added text-red-500 for a more prominent fire icon */}
        <span>{streak} Day Streak</span>
      </div>
    </div>
  )
}
