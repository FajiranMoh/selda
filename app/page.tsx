import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          ... <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold">Your Site</div>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#features" className="hover:text-gray-300">Features</a>
              <a href="#about" className="hover:text-gray-300">About</a>
            </div>
          </nav>
        </div>
      </header>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        ... <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>