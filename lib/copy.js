// lib/copy.js — Veškerý viditelný obsah landing page.
// Všechny textové změny se dělají zde. Komponenty čtou data pouze z tohoto objektu.

export const copy = {
  metadata: {
    title: "EkoBylinka — Vyrábějte si ručně dělaná mýdla a přírodní kosmetiku doma",
    description:
      "Kurz EkoBylinka pro ruční výrobu mýdel a přírodní kosmetiky: naučte se tvořit přírodní produkty pro sebe i svou rodinu s více než 27 průvodci, 500 recepty a 3 bonusy ZDARMA. Doživotní přístup se slevou 80 %.",
    lang: "cs",
  },

  brand: {
    name: "EkoBylinka",
    tagline: "Přírodní bylinná krása",
  },

  hero: {
    banner: "TATO NABÍDKA + BONUSY ZDARMA KONČÍ ZA:",
    timerLabels: { days: "Dny", hours: "Hod", minutes: "Min", seconds: "Sek" },
    kicker: "Více než 2 586 žen už si vyrábí vlastní produkty doma",
    headlinePre: "ODBORNICE NA PŘÍRODNÍ KOSMETIKU ODHALUJE,",
    headlineHighlight: "jak vytvořit voňavá mýdla,",
    headlinePost: "která budou hýčkat vaši pokožku od prvního dne",
    supporting:
      "Ideální pro každého, kdo chce HNED začít vyrábět vlastní přírodní mýdla — bez chemie, bez zbytečných výdajů a s opravdovou radostí.",
    cta: "Chci přístup hned teď 🧼",
    imageAlt: "Žena s pěstěnou a zářivou pletí díky přírodní kosmetice EkoBylinka",
    trustChips: [
      { icon: "⭐", text: "Více než 2 586 studentek" },
      { icon: "🎁", text: "3 bonusy ZDARMA" },
      { icon: "🛡️", text: "Garance 14 dní" },
    ],
  },

  instructorIntro: {
    quote:
      "Tento kurz jsem vytvořila přesně pro vás – pro ženy, které rády tvoří rukama a chtějí pečovat o sebe i své blízké přírodní cestou.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Čerstvě vyrobená řemeslná mýdla" },
      { image: "/carousel/soap-2.webp", alt: "Mýdla s mramorovým efektem" },
      { image: "/carousel/soap-3.webp", alt: "Mýdlo s dekorativní zelenou vlnkou" },
      { image: "/carousel/soap-4.webp", alt: "Přírodní mýdlo s levandulí" },
      { image: "/carousel/soap-5.webp", alt: "Krásný výběr ručně vyráběných mýdel" },
      { image: "/carousel/soap-6.webp", alt: "Detaily zdobení přírodních mýdel" },
    ],
  },

  benefits: {
    headline:
      "...můžete začít s MINIMÁLNÍM ROZPOČTEM a získat tyto VÝHODY!",
    items: [
      { icon: "Leaf", text: "Používat pouze přírodní a bezpečné suroviny." },
      { icon: "ShieldCheck", text: "Dát sbohem suché kůži, podráždění a alergiím." },
      { icon: "Sparkles", text: "Vytvořit naprosto jakékoliv mýdlo, které si představíte." },
      { icon: "TrendingUp", text: "Proměnit tvoření v opravdovou radost u vás doma." },
    ],
    checklist: [
      "Konec zkažených várek a plýtvání",
      "Nepotřebujete žádné předchozí zkušenosti",
      "Žádný stres ani pevné rozvrhy",
    ],
    imageAlt: "Ruce držící čerstvě vyrobená řemeslná mýdla",
  },

  trending: {
    kicker: "HIT ROKU 2026",
    headline:
      "Za pár dní se naučíte vyrábět nádherná moderní mýdla, kterými všechny ohromíte",
    imageAlt: "Ručně vyráběná mýdla s moderním mramorovým designem",
  },

  courseContent: {
    headline: "Tady vás naučíme úplně všechno",
    subheadline: "Podívejte se na kompletní obsah kurzu",
    sectionLabel: "Ve více než 27 e-bookách získáte...",
    paragraphs: [
      {
        bold: "Přístup ke kompletnímu know-how,",
        rest: " díky kterému budete navrhovat, vyrábět a skladovat přírodní mýdla jako opravdová profesionálka.",
      },
      {
        bold: "Konec metody pokus-omyl:",
        rest:
          " získáte jasný a ověřený postup s praktickými tipy, které vám ušetří spoustu času i nervů.",
      },
    ],
  },

  megapack: {
    kicker: "MEGA BALÍČEK",
    headline: "Tento mega balíček obsahuje",
    items: [
      { bold: "Kompletního průvodce krok za krokem —", rest: " od úplných začátků až po pokročilou úroveň" },
      { bold: "500 receptů", rest: " pro každý myslitelný typ pleti" },
      { bold: "Návod na výrobu", rest: " vlastních esenciálních olejů" },
      { bold: "Postupy pro tvorbu", rest: " přírodních tekutých mýdel" },
    ],
    imageAlt: "Ukázka mega balíčku pro ruční výrobu mýdel EkoBylinka",
  },

  bonuses: {
    kicker: "BONUSY ZDARMA",
    headline: "Když se přidáte ještě dnes, získáte 3 bonusy zcela ZDARMA!",
    subheadline: "Doplňující průvodci ve formátu PDF, které si můžete hned stáhnout.",
    badge: "BONUS #",
    freeLabel: "ZDARMA",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Tělová kosmetika", desc: "Přírodní recepty na máselka, mléka a peelingy pro kompletní péči o tělo." },
      { image: "/bonuses/bonus-6.webp", title: "Soli do koupele", desc: "Dopřejte si relax s domácími voňavými solemi a šumivými bombami." },
      { image: "/bonuses/bonus-7.webp", title: "Tuhý šampon", desc: "Zdravé vlasy bez plastových obalů a bez chemie." },
    ],
    footer: "Všechny bonusy vám budou okamžitě doručeny ve 100% digitální podobě.",
  },

  features: {
    headline: "Vše, co s kurzem získáte",
    subheadline: "Neomezený přístup a materiály ke stažení (PDF).",
    items: [
      { icon: "Wifi", title: "100% Online", desc: "Učte se kdykoliv a odkudkoliv, záleží jen na vás." },
      { icon: "FolderOpen", title: "Obsah na Google Drive", desc: "Vše je přehledně uspořádané, abyste se neztratili." },
      { icon: "Infinity", title: "Doživotní přístup ke kurzu", desc: "Postupujte vlastním tempem, bez jakéhokoliv tlaku." },
      { icon: "BookOpen", title: "E-booky jsou jen vaše", desc: "Stáhněte si je nebo je čtěte online bez časového omezení." },
      { icon: "Sparkles", title: "Praktické know-how", desc: "Vše, co potřebujete, abyste si první produkty vyrobili okamžitě." },
      { icon: "ShieldCheck", title: "Garance 14 dní", desc: "Pokud nebudete nadšení, vrátíme vám 100 % peněz." },
    ],
  },

  primaryPricing: {
    discountBadge: "SLEVA 80 %",
    valuedAtLabel: "Běžná hodnota programu",
    regularPrice: "995 Kč",
    offerPrice: "199 Kč",
    cta: "ZÍSKAT SLEVU",
    payInfo: "Jednorázová platba za doživotní přístup",
    imageAlt: "Ukázka programu EkoBylinka s exkluzivní slevou",
    socialImageAlt: "Snímky obrazovky s reálnými zprávami od nadšených studentek",
  },

  socialProof: {
    headline: "NEPROPÁSNĚTE TUTO ŠANCI!",
    subheadlinePre: "Více než",
    countHighlight: "2 586 žen",
    subheadlinePost: "už si naplno užívá svou vlastní domácí přírodní kosmetiku!",
  },

  reviewScreenshots: {
    headline: "Reálné zprávy od našich studentek",
    subheadline: "Tohle nám chodí každý den.",
    onlineLabel: "online",
    typingLabel: "píše…",
    items: [
      {
        name: "Kateřina",
        timeLabel: "10:24",
        messages: [
          { text: "Udelala jsem svoje prvni mydla podle tveho navodu! 🌸" },
          { text: "Jsou naprosto bozi a plet mam po nich krasne hebkou ✨" },
          { text: "Kdy pridas dalsi recepty?" },
        ],
      },
      {
        name: "Lucie",
        timeLabel: "včera",
        messages: [
          { text: "Vcera jsem udelala levandulova mydla pro celou rodinu 💜" },
          { text: "Mamka je miluje, rika ze mu plet pripada uplne jina 🙌" },
          { text: "Moc dekuju za tenhle kurz, fakt ❤️" },
        ],
      },
      {
        name: "Silvie",
        timeLabel: "12:05",
        messages: [
          { text: "Zacala jsem pred 2 tydny a uz mam celou kolekci 💕" },
          { text: "Ty recepty se daji sledovat uplne s prehledem" },
          { text: "A ty bonusy ZDARMA maji obrovskou hodnotu 🎁" },
        ],
      },
      {
        name: "Veronika",
        timeLabel: "dnes",
        messages: [
          { text: "Ahoj! Jen jsem ti chtela podekovat 🌿" },
          { text: "Udelala jsem si tuhy sampon a plet uz nemam suchou" },
          { text: "Tisicere diky, udelalo mi to strasnou radost 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Obsah kurzu",
    subheadline: "Klikněte na moduly a podívejte se, co všechno se naučíte.",
    courses: [
      {
        title: "Kurz | Ručně vyráběná mýdla",
        lessons: [
          "Mýdla EkoBylinka Modul 1",
          "Mýdla EkoBylinka Modul 2",
          "Výroba mýdel Modul 1",
          "Výroba mýdel Modul 2",
          "Základní techniky",
          "Suroviny a výrobní procesy",
          "Zázračné ingredience a jejich vlastnosti",
        ],
      },
      {
        title: "Kurz | 500 receptů na mýdla",
        lessons: [
          "E-book (PDF) s 500 unikátními recepty.",
          "Průvodce nahrazováním a úpravou surovin.",
        ],
      },
      {
        title: "Kurz | Vytvořte si tekutá mýdla",
        lessons: [
          "Kompletní průvodce výrobou vlastních glycerinových tekutých mýdel krok za krokem.",
        ],
      },
      {
        title: "Kurz | Vytvořte si esenciální oleje",
        lessons: [
          "Kompletní průvodce výrobou vlastních esenciálních olejů krok za krokem.",
        ],
      },
      {
        title: "BONUS ZDARMA | Přírodní kosmetika",
        lessons: [
          "BONUS ZDARMA — Tělová kosmetika",
          "BONUS ZDARMA — Soli do koupele",
          "BONUS ZDARMA — Tuhý šampon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "SLEVA 80 %",
    plus: "+ 3 BONUSY ZDARMA",
    middle: "k vaší objednávce do",
    deadline: "14. PROSINCE",
    or: "nebo do vyprodání",
    slots: "26 MÍST",
  },

  finalCta: {
    preHeadline: "VAŠE CHVÍLE JE TADY",
    urgencyTop: "SLEVA 80 %",
    headline: "Získejte DNES mega balíček EkoBylinka za naprosto bezkonkurenční cenu",
    subUrgency:
      "Více než 2 586 žen už si doma vyrábí vlastní mýdla a kosmetiku. Dnes jste na řadě vy.",
    bundleList: [
      "Kompletní kurz výroby mýdel (4 moduly)",
      "500 unikátních receptů pro každý typ pleti",
      "Kurz výroby tekutých mýdel krok za krokem",
      "Kurz výroby esenciálních olejů",
      "BONUS — Tělová kosmetika",
      "BONUS — Soli do koupele",
      "BONUS — Tuhý šampon",
      "Doživotní přístup (PDF/online)",
    ],
    guaranteeText:
      "Plná 14denní garance vrácení peněz. Pokud z kurzu nebudete nadšení, vrátíme vám 100 % částky, bez zbytečných otázek.",
    guaranteeImageAlt: "Pečeť 14denní garance vrácení peněz",
    regularPriceLabel: "Původně",
    regularPrice: "995 Kč",
    offerPrice: "199 Kč",
    discountBadge: "SLEVA 80 %",
    urgencyText: "Jednorázová platba za doživotní přístup",
    bottomUrgency: "Tato exkluzivní nabídka mizí, jakmile odpočet dosáhne nuly.",
    button: "ZÍSKAT MEGA BALÍČEK HNED TEĎ",
    trustRow: "100% bezpečná platba · Okamžitý přístup · Garance 14 dní",
  },

  instructorBio: {
    name: "Eliška Vránová",
    title: "Odbornice na přírodní kosmetiku",
    bio: "Ahoj, já jsem Eliška. Přírodní kosmetice a mydlářství se věnuji už více než 8 let. To, co začalo jako osobní potřeba pečovat o svou pleť bez zatěžující chemie, se postupně stalo mou největší vášní... a taky životním stylem. Za ta léta jsem vyvinula desítky vlastních receptur a pomohla spoustě žen, jako jste vy, udělat první krůčky v tomto voňavém světě — vyrobit si první mýdlo z běžných surovin z kuchyně a objevit radost z toho, že o sebe i své blízké pečují přírodní cestou. Vím přesně, jaké to je začínat od nuly, bez zkušeností, s obavami z neúspěchu a pocitem, že nevíte, čeho se chytit. Proto v tomto kurzu předávám vše, co jsem se naučila – srozumitelně, prakticky a bez zbytečných složitostí.",
    imageAlt: "Eliška Vránová, expertka na přírodní kosmetiku a ruční výrobu mýdel",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ručně vyráběná mýdla vytvořená Eliškou",
      "Práce v dílně na výrobu přírodní kosmetiky",
      "Hotové přírodní produkty",
    ],
    yearsLabel: "Více než 8 let",
    yearsText: "tvorby přírodní kosmetiky",
    studentsLabel: "Přes 2 586",
    studentsText: "proškolených studentek",
  },

  testimonials: {
    headline: "Co říkají ti, kteří už kurzem prošli",
    subheadline: "Skutečné recenze od našich studentek kurzu EkoBylinka.",
    productLabel: "EkoBylinka — Kurz výroby přírodních mýdel",
    reviewedLabel: "ohodnotila",
    actions: { like: "To se mi líbí", comment: "Okomentovat", share: "Sdílet" },
    items: [
      {
        name: "Jana Dvořáková",
        handle: "@jana_d",
        text: "Ten kurz mě naprosto nadchl. Zkoušela jsem všechno přesně tak, jak nás lektorka učila, a za necelý měsíc jsem měla kompletní sbírku vlastních mýdel pro celou rodinu. Pleť mých dětí se výrazně zlepšila od chvíle, co používáme jen mé domácí přírodní produkty. Moc děkuju, opravdu to za to stálo.",
      },
      {
        name: "Marie Novotná",
        handle: "",
        text: "Před týdnem jsem kurz dokončila a jsem okouzlená. Už jsem vyrobila svoje první kousky, doma jsme je otestovali a všichni jsou nadšení. Pleť se mi zdá mnohem hebčí a hydratovanější a vůně jsou prostě úžasné. Děkuji za tuhle příležitost, stojí to za každou korunu.",
      },
      {
        name: "Zuzana Křížová",
        handle: "",
        text: "Píšu tenhle komentář, protože už je to nějaký čas, co jsem kurzem prošla, a od té doby jsem si nekoupila jediné průmyslové mýdlo. Celá rodina používá moje přírodní produkty a rozdíl pro pleť je obrovský. Nikdy by mě nenapadlo, že doma dokážu vyrobit tak kvalitní věci. DÍKY. Tohle byla skvělá investice.",
      },
      {
        name: "David Horák",
        handle: "@david_h",
        text: "Fantastický obsah, všechno je srozumitelné a profesionální. A ty bonusy zdarma... pokud máte možnost je získat, neváhejte ani vteřinu. Strašně cenné informace. Ať se vám daří a moc děkuju za to, že lidem předáváte takové know-how.",
      },
    ],
    cta: "CHCI ZAČÍT JEŠTĚ DNES",
  },

  closingProof: {
    headlinePre: "Naše studentky vyrábějí svá první mýdla",
    headlineHighlight: "už během prvního týdne",
    headlinePost: ". Na co ještě čekáte?",
    ctaLabel: "ZAČÍT DNES",
  },

  guarantee: {
    badgeLabel: "GARANCE 14 DNÍ",
    headline: "ŽÁDNÉ STRACHY, VEŠKERÉ RIZIKO BEREME NA SEBE.",
    text: "Máte celé dva týdny na to, abyste si kurz vyzkoušeli, a pokud se vám nebude líbit nebo nenaplní vaše očekávání, bez debat vám vrátíme 100 % vašich peněz.",
    badgeAlt: "Pečeť 14denní garance EkoBylinka",
    certs: [
      { icon: "Award", label: "Ověřená kvalita" },
      { icon: "ShieldCheck", label: "100% bezpečná platba" },
      { icon: "Lock", label: "Ochrana osobních údajů" },
      { icon: "BadgeCheck", label: "Spokojené studentky" },
    ],
  },

  faq: {
    headline: "Často kladené dotazy",
    subheadline: "Vše, co potřebujete vědět předtím, než začnete.",
    items: [
      {
        q: "Je platba bezpečná?",
        a: "Ano, platba probíhá přes Hotmart — jednu z nejbezpečnějších a nejuznávanějších digitálních platforem na světě, která funguje ve více než 160 zemích a má ty nejpřísnější bezpečnostní certifikáty. Vaše platební údaje budou zcela chráněné a 100% důvěrné, takže můžete nakupovat naprosto bez obav.",
      },
      {
        q: "Zvládnu to, i když jsem úplný začátečník?",
        a: "Samozřejmě! Všechny e-booky a návody jsou sepsány hezky krok za krokem a reálně potřebujete jen chuť se do toho pustit. Celý proces je velmi jednoduchý a naučíme vás pracovat s dostupnými a praktickými nástroji.",
      },
      {
        q: "Můžu do kurzu vstoupit z jakéhokoliv zařízení?",
        a: "Ano, ke kurzu máte přístup odkudkoliv! Ať už jste na počítači, tabletu nebo mobilu, obsah si můžete procházet na jakémkoliv operačním systému – Windows, macOS, iOS nebo Android. Navíc si můžete stáhnout aplikaci Hotmart pro ještě pohodlnější přístup z telefonu.",
      },
      {
        q: "Je začátek finančně náročný?",
        a: "Vůbec ne! Výroba přírodní kosmetiky vyžaduje jen minimální počáteční investici. Navíc vás naučíme, jak efektivně využívat dostupné a levné materiály, abyste začali bez zbytečného rozhazování.",
      },
      {
        q: "Kdy kurz začíná?",
        a: "Ihned po zaplacení vám do e-mailu dorazí odkaz s přístupovými údaji (a digitálními e-booky v PDF), díky kterému můžete do platformy vstoupit klidně hned teď. Kurz můžete procházet vlastním tempem a zůstane vám už napořád.",
      },
      {
        q: "Co všechno je v kurzu zahrnuto?",
        a: "Kurz zahrnuje doživotní přístup, detailní e-booky s postupy, veškeré materiály ke stažení (PDF) a naši technickou podporu.",
      },
      {
        q: "Co když mi kurz nebude vyhovovat?",
        a: "Máte plnou 14denní garanci. Pokud z jakéhokoliv důvodu nebudete spokojení, stačí nám napsat a vrátíme vám 100 % peněz, bez zbytečných otázek.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Tato webová stránka není součástí sítě Facebook ani společnosti Facebook Inc. Navíc tento web NENÍ společností Facebook nijak podporován ani sponzorován.",
    trademark: "FACEBOOK je registrovaná ochranná známka společnosti FACEBOOK, Inc.",
  },
};