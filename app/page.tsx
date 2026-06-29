import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { EarnRedeem } from "@/components/EarnRedeem";
import { PartnerCorridor } from "@/components/PartnerCorridor";
import { PilotMetrics } from "@/components/PilotMetrics";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <EarnRedeem />
        <PartnerCorridor />
        <PilotMetrics />

        <section className="pb-24">
          <div className="zephyr-container">
            <div className="rounded-[2rem] bg-zephyr-radial bg-zephyr-navy p-10 text-white shadow-zephyr-card md:p-14">
              <div className="max-w-3xl">
                <div className="zephyr-eyebrow text-zephyr-gold">
                  Partner with Zephyr
                </div>
                <h2 className="zephyr-heading mt-4 text-4xl font-bold md:text-5xl">
                  We are selecting early partners for a Bahamas-first corridor
                  rewards pilot.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  We are currently speaking with issuing platforms, banks,
                  loyalty networks, tourism operators, local rewards partners,
                  investors, and advisors.
                </p>

                <Link
                  href="/partner"
                  className="mt-9 inline-flex items-center rounded-full bg-zephyr-gold px-7 py-4 text-sm font-extrabold text-zephyr-navy transition hover:-translate-y-0.5 hover:bg-zephyr-goldSoft"
                >
                  Start a conversation
                  <ArrowRight size={17} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
