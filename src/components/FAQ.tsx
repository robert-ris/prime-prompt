import {Plus} from "lucide-react";

export function FAQ() {
  const faqs = [
    {q: "How does it work?", a: "We use advanced LLMs fine-tuned on high-quality prompt datasets to enhance your simple ideas."},
    {q: "Is it free?", a: "Yes, we have a generous free tier. Pro plans unlock more power and features."},
    {q: "Can I use the prompts for commercial work?", a: "Absolutely. You own the prompts you generate."},
    {q: "Do you support API access?", a: "Yes, API access is available on the Pro plan."}
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-zinc-900/20 border border-zinc-800 rounded-lg overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-900/40 transition-colors">
            <span className="text-white font-medium">{faq.q}</span>
            <Plus className="w-5 h-5 text-zinc-500" />
          </button>
          {/* Simple expansion for now, can be animated later */}
        </div>
      ))}
    </div>
  );
}
