import './globals.css';

export const metadata = {
  title: "Click & Paf - Les Solutions qui Claquent",
  description: "Des solutions rapides et efficaces pour vos problèmes quotidiens. Click & Paf : un, clic et c'est réglé !",
  keywords: "click, paf, solutions, clic, réglé, rapide, efficace, problèmes, quotidiens, click & paf, click and paf, click&paf, clickandpaf",
};

const RootLayout = ({ children }) => {
  return <html lang="fr">
    <body>{children}</body>
  </html>
};

export default RootLayout;
