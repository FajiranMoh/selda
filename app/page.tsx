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

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        ... // Existing footer content
      </footer>
    </main>
  );
}
