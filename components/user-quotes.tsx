import { QuoteCardProps } from "./quote-card"

export type UserQuotesProps = {
    quotes: QuoteCardProps[]
    QuoteCardComponent: React.ComponentType<QuoteCardProps>
}

export function UserQuotes({ quotes, QuoteCardComponent }: UserQuotesProps) {
    return (
        <div>
            {quotes.map((quote) => (
                <QuoteCardComponent key={quote.id} {...quote} />
            ))}
        </div>
    )
}
