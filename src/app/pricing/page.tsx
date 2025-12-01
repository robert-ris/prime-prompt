import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Check} from "lucide-react"
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>Perfect for trying out</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-zinc-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">3 prompts per day</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Last 10 prompts history</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Access to all platforms</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-500">
                  <span className="h-4 w-4" />
                  <span className="text-sm">No templates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/signup" className="w-full">
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="border-white/20 bg-gradient-to-br from-zinc-900 to-zinc-950 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <CardDescription>For power users</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-zinc-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold">Unlimited prompts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold">Unlimited history</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold">Unlimited templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold">Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <form action="/api/stripe/checkout" method="POST" className="w-full">
                <Button className="w-full bg-white text-black hover:bg-zinc-200">
                  Subscribe Now
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
