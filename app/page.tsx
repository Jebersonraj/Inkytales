import Link from "next/link"
import { QuoteCard } from "@/components/quote-card"

export default function HomePage() {
  // Placeholder for latest quotes data
  const latestQuotes = [
    {
      id: "1",
      quote: "The only way to do great work is to love what you do.",
      genre: "Philosophy",
      author: "Steve Jobs",
    },
    {
      id: "2",
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      genre: "Fantasy",
      author: "J.K. Rowling",
    },
    {
      id: "3",
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      genre: "Self-help",
      author: "Ralph Waldo Emerson",
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-background text-foreground p-4">
      <h1 className="text-5xl font-serif font-bold text-balance mb-8">Latest Quotes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {latestQuotes.map((q) => (
          <QuoteCard key={q.id} id={q.id} quote={q.quote} genre={q.genre} author={q.author} />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/post-quote"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-primary/90 transition-colors"
        >
          Post a Quote
        </Link>
      </div>
    </main>
  )
}
