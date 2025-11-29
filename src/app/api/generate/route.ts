import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// Mock OpenAI response for MVP if key is missing, or actual call if key exists
async function generatePrompt(data: any) {
  const apiKey = process.env.OPENAI_API_KEY
  
  if (!apiKey) {
    // Return a mock response for development/testing without API key
    return `[MOCK GENERATION]
    
Role: ${data.role}
Tone: ${data.tone}
Platform: ${data.platform}
Format: ${data.format}

Here is an optimized prompt based on your idea: "${data.idea}"

---

Act as a ${data.role}. Your task is to... [Expanded prompt logic would go here]`
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are an expert prompt engineer. Your goal is to take a user's raw idea and parameters and convert them into a highly optimized, professional AI prompt.
            
            Input Parameters:
            - Role: The persona the AI should adopt.
            - Tone: The style of the response.
            - Platform: The target AI model (ChatGPT, Claude, etc.).
            - Format: The desired output structure.
            
            Output:
            Return ONLY the optimized prompt. Do not include any conversational filler.`
          },
          {
            role: "user",
            content: `Idea: ${data.idea}
            Role: ${data.role}
            Tone: ${data.tone}
            Platform: ${data.platform}
            Format: ${data.format}
            
            Generate the perfect prompt.`
          }
        ],
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error("OpenAI API error")
    }

    const json = await response.json()
    return json.choices[0].message.content
  } catch (error) {
    console.error("Generation error:", error)
    throw error
  }
}

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { idea, role, tone, platform, format } = body

    if (!idea) {
      return new NextResponse("Idea is required", { status: 400 })
    }

    const generatedPrompt = await generatePrompt({ idea, role, tone, platform, format })

    // Save to database
    const { error: dbError } = await supabase
      .from('prompts')
      .insert({
        user_id: user.id,
        idea,
        role,
        tone,
        platform,
        result: generatedPrompt,
      })

    if (dbError) {
      console.error("Database error:", dbError)
      // We don't fail the request if saving fails, but we log it
    }

    return NextResponse.json({ prompt: generatedPrompt })
  } catch (error) {
    console.error("[GENERATE_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
