import Article from "@/components/Article";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import { articles } from "@/data/articles";
import { baseMetadata } from "./layout";

export const metadata = baseMetadata();

const App = () => {
  const articlesArray = Object.entries(articles);
  let articlesOfDay = [];  

  if (articlesArray.length < 2) {
    articlesOfDay = articlesArray;
  } else {
    const today = new Date(Date.now());
    const daylyIndex = ((today.getDay() + (today.getMonth() + 1) + today.getFullYear()) % articlesArray.length);    

    const indexes = [];
    for (let i = 0; i < 2; i++) {
      indexes.push((daylyIndex + i) % articlesArray.length);
    }
    
    articlesOfDay = indexes.map(index => articlesArray[index]);
  }

  return <>
    <Header title={'Click & Paf'}>
        <p className="slogan">Un clic, et paf, c’est réglé !</p>
        <Button href="#services">Découvrez nos services</Button>
    </Header>

    <main>
      <section id="services" className="section">
          <h2>Nos Services</h2>
          <p className="section-description">Chez Click & Paf, nous résolvons vos problèmes du quotidien en un rien de temps. 
              Que ce soit pour des réparations express, une assistance à domicile, ou un coup de pouce dans vos démarches administratives, 
              nos experts interviennent rapidement pour vous simplifier la vie. Avec un seul clic, bénéficiez d’un service efficace, fiable et toujours avec une touche d’humour.</p>
          <div className="service-grid">
              <div className="service-card">
                  <img src="/images/repair.webp" alt="Réparations express" />
                  <h3>Réparations Express <br/>Votre Solution Rapide et Fiable</h3>
                  <p>Vous avez une fuite d’eau, un ordinateur qui ne s’allume plus ou un appareil électroménager capricieux ? 
                      Pas de panique ! Avec Click & Paf, nos experts interviennent rapidement pour résoudre vos problèmes, où que vous soyez. 
                      Nous offrons des services de dépannage en urgence pour les particuliers et les professionnels.
                  </p>
              </div>
              <div className="service-card">
                  <img src="/images/handyman.webp" alt="Assistance à domicile" />
                  <h3>Assistance à Domicile <br/>Un Service Pratique pour Votre Quotidien</h3>
                  <p>Vous n’avez pas le temps de monter ce meuble flambant neuf ou de réaliser quelques petits travaux ? 
                      Pas de stress, notre service d’assistance à domicile est là pour vous simplifier la vie. 
                      Nous sommes rapides, efficaces et prêts à intervenir chez vous.
                  </p>
              </div>
              <div className="service-card">
                  <img src="/images/admin.webp" alt="SOS administratif" />
                  <h3>SOS Administratif <br/>Gagnez du Temps et de la Tranquillité</h3>
                  <p>Les formalités administratives peuvent être stressantes et chronophages. Avec Click & Paf, 
                      vous bénéficiez d’un accompagnement personnalisé pour toutes vos démarches. Déclarations, 
                      formulaires, ou demandes en ligne ? Nous sommes là pour vous aider.
                  </p>
              </div>
          </div>
      </section>

      <section id="testimonials" className="section">
        <h2>Témoignages</h2>
        <p className="section-description">Rien de mieux que les retours de nos clients pour témoigner de l’efficacité de nos services. 
            Qu’il s’agisse d’une réparation express, d’un meuble monté en un éclair, ou d’une déclaration administrative remplie sans stress, 
            nos clients partagent leurs expériences avec humour et enthousiasme. 
            Découvrez leurs histoires, et rejoignez la communauté de ceux qui cliquent et disent : « Paf, c’est réglé ! ».</p>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Grâce à ce service, j’ai enfin pu monter cette étagère Ikea sans perdre la tête. Merci !”</p>
            <h4>- Thomas B.</h4>
          </div>
          <div className="testimonial-card">
            <p>“Mon ordinateur plantait tout le temps. Maintenant, il tourne comme une horloge !”</p>
            <h4>- Emma R.</h4>
          </div>
          <div className="testimonial-card">
            <p>“J’avais une fuite que personne ne pouvait résoudre, et là, c’était réglé en un clic. Magique !”</p>
            <h4>- Lucas M.</h4>
          </div>
          <div className="testimonial-card">
            <p>“Le jardin de mes rêves est enfin une réalité. Et tout ça sans me salir les mains !”</p>
            <h4>- Clara T.</h4>
          </div>
          <div className="testimonial-card">
            <p>“J’avais l’impression que c’était impossible de trouver un bon service en ligne, mais celui-ci m’a prouvé le contraire !”</p>
            <h4>- Hugo C.</h4>
          </div>
        </div>
      </section>

      <section id="blog" className="section">
        <h2>Articles du jour</h2>

        <div className="blog-grid">
          {articlesOfDay.map(([slug, article]) => <Article key={slug} article={{ slug, ...article }} />)}
        </div>

        <div className="blog-all">
            <Button href="/blog" main>Voir tous les articles</Button>
        </div>
      </section>

      <section id="contact" className="section">
          <h2>Contactez-nous</h2>
          <p>Expliquez-nous votre problème (ou envoyez une photo si ça vous dépasse), et on s’en charge.</p>
          <form action="#" method="post">
              <input type="text" name="name" placeholder="Votre nom" required />
              <input type="email" name="email" placeholder="Votre email" required />
              <textarea name="message" placeholder="Décrivez votre problème..." required></textarea>
              <Button main type="submit">Envoyer</Button>
          </form>
      </section>
    </main>
  </>;
};

export default App;
