import { SectionReveal } from "./SectionReveal";

const partners = [
  "Issuing",
  "Banks",
  "Loyalty",
  "Tourism",
  "Local Rewards",
  "Investors"
];

export function PartnerCorridor() {
  return (
    <section id="partners" className="py-24">
      <div className="zephyr-container">
        <div className="rounded-[2rem] bg-zephyr-navy p-8 text-white shadow-zephyr-card md:p-12">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="zephyr-eyebrow text-zephyr-gold">
                Partner corridor
              </div>
              <h2 className="zephyr-heading mt-4 text-4xl font-bold md:text-5xl">
                A rewards layer for banks, loyalty networks, tourism operators,
                and local businesses.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/80">
                Zephyr helps partners reach tourists, local consumers, and
                Caribbean–US shoppers through a modern card-linked rewards
                experience.
              </p>
            </div>
          </SectionReveal>

          <div className="relative mt-14 grid gap-4 md:grid-cols-6">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-zephyr-gold/60 to-transparent md:block" />

            {partners.map((partner) => (
              <SectionReveal key={partner}>
                <div className="relative z-10 rounded-2xl border border-white/10 bg-white/8 p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:border-zephyr-gold/50">
                  <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-zephyr-gold shadow-gold" />
                  <div className="text-sm font-extrabold uppercase tracking-[0.12em]">
                    {partner}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
