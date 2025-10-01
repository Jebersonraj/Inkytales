import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GenresPage() {
  const genres = [
    "Fantasy",
    "Romance",
    "Philosophy",
    "History",
    "Sci-Fi",
    "Mystery",
    "Thriller",
    "Poetry",
    "Biography",
    "Self-help",
  ]

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-serif font-bold text-center text-balance mb-8">Browse by Genre</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {genres.map((genre) => (
          <Link href={`/genres/${genre.toLowerCase().replace(/\s+/g, "-")}`} key={genre}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-center">{genre}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                {/* Placeholder for genre icon or image */}
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-muted-foreground">
                  {genre.charAt(0)}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
