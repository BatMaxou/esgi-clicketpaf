import { URL_SSR } from "@/tools";
import "@/style/globals.scss";

const [title, description] = [
  "Click & Paf - Les Solutions qui Claquent",
  "Des solutions rapides et efficaces pour vos problèmes quotidiens. Click & Paf : un, clic et c'est réglé !"
];

export const metadata = {
  title: title,
  description: description,
  manifest: '/manifest.json',
  keywords: 'click, paf, solutions, clic, réglé, problèmes, quotidiens, click & paf, click and paf, click&paf, clickandpaf, solution, seul clic, bricolage, quotidien, rapide, efficace, service, express, assistance, domicile, SOS, sos, administratif, astuces, astuce, pratique',
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
    title: title,
    description: description,
    images: [
      {
        url: `${URL_SSR}/social-image.png`,
        width: 1200,
        height: 630,
        alt: title
      },
    ],
  },
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: `${URL_SSR}/social-image.png`,
        width: 1200,
        height: 630,
        alt: title
      },
    ],
    url: URL_SSR,
    type: 'website',
  },
}

const RootLayout = ({ children }) => {
  return <html lang="fr">
    <body>
      {children}
      
      <footer>
        <p>© 2024 Click & Paf - Les Solutions qui Claquent. Tous droits réservés.</p>
      </footer>  
    </body>
  </html>
};

export default RootLayout;
