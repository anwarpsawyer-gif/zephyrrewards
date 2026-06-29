import {
  Plane,
  ShoppingBag,
  Gem,
  Home,
  Utensils,
  Globe2,
  Crown,
  Landmark
} from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const earn = [
  {
    icon: Home,
    title: "Everyday essentials",
    text: "Groceries, pharmacy, fuel, dining, and household spending."
  },
  {
    icon: Plane,
    title: "Travel and tourism",
    text: "Hotels, experiences, taxis, airport spend, dining, and island activities."
  },
  {
    icon: ShoppingBag,
    title: "Online shopping",
    text: "Cross-border purchases, shipping-related spend, and digital commerce."
  },
  {
    icon: Gem,
    title: "Premium partners",
    text: "Exclusive offers from selected banks, tourism operators, retailers, and local businesses."
  }
];

const redeem = [
  {
    icon: Landmark,
    title: "Save locally",
    text: "Unlock offers from participating local partners."
  },
  {
    icon: Utensils,
    title: "Travel better",
    text: "Access travel, hotel, dining, and experience-related rewards."
  },
  {
    icon: Globe2,
    title: "Shop smarter",
    text: "Connect rewards to online shopping and corridor spending."
  },
  {
    icon: Crown,
    title: "Upgrade your experience",
    text: "Unlock premium tiers, exclusive offers, and partner benefits."
  }
];

function CardGrid({
  id,
  eyebrow,
  title,
  items
}: {
  id: string;
  eyebrow: string;
  title: string;
  items: typeof earn;
}) {
  return (
    <section id={id} className="py-20">
      <div className="zephyr-container">
        <SectionReveal>
          <div className="max-w-3xl">
            <div className="zephyr-eyebrow">{eyebrow}</div>
            <h2 className="zephyr-heading mt-4 text-4xl font-bold text-zephyr-navy md:text-5xl">
              {title}
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title}>
                <div className="group h-full rounded-zephyr border border-zephyr-navy/10 bg-white p-7 shadow-zephyr transition hover:-translate-y-1 hover:border-zephyr-gold/50">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-zephyr-ivory text-zephyr-blue transition group-hover:scale-105 group-hover:text-zephyr-gold">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-extrabold text-zephyr-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-zephyr-navy/80">
                    {item.text}
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

export function EarnRedeem() {
  return (
    <>
      <CardGrid
        id="earn"
        eyebrow="Earn"
        title="Earn across everyday life, travel, and cross-border shopping."
        items={earn}
      />
      <CardGrid
        id="redeem"
        eyebrow="Redeem"
        title="Use rewards where they matter."
        items={redeem}
      />
    </>
  );
}
