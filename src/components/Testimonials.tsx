export function Testimonials() {
  const testimonials = [
    {
      quote: "This tool completely changed how I work with Midjourney. The prompts are just next level.",
      author: "Sarah J.",
      role: "Digital Artist"
    },
    {
      quote: "I used to struggle with getting the right style. Dream Prompt nailed it in seconds.",
      author: "Mike T.",
      role: "Content Creator"
    },
    {
      quote: "The API integration is seamless. Built it into my workflow immediately.",
      author: "Alex R.",
      role: "Developer"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm">
          <p className="text-zinc-300 mb-4">"{t.quote}"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400 font-bold">
              {t.author[0]}
            </div>
            <div>
              <p className="text-white font-medium">{t.author}</p>
              <p className="text-zinc-500 text-sm">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
