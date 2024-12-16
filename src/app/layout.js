import "./globals.css";

export const metadata = {
  title: "Click & Paf - Les Solutions qui Claquent",
  description: "Des solutions rapides et efficaces pour vos problèmes quotidiens. Click & Paf : un, clic et c'est réglé !",
  keywords: "click, paf, solutions, clic, réglé, problèmes, quotidiens, click & paf, click and paf, click&paf, clickandpaf, solution, seul clic, bricolage, quotidien, rapide, efficace, service, express, assistance, domicile, SOS, sos, administratif, astuces, astuce, pratique",
  "og:image": "/social-image.png",
  "og:image:width": "1200",
  "og:image:height": "630",
  "twitter:card": "summary-large-image",
  "twitter:image": "/social-image.png",
  "twitter:title": "Click & Paf - Les Solutions qui Claquent",
  "twitter:description": "Des solutions rapides et efficaces pour vos problèmes quotidiens. Click & Paf : un, clic et c'est réglé !",
  icon: "/favicon.ico",
  "apple-touch-icon": "/apple-touch-icon.png",
  manifest: "/manifest.json",
  "mask-icon": "/favicon-32x32.svg",
};

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
