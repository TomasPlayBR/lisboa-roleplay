import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/lisboa-logo.png";
import { AboutTab } from "@/components/tabs/AboutTab";
import { ShopTab } from "@/components/tabs/ShopTab";
import { TermsTab } from "@/components/tabs/TermsTab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lisboa Roleplay — Servidor MTA Português" },
      { name: "description", content: "Lisboa Roleplay — servidor MTA português com loja VIP, organizações e uma comunidade ativa. Vive Lisboa como nunca antes." },
      { property: "og:title", content: "Lisboa Roleplay — Servidor MTA Português" },
      { property: "og:description", content: "Junta-te ao Lisboa Roleplay, o servidor MTA português com VIPs, coins e organizações." },
    ],
  }),
  component: Index,
});

const tabs = [
  { id: "about", label: "Sobre Nós" },
  { id: "shop", label: "Loja VIP" },
  { id: "terms", label: "Termos & Condições" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function Index() {
  const [active, setActive] = useState<TabId>("about");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient sparkles */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-gold-bright"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `sparkle ${2 + (i % 4)}s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gold/30 blur-3xl" />
            <img
              src={logo}
              alt="Lisboa Roleplay logo"
              className="relative h-32 w-32 animate-float rounded-2xl object-cover shadow-glow sm:h-40 sm:w-40"
            />
          </motion.div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient-gold">LISBOA</span>{" "}
            <span className="text-foreground">ROLEPLAY</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Servidor MTA português · Vive a tua história em Lisboa
          </p>
        </motion.header>

        {/* Tabs nav */}
        <nav className="mt-12 flex justify-center">
          <div className="glass relative flex flex-wrap justify-center gap-1 rounded-full p-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-6 sm:text-base"
              >
                {active === t.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-gold shadow-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active === t.id ? "text-primary-foreground" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* Tab content */}
        <main className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {active === "about" && <AboutTab />}
              {active === "shop" && <ShopTab />}
              {active === "terms" && <TermsTab />}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="mt-20 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          Lisboa Roleplay — © Todos os direitos reservados
        </footer>
      </div>
    </div>
  );
}
