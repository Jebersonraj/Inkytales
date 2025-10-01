"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"

interface AuthFormProps {
  type: "login" | "signup"
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children?: React.ReactNode
}

export function AuthForm({ type, onSubmit, children }: AuthFormProps) {
  const isLogin = type === "login"
  const title = isLogin ? "Login to InkyTales" : "Create an Account"
  const description = isLogin
    ? "Enter your credentials to access your account."
    : "Enter your details to create a new account."
  const buttonText = isLogin ? "Login" : "Sign Up"
  const linkText = isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"
  const linkHref = isLogin ? "/signup" : "/login"

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          {children} {/* For additional fields like username in signup */}
          <Button type="submit" className="w-full">
            {buttonText}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <Link href={linkHref} className="underline text-primary hover:text-primary/80">
            {linkText}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
