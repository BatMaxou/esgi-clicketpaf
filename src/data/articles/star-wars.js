import { Components } from "@/enum";

const starWars = {
  title:
    "L’univers Star Wars : Un voyage au cœur de la galaxie lointaine, très lointaine",
  shortDescription:
    "Découvrez les secrets, les légendes et l’influence culturelle de la saga Star Wars, une épopée qui a captivé des millions de fans à travers le monde.",
  keywords: [
    "Star Wars",
    "galaxie",
    "science-fiction",
    "Jedi",
    "Sith",
    "culture pop",
  ],
  content: {
    intro: {
      type: Components.TEXT,
      content:
        'Depuis sa première apparition en 1977 avec "Un Nouvel Espoir", la saga Star Wars est devenue un phénomène culturel mondial. Créée par George Lucas, cette épopée intergalactique mêle aventures épiques, batailles spatiales et luttes entre le bien et le mal, incarnées par les Jedi et les Sith. Mais Star Wars, c’est bien plus qu’une simple série de films : c’est un univers riche en histoires, en personnages et en mythologie qui a marqué plusieurs générations.',
    },
    originsAndCreation: {
      type: Components.TEXT_IMAGE,
      content:
        'George Lucas s’est inspiré de nombreux éléments pour créer Star Wars, allant des récits mythologiques aux westerns en passant par les films de samouraïs d’Akira Kurosawa. Lucas souhaitait raconter une histoire universelle sur la lutte entre le bien et le mal, ancrée dans un cadre de science-fiction. Le premier film, "Un Nouvel Espoir", a rencontré un succès immédiat, devenant l’un des piliers de la culture pop moderne.',
      src: "/images/articles/star-wars/origines-creation.webp",
      alt: "George Lucas sur le plateau de tournage du premier Star Wars.",
      left: true,
    },
    iconicCharacters: {
      type: Components.TEXT,
      content:
        "Star Wars doit une grande partie de son succès à ses personnages emblématiques. Luke Skywalker, le jeune fermier devenu Jedi, incarne l’archétype du héros en quête d’aventure. Princesse Leia, quant à elle, est une figure forte et indépendante, bien loin des clichés de princesse en détresse. Han Solo, le contrebandier au grand cœur, apporte une touche d’humour et de bravoure. Du côté obscur, Dark Vador reste l’un des méchants les plus iconiques de l’histoire du cinéma, avec une profondeur psychologique qui a marqué les esprits.",
    },
    forceAndPhilosophy: {
      type: Components.TEXT_IMAGE,
      content:
        "Au cœur de l’univers Star Wars se trouve la Force, une énergie mystique qui relie tous les êtres vivants. Les Jedi, gardiens de la paix, utilisent le côté lumineux de la Force pour protéger la galaxie, tandis que les Sith exploitent le côté obscur pour assouvir leur soif de pouvoir. Cette dualité reflète des thèmes philosophiques sur l’équilibre, le destin et la tentation. La philosophie de la Force trouve des échos dans de nombreuses traditions spirituelles, ajoutant une dimension intemporelle à la saga.",
      left: false,
    },
    culturalImpact: {
      type: Components.TEXT,
      content:
        'L’influence de Star Wars s’étend bien au-delà du cinéma. La saga a inspiré des générations de réalisateurs, d’écrivains et de créateurs de jeux vidéo. Des expressions comme "Que la Force soit avec toi" sont entrées dans le langage courant, et les produits dérivés vont des jouets aux romans en passant par les séries animées. L’univers s’est également enrichi avec la sortie de nouvelles trilogies et de spin-offs tels que "Rogue One" et "The Mandalorian", qui ont séduit un public aussi bien ancien que nouveau.',
    },
    evolutionOfTheSaga: {
      type: Components.TEXT_IMAGE,
      content:
        'Après la trilogie originale, Star Wars a connu plusieurs renaissances. La prélogie, sortie entre 1999 et 2005, explore les origines de Dark Vador et la chute de la République galactique. La postlogie, débutée en 2015 avec "Le Réveil de la Force", poursuit l’héritage de la saga en introduisant de nouveaux héros tels que Rey et Finn. Les séries télévisées, comme "The Clone Wars" et "The Mandalorian", ont également joué un rôle majeur dans l’expansion de l’univers.',
      left: true,
    },
    fanCommunity: {
      type: Components.TEXT,
      content:
        "La communauté de fans de Star Wars est l’une des plus passionnées au monde. Des conventions comme la Star Wars Celebration rassemblent des milliers de fans chaque année pour célébrer leur amour commun pour la galaxie lointaine. Les fans participent activement à l’univers grâce à des fanfictions, des costumes détaillés et des fan films. Les réseaux sociaux permettent également de connecter les passionnés du monde entier et de partager des théories sur l’avenir de la saga.",
    },
    starWarsInGaming: {
      type: Components.TEXT_IMAGE,
      content:
        'L’univers de Star Wars s’est largement développé dans l’industrie du jeu vidéo. Des classiques comme "Knights of the Old Republic" aux récents "Jedi: Fallen Order", les jeux vidéo ont permis aux joueurs d’incarner des Jedi, des chasseurs de primes et même des pilotes de chasseurs X-Wing. Ces expériences interactives ont contribué à enrichir l’histoire de la saga et à immerger les joueurs dans des aventures galactiques palpitantes.',
      left: false,
    },
    futureOfStarWars: {
      type: Components.TEXT,
      content:
        'Avec les nouvelles séries produites par Disney, telles que "Ahsoka", "Andor" et "L’Académie Jedi", l’avenir de Star Wars s’annonce prometteur. Les projets de films indépendants et de nouvelles trilogies sont également en cours de développement. La galaxie lointaine, très lointaine, a encore beaucoup d’histoires à raconter, et les fans peuvent s’attendre à de nombreuses surprises dans les années à venir.',
    },
    expandedUniverse: {
      type: Components.TEXT_IMAGE,
      content:
        'Avant le rachat de Lucasfilm par Disney, l’univers étendu de Star Wars comprenait des romans, bandes dessinées et jeux vidéo qui exploraient des histoires parallèles et des personnages secondaires. Bien que certaines de ces œuvres aient été déclassées en tant que "Légendes", elles restent très appréciées des fans. Des personnages comme Mara Jade ou Kyle Katarn sont devenus cultes grâce à l’univers étendu.',
      left: true,
    },
    iconicSpaceships: {
      type: Components.TEXT,
      content:
        "Les vaisseaux spatiaux sont au cœur de l’univers Star Wars. Du célèbre Faucon Millenium au redoutable Star Destroyer, chaque vaisseau a une identité propre et joue un rôle essentiel dans les batailles épiques. Le X-Wing de Luke Skywalker est emblématique de la rébellion, tandis que les TIE Fighters sont synonymes de l’Empire galactique. Ces vaisseaux ont contribué à définir l’esthétique futuriste et rétro de la saga.",
    },
    memorableSoundtrack: {
      type: Components.TEXT_IMAGE,
      content:
        'La bande originale de Star Wars, composée par John Williams, est l’une des plus reconnaissables de l’histoire du cinéma. Des morceaux tels que "The Imperial March" ou "Binary Sunset" sont devenus légendaires. La musique joue un rôle fondamental dans la narration, amplifiant les moments de tension, d’émotion et d’action. Williams a su créer un univers sonore qui transporte instantanément les spectateurs dans la galaxie Star Wars.',
      left: false,
    },
    lightsaberDuelLegacy: {
      type: Components.TEXT,
      content:
        "Les duels au sabre laser sont parmi les scènes les plus attendues de chaque film Star Wars. Ils représentent non seulement des combats physiques, mais aussi des confrontations émotionnelles et symboliques entre le bien et le mal. Des duels emblématiques comme celui entre Obi-Wan Kenobi et Anakin Skywalker ont marqué des générations de fans, établissant le sabre laser comme un symbole iconique de la saga.",
    },
    droidsAndTheirRoles: {
      type: Components.TEXT_IMAGE,
      content:
        "Les droïdes ont une place particulière dans l’univers Star Wars. R2-D2 et C-3PO sont bien plus que de simples compagnons comiques : ils sont témoins et acteurs des grands événements de la saga. D’autres droïdes, comme BB-8 ou K-2SO, apportent une nouvelle dynamique aux récits. Leur rôle varie de l’assistance technique à la participation active aux batailles, contribuant à l’équilibre entre humour et action dans les films.",
      src: "/images/articles/star-wars/droids-roles.webp",
      alt: "R2-D2 et C-3PO dans une scène emblématique de Star Wars.",
      left: true,
    },
    finalThoughts: {
      type: Components.TEXT,
      content:
        "Star Wars est bien plus qu’une saga cinématographique : c’est un phénomène culturel qui a su transcender les époques et les générations. Que vous soyez un fan de la première heure ou que vous découvriez l’univers avec les nouvelles séries, il y a toujours quelque chose à explorer dans cette galaxie infinie. Que la Force soit avec vous !",
    },
  },
  order: [
    "intro",
    "originsAndCreation",
    "iconicCharacters",
    "forceAndPhilosophy",
    "culturalImpact",
    "evolutionOfTheSaga",
    "fanCommunity",
    "starWarsInGaming",
    "futureOfStarWars",
    "expandedUniverse",
    "iconicSpaceships",
    "memorableSoundtrack",
    "lightsaberDuelLegacy",
    "droidsAndTheirRoles",
    "finalThoughts",
  ],
};

export default starWars;
