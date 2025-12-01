import {createClient} from '@/lib/supabase/server'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Clock} from "lucide-react"
import Link from 'next/link'

export default async function HistoryPage() {
  const supabase = await createClient()
  const {data: {user}} = await supabase.auth.getUser()

  if (!user) {
    return <div>Please log in to view history.</div>
  }

  // Check subscription status for limits
  const {data: subscription} = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', user.id)
    .single()

  const isPro = subscription?.status === 'active'
  const limit = isPro ? 1000 : 10

  const {data: prompts} = await supabase
    .from('prompts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', {ascending: false})
    .limit(limit)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">History</h2>
          <p className="text-zinc-400 mt-2">
            {isPro ? 'Unlimited history' : `Last ${prompts?.length || 0} of 10 prompts`}
          </p>
        </div>
        {!isPro && (
          <Link href="/pricing">
            <Button variant="outline">Upgrade for Unlimited</Button>
          </Link>
        )}
      </div>

      <div className="space-y-4">
        {prompts?.map((prompt) => (
          <Card key={prompt.id} className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base">{prompt.idea}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Clock className="h-3 w-3" />
                    {new Date(prompt.created_at).toLocaleString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2 text-xs text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-800 rounded">{prompt.role}</span>
                  <span className="px-2 py-1 bg-zinc-800 rounded">{prompt.tone}</span>
                  <span className="px-2 py-1 bg-zinc-800 rounded">{prompt.platform}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-zinc-300 font-mono bg-zinc-950 p-4 rounded border border-zinc-800 line-clamp-3">
                {prompt.result}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/builder" className="w-full">
                <Button variant="outline" className="w-full">
                  Reuse Configuration
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}

        {prompts?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500 border border-dashed border-zinc-800 rounded-lg">
            <p className="mb-4">No prompts generated yet.</p>
            <Link href="/dashboard/builder">
              <Button>Create your first prompt</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
