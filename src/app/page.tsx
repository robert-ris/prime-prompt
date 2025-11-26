import {DeepScrollLayout} from "@/components/DeepScrollLayout";
import {Hero} from "@/components/Hero";
import {DemoBox} from "@/components/DemoBox";
import {Pricing} from "@/components/Pricing";
import {Testimonials} from "@/components/Testimonials";
import {FAQ} from "@/components/FAQ";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <DeepScrollLayout>
        <Hero />
        <DemoBox />
        <Pricing />
        <Testimonials />
        <FAQ />
      </DeepScrollLayout>

      {/* Footer or final CTA could go here, outside the scroll layout if needed */}
      <div className="h-screen flex items-center justify-center bg-zinc-950 text-zinc-500">
        <p>Ready to start dreaming?</p>
      </div>
    </main>
  );
}
