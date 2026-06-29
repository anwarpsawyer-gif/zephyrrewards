import Link from "next/link";
import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zephyr-navy py-12 text-white">
      <div className="zephyr-container flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-zephyr-gold ring-1 ring-white/10">
              <Compass size={20} />
            </div>

            <div>
              <div className="font-extrabold text-white">Zephyr Card</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-zephyr-gold">
                Sawyer & Co.
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
            Zephyr is currently in pilot development. Card issuing, rewards, and
            partner benefits are subject to partner approval, eligibility, and
            applicable programme terms.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-semibold text-white/65">
          <Link href="/partner" className="hover:text-white">
            Partner
          </Link>
          <a href="#pilot" className="hover:text-white">
            Pilot
          </a>
          <a href="#how" className="hover:text-white">
            How it works
          </a>
        </div>
      </div>
    </footer>
  );
}
