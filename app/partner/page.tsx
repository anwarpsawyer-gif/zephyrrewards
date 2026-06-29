import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PartnerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32">
        <section className="py-20">
          <div className="zephyr-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="zephyr-eyebrow">Partner interest</div>
              <h1 className="zephyr-heading mt-5 text-6xl font-bold leading-none text-zephyr-navy md:text-7xl">
                Start a conversation with Zephyr.
              </h1>
              <p className="mt-7 text-lg leading-8 text-zephyr-navy/70">
                We are selecting early issuing, banking, loyalty, tourism, local
                rewards, investor, and advisor partners for a Bahamas-first
                Caribbean–US corridor rewards pilot.
              </p>
            </div>

            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="zephyr-card-surface rounded-[2rem] p-8"
            >
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-bold text-zephyr-navy">
                  Full name
                  <input
                    required
                    name="full_name"
                    className="rounded-2xl border border-zephyr-navy/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-zephyr-gold"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-zephyr-navy">
                  Company
                  <input
                    name="company"
                    className="rounded-2xl border border-zephyr-navy/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-zephyr-gold"
                    placeholder="Company name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-zephyr-navy">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="rounded-2xl border border-zephyr-navy/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-zephyr-gold"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-zephyr-navy">
                  Partner type
                  <select
                    required
                    name="partner_type"
                    className="rounded-2xl border border-zephyr-navy/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-zephyr-gold"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Issuing / processing partner</option>
                    <option>Bank partner</option>
                    <option>Loyalty partner</option>
                    <option>Tourism partner</option>
                    <option>Local rewards partner</option>
                    <option>Investor / advisor</option>
                    <option>Pilot user</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-bold text-zephyr-navy">
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    className="rounded-2xl border border-zephyr-navy/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-zephyr-gold"
                    placeholder="Tell us how you would like to work with Zephyr."
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 rounded-full bg-zephyr-navy px-7 py-4 text-sm font-extrabold text-white shadow-zephyr transition hover:-translate-y-0.5 hover:bg-zephyr-blue"
                >
                  Submit interest
                </button>

                <p className="text-xs leading-6 text-zephyr-navy/50">
                  Replace the form action with your Formspree endpoint, or wire
                  this form to Supabase when you are ready.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
