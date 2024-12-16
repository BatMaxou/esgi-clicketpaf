const App = () => {
  return <>
    <header>
      <div className="container">
          <h1>Click & Paf</h1>
          <p className="slogan">Un clic, et paf, c’est réglé !</p>
          <a href="#services" className="btn-main">Découvrez nos services</a>
      </div>
    </header>

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
                  <p>“J’ai cliqué, et paf, mon évier ne fuit plus. Incroyable !”</p>
                  <h4>- Sophie L.</h4>
              </div>
              <div className="testimonial-card">
                  <p>“J’ai cliqué, et paf, mon évier ne fuit plus. Incroyable !”</p>
                  <h4>- Julie L.</h4>
              </div>
              <div className="testimonial-card">
                  <p>“J’ai cliqué, et paf, mon évier ne fuit plus. Incroyable !”</p>
                  <h4>- Marie L.</h4>
              </div>
              <div className="testimonial-card">
                  <p>“Je n’arrivais pas à remplir mes impôts, maintenant c’est fait, et j’ai même reçu un compliment du fisc.”</p>
                  <h4>- Laurie P.</h4>
              </div>
          </div>
      </section>

      <section id="blog" className="section">
        <h2>Blog & Actualités</h2>
        <p className="section-description">
          Découvrez des conseils pratiques, des astuces malines et des récits hilarants tirés de notre expérience sur le terrain.
          Que vous cherchiez à prolonger la vie de vos appareils, éviter les pires ratés en bricolage, ou simplifier vos démarches administratives, nous avons ce qu’il vous faut.
          Un espace plein d’idées pour rendre votre quotidien plus facile, une lecture à la fois !
        </p>

        <div className="blog-grid">
          <article className="blog-card">
              <a href="blog/5-astuces-pour-proteger-votre-pc.html" title="Lire : 5 astuces pour ne pas exploser votre PC">
                  <h3>5 astuces pour ne pas exploser votre PC</h3>
                  <p>Découvrez comment prolonger la vie de votre ordinateur avec des astuces simples et efficaces.</p>
              </a>
          </article>

          <article className="blog-card">
              <a href="blog/les-pires-rates-en-bricolage.html" title="Lire : Les pires ratés en bricolage qu’on a dû réparer">
                  <h3>Les pires ratés en bricolage qu’on a dû réparer</h3>
                  <p>Une collection hilarante des pires catastrophes en bricolage. Heureusement, on était là pour sauver la mise.</p>
              </a>
          </article>
        </div>

        <div className="blog-all">
          <a href="blog/index.html" className="btn-secondary" title="Voir tous les articles du blog">Voir tous les articles</a>
        </div>
      </section>

      <section id="contact" className="section">
          <h2>Contactez-nous</h2>
          <p>Expliquez-nous votre problème (ou envoyez une photo si ça vous dépasse), et on s’en charge.</p>
          <form action="#" method="post">
              <input type="text" name="name" placeholder="Votre nom" required />
              <input type="email" name="email" placeholder="Votre email" required />
              <textarea name="message" placeholder="Décrivez votre problème..." required></textarea>
              <button type="submit" className="btn-main">Envoyer</button>
          </form>
      </section>
    </main>
  </>;
};

export default App;
