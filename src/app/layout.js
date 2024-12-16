import "./globals.css";

export const metadata = {
  title: "Click & Paf - Les Solutions qui Claquent",
  description:
    "Des solutions rapides et efficaces pour vos problèmes quotidiens. Click & Paf : un, clic et c'est réglé !",
  keywords:
    "click, paf, solutions, clic, réglé, problèmes, quotidiens, click & paf, click and paf, click&paf, clickandpaf, solution, seul clic, bricolage, quotidien, rapide, efficace, service, express, assistance, domicile, SOS, sos, administratif, astuces, astuce, pratique",
  "og:image": "/social-image.png",
  "og:image:width": "1200",
  "og:image:height": "630",
  "twitter:card": "summary-large-image",
  "twitter:image": "/social-image.png",
  "twitter:title": "Click & Paf - Les Solutions qui Claquent",
  "twitter:description":
    "Des solutions rapides et efficaces pour vos problèmes quotidiens. Click & Paf : un, clic et c'est réglé !",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <header>
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="mask-icon" href="/favicon-32x32.svg"></link>
      </header>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
