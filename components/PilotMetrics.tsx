import { SectionReveal } from "./SectionReveal";

const metrics = [
  {
    value: "15,000",
    label: "Pilot cardholders",
  },
  {
    value: "$1.05M",
    label: "Projected programme revenue",
  },
  {
    value: "$5.25M",
    label: "Projected first-year volume",
  },
  {
    value: "The Bahamas",
    label: "Launch market",
  },
];

export function PilotMetrics() {
  return (
    <section id="pilot" className="py-24">
      <div className="zephyr-container">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="zephyr-eyebrow justify-center">Pilot</div>

            <h2 className="zephyr-heading mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Starting in The Bahamas. Built for the corridor.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/72">
              Zephyr is currently building the pilot environment and selecting
              early partners for issuing, banking, loyalty, tourism, and local
              rewards.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <SectionReveal key={metric.label}>
              <div className="rounded-[1.5rem] bg-white p-7 text-center text-zephyr-navy shadow-zephyr">
                <div className="zephyr-heading text-5xl font-bold text-zephyr-navy">
                  {metric.value}
                </div>

                <div className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-zephyr-blue">
                  {metric.label}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
