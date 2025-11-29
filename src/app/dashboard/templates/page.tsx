import {createClient} from '@/lib/supabase/server'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Plus, Trash2, Edit} from "lucide-react"
import {deleteTemplate} from './actions'
import Link from 'next/link'

export default async function TemplatesPage() {
  const supabase = await createClient()
  const {data: {user}} = await supabase.auth.getUser()

  if (!user) {
    return <div>Please log in to view templates.</div>
  }

  const {data: templates} = await supabase
    .from('templates')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', {ascending: false})

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Templates</h2>
          <p className="text-zinc-400 mt-2">
            Manage your saved prompt templates.
          </p>
        </div>
        <Link href="/dashboard/builder">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Template
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates?.map((template) => (
          <Card key={template.id} className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {template.description || "No description"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-zinc-400 font-mono bg-zinc-950 p-3 rounded border border-zinc-800 line-clamp-4">
                {template.content}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <form action={async () => {
                'use server'
                await deleteTemplate(template.id)
              }}>
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-red-400">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </form>
              {/* Edit functionality would go here, maybe a dialog */}
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                <Edit className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        {templates?.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-zinc-500 border border-dashed border-zinc-800 rounded-lg">
            <p className="mb-4">You haven't created any templates yet.</p>
            <Link href="/dashboard/builder">
              <Button variant="outline">Create your first template</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
