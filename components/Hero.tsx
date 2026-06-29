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

          <h1 className="zephyr-heading mt-6 max-w-4xl text-6xl font-bold leading-[0.92] text-zephyr-navy md:text-7xl lg:text-8xl">
            Rewards built for the Caribbean–US corridor.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zephyr-navy/70">
            Zephyr is a Bahamas-first card-linked rewards platform helping
            tourists, local consumers, and cross-border shoppers unlock value
            across travel, everyday spending, online shopping, and local
            experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/partner"
              className="group inline-flex items-center justify-center rounded-full bg-zephyr-navy px-7 py-4 text-sm font-extrabold text-white shadow-zephyr transition hover:-translate-y-0.5 hover:bg-zephyr-blue"
            >
              Partner with us
              <ArrowRight
                size={17}
                className="ml-2 transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#pilot"
              className="inline-flex items-center justify-center rounded-full border border-zephyr-navy/15 bg-white/60 px-7 py-4 text-sm font-extrabold text-zephyr-navy transition hover:-translate-y-0.5 hover:border-zephyr-gold"
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
