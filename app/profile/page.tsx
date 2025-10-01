import { ProfileHeader } from "@/components/profile-header"
import { UserQuotes } from "@/components/user-quotes"
import { QuoteCard } from "@/components/quote-card" // Import QuoteCard for UserQuotes

export default function ProfilePage() {
  // Placeholder for user data and their quotes
  const user = {
    username: "InkyTales_Reader",
    bio: "A passionate reader and lover of words. Sharing my favorite literary gems.",
    streak: 7,
  }

  const userQuotes = [
    {
      id: "4",
      quote: "The unexamined life is not worth living.",
      genre: "Philosophy",
      author: "Socrates",
    },
    {
      id: "5",
      quote: "All that is gold does not glitter, not all those who wander are lost.",
      genre: "Fantasy",
      author: "J.R.R. Tolkien",
    },
  ]

  return (
    <main className="container mx-auto py-8 px-4 flex flex-col items-center gap-8">
      <ProfileHeader username={user.username} bio={user.bio} streak={user.streak} />
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-serif font-bold text-center text-balance mb-6">My Quotes</h2>
        <UserQuotes quotes={userQuotes} QuoteCardComponent={QuoteCard} />
      </section>
    </main>
  )
}
