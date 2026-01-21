import { Badge } from "./components/badge";
import { SectionHeading } from "./components/section-heading";
import { ThemeToggle } from "./components/theme-toggle";
import {
  contactChannels,
  education,
  experiences,
  focusAreas,
  navItems,
  profile,
  projects,
} from "./data/profile";
const vibeGradients: Record<string, string> = {
  sunrise: "from-rose-400/45 via-orange-200/25 to-transparent",
  midnight: "from-indigo-500/45 via-purple-300/25 to-transparent",
  evergreen: "from-emerald-400/45 via-teal-300/25 to-transparent",
};

const vibeRings: Record<string, string> = {
  sunrise: "border-rose-300/60",
  midnight: "border-indigo-300/60",
  evergreen: "border-emerald-300/60",
};

const skillSpectrums = [
  "from-rose-400/25 via-orange-200/20 to-transparent",
  "from-sky-400/25 via-teal-200/20 to-transparent",
  "from-violet-400/25 via-fuchsia-200/20 to-transparent",
  "from-emerald-400/25 via-lime-200/20 to-transparent",
];

const skillBorders = [
  "border-rose-300/60",
  "border-sky-300/60",
  "border-violet-300/60",
  "border-emerald-300/60",
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const workHistory = experiences.map((item, index) => ({
    id: `experience-${index}`,
    title: item.company,
    role: item.role,
    timeframe: item.timeframe,
    location: item.location,
    summary: item.summary,
    highlight: item.highlights[0],
    stack: item.stack,
  }));
  const studyHistory = education.map((item, index) => ({
    id: `education-${index}`,
    institution: item.institution,
    degree: item.degree,
    timeframe: item.timeframe,
    note: item.note,
  }));
  const skillCards = focusAreas;

  return (
    <div className="relative">
      <div
        className="pointer-events-none fixed inset-0 -z-20 grid-overlay opacity-30"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-30 bg-[radial-gradient(circle_at_15%_20%,rgba(255,123,109,0.14),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(122,204,200,0.12),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(158,127,255,0.12),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-12">
        <header className="sticky top-6 z-40 mb-12">
          <div className="surface-panel flex items-center justify-between gap-4 rounded-2xl border border-subtle px-5 py-4 shadow-soft transition-all duration-500 md:px-7">
            <div className="flex flex-col gap-1 text-sm mr-auto">
              <span className="text-lg font-semibold text-foreground">
                {profile.name}
              </span>
            </div>
            <nav className="hidden items-center gap-4 text-sm text-muted md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 transition-colors duration-300 hover:bg-accent-soft hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-20">
          <section id="top" className="relative scroll-mt-32">
            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface/90 px-8 py-12 shadow-soft sm:px-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_10%,rgba(255,123,109,0.18),transparent),radial-gradient(120%_90%_at_90%_0%,rgba(158,127,255,0.18),transparent)] opacity-70"
                aria-hidden
              />
              <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
                  {profile.headline}
                </h1>
                <p className="text-base text-muted md:text-lg">
                  {profile.summary}
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="flex flex-col gap-8 scroll-mt-32">
            <SectionHeading
              eyebrow="Projects"
              title="Engineering and research projects"
              description="Hands-on builds spanning compilers, emotion-aware experiences, and distributed systems."
            />
            <div className="flex flex-col gap-10">
              {projects.map((project, index) => {
                const gradient =
                  vibeGradients[project.vibe ?? "sunrise"] ??
                  vibeGradients.sunrise;
                const ring =
                  vibeRings[project.vibe ?? "sunrise"] ?? vibeRings.sunrise;

                return (
                  <article
                    key={project.name}
                    className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface/95 p-8 shadow-soft transition duration-500 hover:-translate-y-2 hover:border-accent/60 sm:p-10"
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient}`}
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full blur-3xl opacity-40"
                      aria-hidden
                    />
                    <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                      <div className="space-y-5">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-muted">
                          <span
                            className={`inline-flex items-center rounded-full border ${ring} px-3 py-1 text-muted`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{project.category}</span>
                        </div>
                        <h3 className="text-3xl font-semibold text-foreground">
                          {project.name}
                        </h3>
                        <p className="text-base text-muted">
                          {project.tagline ?? project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs text-muted">
                          {project.stack.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-subtle px-3 py-1"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="grid gap-3 rounded-3xl border border-subtle/70 bg-surface/80 p-5 text-sm text-muted">
                          {project.outcomes.map((outcome) => (
                            <div key={outcome} className="relative pl-4">
                              <span
                                className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent"
                                aria-hidden
                              />
                              {outcome}
                            </div>
                          ))}
                        </div>
                        <p className="px-9 text-sm text-muted">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="about" className="flex flex-col gap-8 scroll-mt-32">
            <SectionHeading
              eyebrow="About"
              title="Front-end engineer with full-stack instincts"
              description="Focused on performance-first UX, applied AI, and the tooling that keeps teams shipping."
            />
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="card-panel flex flex-col gap-4 rounded-3xl border border-subtle bg-surface/95 p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-foreground">
                    Education
                  </h3>
                </div>
                <ul className="space-y-4">
                  {studyHistory.map((entry) => (
                    <li
                      key={entry.id}
                      className="rounded-2xl border border-subtle bg-surface/80 p-4 transition duration-500 hover:-translate-y-1 hover:border-accent/60"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                            {entry.degree}
                          </p>
                          <h4 className="text-sm font-semibold text-foreground">
                            {entry.institution}
                          </h4>
                        </div>
                        <div className="text-xs text-muted sm:text-right">
                          <p>{entry.timeframe}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="card-panel flex flex-col gap-4 rounded-3xl border border-subtle bg-surface/95 p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-foreground">
                    Work experience
                  </h3>
                </div>
                <ul className="space-y-4">
                  {workHistory.map((job) => (
                    <li
                      key={job.id}
                      className="rounded-2xl border border-subtle bg-surface/80 p-4 transition duration-500 hover:-translate-y-1 hover:border-accent/60"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                            {job.role}
                          </p>
                          <h4 className="text-sm font-semibold text-foreground">
                            {job.title}
                          </h4>
                        </div>
                        <div className="text-xs text-muted sm:text-right">
                          <p>{job.timeframe}</p>
                          {job.location ? <p>{job.location}</p> : null}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted">{job.summary}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section id="skills" className="flex flex-col gap-8 scroll-mt-32">
            <SectionHeading
              eyebrow="Skills"
              title="Technical stack and focus areas"
              description="From typed front-end stacks to DevOps, backend services, and applied AI."
            />
            <div className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skillCards.map((card, index) => {
                  const spectrum =
                    skillSpectrums[index % skillSpectrums.length];
                  const border = skillBorders[index % skillBorders.length];

                  return (
                    <article
                      key={card.title}
                      className={`relative overflow-hidden rounded-3xl border ${border} bg-surface/95 p-6 shadow-card transition duration-500 hover:-translate-y-1 hover:border-accent/60`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${spectrum}`}
                        aria-hidden
                      />
                      <div className="relative flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-base font-semibold text-foreground">
                            {card.title}
                          </h3>
                          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-muted">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="text-sm text-muted">{card.blurb}</p>
                        <div className="flex flex-wrap gap-2 text-xs text-muted">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-subtle/70 bg-surface/80 px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="contact" className="flex flex-col gap-8 scroll-mt-32">
            <SectionHeading eyebrow="Contact" />
            <div className="surface-panel rounded-3xl border border-subtle px-6 py-9 shadow-soft transition-all duration-500 sm:px-10">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div className="max-w-lg space-y-5">
                  <Badge tone="accent">Let’s make something playful</Badge>
                  <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                    Have a story to prototype?
                  </h2>
                  <p className="text-base text-muted">
                    Whether it’s a side project, a design system refresh, or an
                    AI idea that needs a human touch, I’d love to jam on it.
                  </p>
                </div>
                <div className="rounded-[28px] border border-subtle bg-surface/80 p-5 shadow-card">
                  <ul className="space-y-5 text-sm text-muted">
                    {contactChannels.map((channel) => (
                      <li key={channel.label} className="flex flex-col gap-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-muted">
                          {channel.label}
                        </span>
                        <a
                          href={channel.href}
                          className="text-base font-semibold text-foreground transition-colors duration-300 hover:text-accent"
                        >
                          {channel.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-14 flex flex-col items-center justify-center gap-3 border-t border-subtle pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {currentYear} {profile.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
