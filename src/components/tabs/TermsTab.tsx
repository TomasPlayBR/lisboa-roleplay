import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Compras",
    items: [
      "Todas as compras são finais.",
      "Ao efetuar o pagamento, o utilizador concorda com os termos da loja.",
      "O comprador é responsável por indicar corretamente o que quer comprar.",
    ],
  },
  {
    title: "2. Reembolsos",
    items: [
      "Não são efetuados reembolsos após a entrega do produto.",
      "Caso exista algum problema técnico, deverá ser aberto um ticket para análise da situação.",
      "Tentativas de chargeback ou fraude resultarão em banimento permanente dos serviços associados.",
    ],
  },
  {
    title: "3. VIPs",
    items: [
      "Os benefícios dos VIPs podem ser alterados a qualquer momento para manter o equilíbrio do servidor.",
      "A compra de um VIP não garante imunidade a punições.",
      "Qualquer infração às regras do servidor poderá resultar em sanções independentemente do VIP adquirido.",
    ],
  },
  {
    title: "4. Coins",
    items: [
      "As Coins não possuem valor monetário fora do servidor.",
      "As Coins não podem ser convertidas novamente em dinheiro real.",
      "As Coins podem ser utilizadas apenas nos produtos e serviços disponibilizados pela Administração.",
    ],
  },
  {
    title: "5. Organizações",
    items: [
      "A criação de organizações está sujeita à aprovação da Administração.",
      "Bases, skins e garagens são negociadas através de ticket.",
      "A Administração reserva-se o direito de rejeitar pedidos que não estejam de acordo com a temática do servidor.",
    ],
  },
  {
    title: "6. Alterações",
    items: [
      "A Administração reserva-se o direito de alterar preços, benefícios e produtos da loja sem aviso prévio.",
      "Alterações futuras não obrigam à compensação de compras anteriores.",
    ],
  },
  {
    title: "7. Disponibilização dos Produtos",
    items: [
      "Os produtos serão entregues assim que possível após a confirmação do pagamento.",
      "Em períodos de elevada procura, o tempo de entrega poderá ser superior ao habitual.",
    ],
  },
  {
    title: "8. Aceitação",
    items: [
      "Ao efetuar uma compra na loja do Lisboa Roleplay, o utilizador confirma que leu, compreendeu e aceita todos os termos acima descritos.",
    ],
  },
];

export function TermsTab() {
  return (
    <section className="glass mx-auto max-w-4xl rounded-3xl p-8 sm:p-12">
      <h2 className="text-3xl font-bold sm:text-4xl">
        📜 Termos e <span className="text-gradient-gold">Condições</span>
      </h2>
      <p className="mt-3 text-muted-foreground">
        Ao efetuar qualquer compra na loja do Lisboa Roleplay, o comprador declara ter lido e aceite
        os seguintes termos:
      </p>

      <div className="mt-8 space-y-4">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-gold/20 bg-card/60 p-5 transition-colors hover:border-gold/50"
          >
            <h3 className="text-lg font-bold text-gold">{s.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-gold">▸</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
