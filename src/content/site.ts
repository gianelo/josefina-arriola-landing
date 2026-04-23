// Single source of truth for all landing-page copy AND its shape.
// Types below drive autocomplete + validation in every component.
// Edit the `site` object to rebrand — TS will flag missing fields.

interface CTA {
  label: string;
  href: string;
}

interface BookItem {
  title: string;
  description: string;
  image?: string;
  link: string;
}

interface EventItem {
  name: string;
  date: string; // ISO date (YYYY-MM-DD)
  location: string;
  description: string;
  link?: string;
}

interface StoryChapter {
  label: string;
  body: string;
}

interface SocialLink {
  label: string;
  href: string;
}

export interface SiteContent {
  title: string;
  description: string;
  url: string;
  ogImage: string;

  hero: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    ctaPrimary?: CTA;
    ctaSecondary?: CTA;
  };

  story: {
    title: string;
    chapters: StoryChapter[];
    closing?: string;
    cta?: CTA;
  };

  books: {
    title: string;
    subtitle?: string;
    items: BookItem[];
  };

  events: {
    title: string;
    subtitle?: string;
    items: EventItem[];
  };

  about: {
    title: string;
    body: string;
    image?: string;
  };

  speaking: {
    title: string;
    subtitle?: string;
    buttonLabel: string;
    email?: string;
  };

  newsletter: {
    title: string;
    subtitle?: string;
    placeholder: string;
    buttonLabel: string;
    disclaimer?: string;
  };

  contact: {
    title: string;
    subtitle?: string;
    email?: string;
  };

  footer: {
    copyright: string;
    social?: SocialLink[];
  };
}

export const site: SiteContent = {
  title: "Josefina Arriola — Dios restaura incluso desde las cenizas",
  description:
    "Pastora y autora del libro 'Lágrimas que solo el cielo ve'. Un testimonio real de que Dios transforma lo que el mundo rompió.",
  url: "https://josefinaarriola.com",
  ogImage: "/og.jpg",

  hero: {
    eyebrow: "Pastora · Autora · Testimonio de vida",
    title: "Dios restaura incluso desde las cenizas",
    subtitle:
      "Soy Josefina Arriola. Una historia real de abandono, abuso y supervivencia que se transformó en fe, identidad y propósito. Si alguna vez sentiste que tu historia estaba rota, esto es para ti.",
    ctaPrimary: { label: "Conoce mi libro", href: "#books" },
    ctaSecondary: { label: "Sobre mí", href: "#about" },
  },

  story: {
    title: "Mi historia",
    chapters: [
      {
        label: "Antes",
        body: "Abandono, abuso, silencio. Pasé por lugares donde muchos no regresan. Hubo noches donde pensé que mi historia ya estaba rota sin vuelta atrás.",
      },
      {
        label: "El encuentro",
        body: "Y entonces conocí a Dios. No fue con grandes palabras ni en una cruzada. Fue Él quien me encontró a mí, en medio del silencio, cuando ya no me quedaba nada para dar.",
      },
      {
        label: "Hoy",
        body: "Hoy camino con Cristo. Soy pastora, autora y testimonio vivo de que lo que el mundo rompió, Él lo restaura. Mi historia no terminó en cenizas — apenas estaba empezando.",
      },
    ],
    closing: "Toda la historia está en el libro.",
    cta: { label: "Leer Lágrimas que solo el cielo ve", href: "#books" },
  },

  books: {
    title: "Mi libro",
    subtitle: "Mi historia, puesta en papel para que llegue a quien la necesite.",
    items: [
      {
        title: "Lágrimas que solo el cielo ve",
        description:
          "Un testimonio crudo y real de abandono, abuso y supervivencia, y de cómo Dios transforma lo que el mundo rompió. Disponible en Amazon.",
        image: "/books/lagrimas-portada.jpg",
        link: "https://www.amazon.com/",
      },
    ],
  },

  events: {
    title: "Lo que viene",
    subtitle: "Nuevos espacios para caminar juntos.",
    items: [
      {
        name: "Podcast propio",
        date: "2026-07-01",
        location: "YouTube y plataformas de audio",
        description:
          "Conversaciones reales sobre sanidad, restauración y fe. Muy pronto.",
      },
      {
        name: "Charlas y conferencias",
        date: "2026-08-01",
        location: "Iglesias y eventos en Estados Unidos",
        description: "Invítame a compartir el testimonio con tu comunidad.",
      },
      {
        name: "Mentoría y comunidad",
        date: "2026-09-01",
        location: "En línea",
        description:
          "Un espacio para quienes quieren reconstruir su vida desde la fe.",
      },
    ],
  },

  about: {
    title: "Sobre Josefina",
    body:
      "Soy Josefina Arriola, pastora, autora y testimonio vivo de que Dios restaura lo que el mundo rompió. Pasé por lugares donde muchos no regresan: el abandono, el abuso, el silencio. Pero aun en la adversidad, desde que tengo uso de razón, siempre tuve un corazón noble, generoso y dadivoso. Hoy camino con Cristo y entiendo que Él me dio, como a Salomón, sabiduría, prudencia y un corazón tan grande como la arena del mar (1 Reyes 4:29). Me gusta recibir bendiciones, pero para bendecir a otros. Mi oración es que mi historia sea puente para la tuya.",
    image: "/about-josefina.jpg",
  },

  speaking: {
    title: "¿Quieres invitarme a hablar?",
    subtitle:
      "Si lideras una iglesia, grupo o evento y crees que mi testimonio puede bendecir a tu comunidad, me encantaría acompañarte.",
    buttonLabel: "Enviar invitación",
    email: "invitaciones@josefinaarriola.com",
  },

  newsletter: {
    title: "Recibe un mensaje de esperanza cada semana",
    subtitle:
      "Palabras, oración y testimonios directos a tu correo. Sin sermones largos — solo un recordatorio de que no estás solo.",
    placeholder: "tu@correo.com",
    buttonLabel: "Suscribirme",
    disclaimer: "Tu correo es sagrado para mí. Nunca lo comparto. Dios te bendiga.",
  },

  contact: {
    title: "Escríbeme",
    subtitle:
      "Si algo de lo que leíste tocó tu corazón, quiero saberlo. Dios te bendiga.",
    email: "contacto@josefinaarriola.com",
  },

  footer: {
    copyright: "© Josefina Arriola · Dios te bendiga",
    social: [
      { label: "Instagram", href: "https://instagram.com/j.arriolaaa" },
      { label: "Facebook", href: "https://facebook.com/" },
      { label: "YouTube", href: "https://youtube.com/" },
    ],
  },
};
