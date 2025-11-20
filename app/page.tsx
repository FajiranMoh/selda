import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gray-900 text-white font-bold">S</div>
            <span className="font-semibold"> selda </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Sign in</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Powered by Selda AI
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Launch a beautiful website with AI-driven speed
            </h1>
            <p className="text-gray-600">
              Build a modern landing page in minutes. Tailwind-first styling, shadcn components, and Radix primitives—ready for production.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2">Start free</Button>
              <Button variant="ghost" className="gap-2">See demo</Button>
            </div>
            <dl className="grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-lg border p-3 text-center">
                <dt className="text-gray-500">Setup</dt>
                <dd className="text-lg font-semibold">5 min</dd>
              </div>
              <div className="rounded-lg border p-3 text-center">
                <dt className="text-gray-500">Sections</dt>
                <dd className="text-lg font-semibold">Hero, Features, CTA</dd>
              </div>
              <div className="rounded-lg border p-3 text-center">
                <dt className="text-gray-500">Stack</dt>
                <dd className="text-lg font-semibold">Next 15 + TS</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-gray-50 to-gray-100" />
            <p className="mt-3 text-center text-sm text-gray-500">Drop product screenshots here</p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Everything you need to launch</h2>
          <p className="mt-2 text-gray-600">Designed for clarity, built for speed, styled with Tailwind.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {['Guided storytelling','Responsive layout','Instant credibility'].map((title, i) => (
            <div key={i} className="rounded-xl border p-5">
              <div className="mb-3 h-10 w-10 rounded-md bg-green-100 text-green-700 grid place-items-center font-semibold">{i+1}</div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">Compose sections quickly with reusable UI primitives and consistent design tokens.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {[
            {q:'Can I customize the design?',a:'Yes. Everything uses Tailwind classes so you can rapidly tailor spacing, colors, and layout.'},
            {q:'Does this use shadcn?',a:'Yes. Components follow shadcn/ui patterns with Radix under the hood.'},
            {q:'Is this TypeScript?',a:'Yes. The template and generated files default to TS/TSX.'}
          ].map((item, i) => (
            <details key={i} className="rounded-lg border p-4">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-6xl px-4">
          <p>© {new Date().getFullYear()} selda. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}