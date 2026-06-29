import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CompassMotif } from "./CompassMotif";
import { ZephyrCardMockup } from "./ZephyrCardMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36">
      <CompassMotif />

      <div className="zephyr-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="zephyr-eyebrow">
            <span className="h-2 w-2 rounded-full bg-zephyr-gold" />
            Bahamas-first corridor rewards
          </div>

          <h1 className="zephyr-heading mt-6 max-w-4xl text-6xl font-bold leading-[0.92] text-white md:text-7xl lg:text-8xl">
            Rewards built for the Caribbean–US corridor.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78">
            Zephyr is a Bahamas-first card-linked rewards platform helping
            tourists, local consumers, and cross-border shoppers unlock value
            across travel, everyday spending, online shopping, and local
            experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/partner"
              className="group inline-flex items-center justify-center rounded-full bg-zephyr-gold px-7 py-4 text-sm font-extrabold text-zephyr-navy shadow-gold transition hover:-translate-y-0.5 hover:bg-zephyr-goldSoft"
            >
              Partner with us
              <ArrowRight
                size={17}
                className="ml-2 transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#pilot"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-zephyr-gold/70 hover:bg-white/12"
            >
              View pilot
            </a>
          </div>
        </div>

        <ZephyrCardMockup />
      </div>
    </section>
  );
}
