"use client"

import type React from "react"

import { AuthForm } from "@/components/auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle signup logic here
    console.log("Signup form submitted")
    // For now, redirect to login after signup
    router.push("/login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <AuthForm type="signup" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="inkytales_reader" required />
        </div>
      </AuthForm>
    </div>
  )
}
