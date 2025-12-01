import {DeepScrollLayout} from "@/components/DeepScrollLayout";
import {Hero} from "@/components/Hero";
import {Features} from "@/components/Features";
import {DemoBox} from "@/components/DemoBox";
import {Pricing} from "@/components/Pricing";
import {Testimonials} from "@/components/Testimonials";
import {FAQ} from "@/components/FAQ";
import {Navbar} from "@/components/Navbar";
import Link from 'next/link';
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <DeepScrollLayout>
        <Hero />
        <Features />
        <DemoBox />
        <Pricing />
        <Testimonials />
        <FAQ />
      </DeepScrollLayout>

      {/* Final CTA */}
      <div className="h-screen flex flex-col items-center justify-center bg-zinc-950 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to transform your prompts?
        </h2>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          Join thousands of creators, developers, and professionals using Prime Prompt
        </p>
        <div className="flex gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-zinc-700 text-white hover:bg-zinc-900">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
