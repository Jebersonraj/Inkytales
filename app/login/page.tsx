"use client"

import type React from "react"

import { AuthForm } from "@/components/auth-form"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle login logic here
    console.log("Login form submitted")
    // For now, redirect to home after login
    router.push("/")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <AuthForm type="login" onSubmit={handleSubmit} />
    </div>
  )
}
