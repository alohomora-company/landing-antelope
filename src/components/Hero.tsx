import { Button } from "@/components/ui/button"
import Link from 'next/link'

// Language data for the supported languages section
const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिन्दी' },
];

export function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950">
      {/* Hero Section - Main landing area with call-to-action */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100/[0.04] bg-[size:60px_60px]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-neutral-50">
                Welcome to Loqu
              </h1>
              <p className="mx-auto max-w-[700px] text-neutral-400 md:text-xl">
                Your next-generation platform for seamless communication and collaboration.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-800 bg-neutral-950 hover:bg-neutral-800 hover:text-neutral-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
      </section>

      {/* Languages Section - Display supported languages */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-xl font-medium text-center mb-16 text-neutral-50">Supported Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 max-w-[800px] mx-auto">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className="text-center"
              >
                <span className="text-base text-neutral-100">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section - Contact info and legal links */}
      <footer className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-base mb-2 text-neutral-100">Loqu - where two languages meet</h3>
            <a href="mailto:support@alohomora.company" className="text-neutral-400 hover:text-neutral-200 transition text-sm">
              support@alohomora.company
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mb-6">
            <Link href="/privacy" className="text-neutral-400 hover:text-neutral-200 transition text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-neutral-200 transition text-sm">
              Terms of Service
            </Link>
            <Link href="/community" className="text-neutral-400 hover:text-neutral-200 transition text-sm">
              Community Guidelines
            </Link>
          </div>
          
          <div className="text-center text-neutral-500 text-xs">
            Copyright 2025 © Alohomora Company. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 