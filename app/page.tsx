import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          ... // Existing header content
        </div>
      </header>

      ... // Existing sections

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">What Our Clients Say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-5">
              <p className="italic">"This product changed my life! The support was amazing and the features are fantastic!"</p>
              <div className="mt-4 text-right">
                <p className="font-medium">- Jane Doe, CEO of StartUp</p>
              </div>
            </div>
            <div className="rounded-lg border p-5">
              <p className="italic">"Absolutely love it. The best decision for my business."</p>
              <div className="mt-4 text-right">
                <p className="font-medium">- John Smith, Freelancer</p>
              </div>
            </div>
            <div className="rounded-lg border p-5">
              <p className="italic">"Incredible value. The team behind this product is so supportive and helpful."</p>
              <div className="mt-4 text-right">
                <p className="font-medium">- Alex Johnson, Small Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        ... // Existing footer content
      </footer>
    </main>
  );
}
