import { motion } from "framer-motion";
import { useState } from "react";
import { Coins, Crown, Gem, Heart, Award, Building2, Ticket, X, ShoppingCart } from "lucide-react";

type Vip = {
  id: string;
  name: string;
  price: string;
  euro: string;
  icon: typeof Crown;
  tier: string;
  benefits: string[];
  accent: string;
};

const vips: Vip[] = [
  {
    id: "prata",
    name: "VIP Prata",
    price: "5000",
    euro: "5€",
    icon: Award,
    tier: "🥈",
    accent: "from-slate-300 to-slate-500",
    benefits: ["Benefícios exclusivos VIP", "Tag VIP no Discord", "Vantagens económicas no servidor"],
  },
  {
    id: "ouro",
    name: "VIP Ouro",
    price: "9000",
    euro: "9€",
    icon: Crown,
    tier: "🥇",
    accent: "from-yellow-300 to-amber-500",
    benefits: ["Tudo do VIP Prata", "Benefícios adicionais", "Mais vantagens e regalias exclusivas"],
  },
  {
    id: "diamond",
    name: "VIP Diamond",
    price: "12000",
    euro: "12€",
    icon: Gem,
    tier: "💎",
    accent: "from-cyan-300 to-blue-500",
    benefits: ["Tudo do VIP Ouro", "Benefícios premium", "Recompensas exclusivas"],
  },
  {
    id: "ruby",
    name: "VIP Ruby",
    price: "15000",
    euro: "15€",
    icon: Heart,
    tier: "❤️",
    accent: "from-rose-400 to-red-600",
    benefits: ["Tudo do VIP Diamond", "Benefícios máximos disponíveis", "Estatuto VIP mais elevado do servidor"],
  },
];

export function ShopTab() {
  const [selected, setSelected] = useState<Vip | null>(null);

  return (
    <section className="space-y-10">
      {/* Coin system */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8 text-center"
      >
        <div className="flex justify-center">
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-gold"
          >
            <Coins className="h-8 w-8 text-primary-foreground" />
          </motion.div>
        </div>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Sistema de <span className="text-gradient-gold">Coins</span>
        </h2>
        <p className="mt-2 text-3xl font-bold text-gold-bright sm:text-4xl">1000 Coins = 1€</p>
        <p className="mt-2 text-sm text-muted-foreground">
          As Coins podem ser utilizadas para adquirir VIPs e outros produtos disponíveis na loja.
        </p>
      </motion.div>

      {/* VIP grid */}
      <div>
        <h2 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
          🌟 VIPs <span className="text-gradient-gold">Disponíveis</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vips.map((vip, i) => (
            <motion.article
              key={vip.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-card/70 p-6 backdrop-blur transition-shadow hover:shadow-gold"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${vip.accent}`} />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-gold opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{vip.tier}</span>
                  <vip.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-3 text-xl font-bold">{vip.name}</h3>
                <div className="mt-2">
                  <p className="text-2xl font-bold text-gradient-gold">{vip.price} Coins</p>
                  <p className="text-xs text-muted-foreground">≈ {vip.euro}</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {vip.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-gold">✦</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(vip)}
                  className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-gold py-2.5 font-semibold text-primary-foreground shadow-gold"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Comprar
                  <span className="animate-shimmer absolute inset-0" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Organization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8"
      >
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
            <Building2 className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-2xl font-bold">Criação de Organização</h3>
            <p className="mt-2 text-muted-foreground">Queres criar a tua própria organização?</p>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
              <li>📌 Base personalizada</li>
              <li>📌 Garagem própria</li>
              <li>📌 Skins da organização</li>
              <li>📌 Configuração personalizada</li>
            </ul>
            <p className="mt-4 rounded-lg border border-gold/30 bg-gold/10 p-3 text-sm">
              ⚠️ Valor negociável através de ticket com a Administração.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8"
      >
        <div className="flex items-center gap-3">
          <Ticket className="h-6 w-6 text-gold" />
          <h3 className="text-2xl font-bold">Suporte e Compras</h3>
        </div>
        <ol className="mt-4 space-y-2 text-foreground/85">
          <li>1. Abre um ticket.</li>
          <li>2. Indica o produto pretendido.</li>
          <li>3. Aguarda por um membro da Administração.</li>
        </ol>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Obrigado por apoiares o <strong className="text-gold">Lisboa Roleplay</strong> ❤️
        </p>
      </motion.div>

      {/* Purchase modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-md rounded-2xl p-8"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <div className="text-5xl">{selected.tier}</div>
              <h3 className="mt-3 text-2xl font-bold">{selected.name}</h3>
              <p className="mt-1 text-3xl font-bold text-gradient-gold">{selected.price} Coins</p>
              <p className="text-sm text-muted-foreground">≈ {selected.euro}</p>
            </div>
            <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-4 text-sm">
              <p className="font-semibold text-gold">Como finalizar a tua compra:</p>
              <ol className="mt-2 space-y-1 text-foreground/85">
                <li>1. Abre um ticket no nosso Discord</li>
                <li>2. Indica que queres adquirir <strong>{selected.name}</strong></li>
                <li>3. Efetua o pagamento conforme indicação da Admin</li>
                <li>4. Recebe os teus benefícios no servidor</li>
              </ol>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold py-3 font-semibold text-primary-foreground shadow-gold"
            >
              <Ticket className="h-4 w-4" />
              Abrir Ticket
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
