import { URL_SSR } from "@/tools";
import "@/style/globals.scss";

const [baseTitle, baseDescription] = [
  "Click & Paf - Les Solutions qui Claquent",
  "Des solutions rapides et efficaces pour vos problèmes quotidiens. Click & Paf : un, clic et c'est réglé !"
];

export const baseMetadata = (title = null, description = null, keywords = null, dynamic = false) => {
  return {
    ...(!dynamic ? {
      title: title ?? baseTitle,
      description: description ?? baseDescription,
    } : {}),
    manifest: '/manifest.json',
    keywords: `${keywords ? `${keywords},` : '' }clicketpaf, click et paf, articles, blog, clicket paf, click etpaf, click, paf, solutions, clic, réglé, problèmes, quotidiens, click & paf, click and paf, click&paf, clickandpaf, solution, seul clic, bricolage, quotidien, rapide, efficace, service, express, assistance, domicile, SOS, sos, administratif, astuces, astuce, pratique`,
    robots: 'index, follow',
    icons: [
      {
        rel: 'mask-icon',
        url: '/favicon-32x32.svg',
        color: '#000000',
      },
    ],
    twitter: {
      card: 'summary_large_image',
      title: title ?? baseTitle,
      description: description ?? baseDescription,
      images: [
        {
          url: `${URL_SSR}/social-image.png`,
          width: 1200,
          height: 630,
          alt: title ?? baseTitle
        },
      ],
    },
    openGraph: {
      title: title ?? baseTitle,
      description: description ?? baseDescription,
      images: [
        {
          url: `${URL_SSR}/social-image.png`,
          width: 1200,
          height: 630,
          alt: title ?? baseTitle
        },
      ],
      url: URL_SSR,
      type: 'website',
    }
  };
}

const RootLayout = ({ children }) => {
  return <html lang="fr">
    <body>
      {children}
      
      <footer>
        <p>Nous contacter</p>
        <address>
          <a href="mailto:clicketpaf.team@gmail.com">clicketpaf.team@gmail.com</a><br />
          <a href="tel:+33634806993">06 34 80 69 93</a>
        </address>
        <p>© 2025 Click & Paf - Les Solutions qui Claquent. Tous droits réservés.</p>
      </footer>  
    </body>
  </html>
};

export default RootLayout;
