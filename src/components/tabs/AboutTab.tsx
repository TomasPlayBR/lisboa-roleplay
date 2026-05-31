import { motion } from "framer-motion";
import { Car, Briefcase, Home, Users, Building2 } from "lucide-react";

const highlights = [
  { icon: Car, text: "Cria a tua história" },
  { icon: Briefcase, text: "Constrói o teu império" },
  { icon: Home, text: "Compra a tua casa" },
  { icon: Users, text: "Forma a tua organização" },
  { icon: Building2, text: "Vive em Lisboa" },
];

export function AboutTab() {
  return (
    <section className="glass mx-auto max-w-4xl rounded-3xl p-8 sm:p-12">
      <h2 className="text-3xl font-bold sm:text-4xl">
        🌆 O que é o <span className="text-gradient-gold">Lisboa Roleplay</span>?
      </h2>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
        <p>
          O <strong className="text-gold">Lisboa Roleplay</strong> é um servidor de Roleplay português
          desenvolvido para proporcionar uma experiência séria, divertida e envolvente a todos os
          jogadores. O nosso objetivo é criar uma comunidade ativa onde cada jogador possa construir
          a sua própria história, desenvolver a sua personagem e viver experiências únicas dentro de
          uma cidade cheia de oportunidades.
        </p>
        <p>
          No Lisboa Roleplay poderás seguir diversos caminhos, desde construir uma carreira legal
          como polícia, INEM, mecânico ou empresário, até enveredar pelo mundo do crime através de
          organizações, assaltos e operações clandestinas. Cada escolha influencia a tua jornada e a
          forma como interages com os restantes cidadãos da cidade.
        </p>
        <p>
          Contamos com sistemas exclusivos, uma economia equilibrada, veículos personalizados,
          organizações únicas, eventos frequentes e uma equipa dedicada a garantir a melhor
          experiência possível para toda a comunidade.
        </p>
        <p>
          Quer procures ação, negócios, amizades ou simplesmente uma nova aventura, o Lisboa
          Roleplay oferece um ambiente dinâmico onde o teu futuro é definido pelas tuas decisões.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={h.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="flex items-center gap-3 rounded-xl border border-gold/20 bg-card/60 p-4 transition-shadow hover:shadow-gold"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground">
              <h.icon className="h-5 w-5" />
            </span>
            <span className="font-medium">{h.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
