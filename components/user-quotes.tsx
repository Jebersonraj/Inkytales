import { QuoteCard } from "./quote-card"

interface UserQuotesProps {
  quotes: Array<{
    id: string
    quote: string
    genre: string
    author?: string
  }>
}

export function UserQuotes({ quotes }: UserQuotesProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
      {quotes.length > 0 ? (
        quotes.map((q) => <QuoteCard key={q.id} id={q.id} quote={q.quote} genre={q.genre} author={q.author} />)
      ) : (
        <p className="text-center text-muted-foreground col-span-full">No quotes posted yet.</p>
      )}
    </div>
  )
}
