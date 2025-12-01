import {createClient} from '@/lib/supabase/server'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {PenTool, History, BookOpen} from "lucide-react"
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {data: {user}} = await supabase.auth.getUser()

  if (!user) {
    return <div>Please log in.</div>
  }

  // Get stats
  const {count: promptCount} = await supabase
    .from('prompts')
    .select('*', {count: 'exact', head: true})
    .eq('user_id', user.id)

  const {count: templateCount} = await supabase
    .from('templates')
    .select('*', {count: 'exact', head: true})
    .eq('user_id', user.id)

  const {data: subscription} = await supabase
    .from('subscriptions')
    .select('status, plan_id')
    .eq('user_id', user.id)
    .single()

  const isPro = subscription?.status === 'active'

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-zinc-400 mt-2">
          {isPro ? '✨ Pro Account' : 'Free Account'} • {user.email}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prompts Generated</CardTitle>
            <PenTool className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{promptCount || 0}</div>
            <p className="text-xs text-zinc-500 mt-1">Total prompts created</p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Templates Saved</CardTitle>
            <BookOpen className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{templateCount || 0}</div>
            <p className="text-xs text-zinc-500 mt-1">Reusable configurations</p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Plan Status</CardTitle>
            <History className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isPro ? 'Pro' : 'Free'}</div>
            <p className="text-xs text-zinc-500 mt-1">
              {isPro ? 'Unlimited access' : '3 prompts/day'}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Start creating prompts or manage your templates</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Link href="/dashboard/builder">
              <Button className="w-full">
                <PenTool className="mr-2 h-4 w-4" />
                Create New Prompt
              </Button>
            </Link>
            <Link href="/dashboard/templates">
              <Button variant="outline" className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                View Templates
              </Button>
            </Link>
            <Link href="/dashboard/history">
              <Button variant="outline" className="w-full">
                <History className="mr-2 h-4 w-4" />
                View History
              </Button>
            </Link>
          </CardContent>
        </Card>

        {!isPro && (
          <Card className="border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950">
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>Unlock unlimited prompts and templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-sm space-y-2 text-zinc-300">
                <li>✓ Unlimited prompt generations</li>
                <li>✓ Unlimited history</li>
                <li>✓ Unlimited templates</li>
                <li>✓ Priority support</li>
              </ul>
              <Link href="/pricing" className="block mt-4">
                <Button className="w-full bg-white text-black hover:bg-zinc-200">
                  Upgrade Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
