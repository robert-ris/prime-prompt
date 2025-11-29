import {PromptForm} from "@/components/prompt-builder/form"

export default function BuilderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Prompt Builder</h2>
        <p className="text-zinc-400 mt-2">
          Transform your ideas into professional AI prompts optimized for any platform.
        </p>
      </div>
      <PromptForm />
    </div>
  )
}
