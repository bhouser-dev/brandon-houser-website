import { ArrowUpRight } from 'lucide-react'

const LINKEDIN_URL = 'https://www.linkedin.com/in/brandon-houser'

export function CallingCard() {
  return (
    <article className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12">
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300/80">
          Cybersecurity Graduate
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Brandon Houser
        </h1>
      </header>

      <section aria-labelledby="what-i-do" className="mt-10">
        <h2
          id="what-i-do"
          className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400"
        >
          What I do
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-slate-200">
          Work full time while continuing to invest in Cybersecurity learning and
          hands-on experience to get my foot in the door.
        </p>
      </section>

      <section aria-labelledby="about" className="mt-8">
        <h2
          id="about"
          className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400"
        >
          A little more
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-slate-200">
          I am a Cybersecurity graduate with a completed project in college, as
          well as other various hands-on experience. I am enthusiastically
          seeking an entry-level position to begin my Cybersecurity career.
        </p>
      </section>

      <footer className="mt-10 border-t border-white/10 pt-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
          How to reach me
        </h2>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex items-center gap-2 text-lg font-medium text-white underline-offset-4 transition-colors hover:text-blue-300 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        >
          linkedin.com/in/brandon-houser
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </footer>
    </article>
  )
}
