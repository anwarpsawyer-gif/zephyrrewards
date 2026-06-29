import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ThanksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32">
        <section className="py-28">
          <div className="zephyr-container max-w-3xl text-center">
            <div className="zephyr-eyebrow justify-center">Received</div>
            <h1 className="zephyr-heading mt-5 text-6xl font-bold leading-none text-zephyr-navy md:text-7xl">
              Thank you for reaching out.
            </h1>
            <p className="mt-7 text-lg leading-8 text-zephyr-navy/70">
              We have received your interest and will review it as we shape the
              Zephyr pilot partner group.
            </p>
            <Link
              href="/"
              className="mt-9 inline-flex rounded-full bg-zephyr-navy px-7 py-4 text-sm font-extrabold text-white shadow-zephyr transition hover:-translate-y-0.5 hover:bg-zephyr-blue"
            >
              Back to homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
