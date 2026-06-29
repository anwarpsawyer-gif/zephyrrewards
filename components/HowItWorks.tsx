import { UserPlus, CreditCard, Sparkles } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const steps = [
  {
    icon: UserPlus,
    title: "Join Zephyr",
    text: "Create a profile and choose how you want to use Zephyr — as a local consumer, tourist, online shopper, or partner."
  },
  {
    icon: CreditCard,
    title: "Spend through the Zephyr layer",
    text: "Use Zephyr with eligible card-linked spending, partner offers, travel activity, and corridor commerce."
  },
  {
    icon: Sparkles,
    title: "Unlock rewards",
    text: "Earn savings, offers, upgrades, and premium experiences across The Bahamas and future Caribbean–US markets."
  }
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="zephyr-container">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="zephyr-eyebrow justify-center">How Zephyr works</div>
            <h2 className="zephyr-heading mt-4 text-5xl font-bold text-zephyr-navy md:text-6xl">
              A simpler way to connect spending, rewards, and the corridor.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <SectionReveal key={step.title} className="h-full">
                <div className="zephyr-card-surface h-full rounded-zephyr-lg p-8 transition hover:-translate-y-1 hover:border-zephyr-gold/40">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zephyr-blueSoft text-zephyr-blue">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm font-extrabold text-zephyr-gold">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-zephyr-navy">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zephyr-navy/65">
                    {step.text}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
