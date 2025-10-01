import Link from "next/link"

export function Header() {
  // In a real app, you'd fetch user session here
  const user = null // Placeholder for user session

  return (
    <header className="bg-background border-b border-border py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-serif font-bold text-primary">
        InkyTales
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/genres" className="text-foreground hover:text-primary transition-colors">
          Genres
        </Link>
        {user ? (
          <Link href="/profile" className="text-foreground hover:text-primary transition-colors">
            Profile
          </Link>
        ) : (
          <>
            <Link href="/login" className="text-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
