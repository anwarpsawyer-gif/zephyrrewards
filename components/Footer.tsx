import Link from "next/link";
import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zephyr-navy/10 bg-zephyr-ivory py-12">
      <div className="zephyr-container flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zephyr-navy text-zephyr-gold">
              <Compass size={20} />
            </div>
            <div>
              <div className="font-extrabold text-zephyr-navy">Zephyr Card</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-zephyr-blue">
                Sawyer & Co.
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zephyr-navy/60">
            Zephyr is currently in pilot development. Card issuing, rewards, and
            partner benefits are subject to partner approval, eligibility, and
            applicable programme terms.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-semibold text-zephyr-navy/65">
          <Link href="/partner" className="hover:text-zephyr-navy">
            Partner
          </Link>
          <a href="#pilot" className="hover:text-zephyr-navy">
            Pilot
          </a>
          <a href="#how" className="hover:text-zephyr-navy">
            How it works
          </a>
        </div>
      </div>
    </footer>
  );
}
