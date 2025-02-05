import { Components } from "@/enum";

const septProblemesMachineACafe = {
    title: "Les 7 problèmes les plus fréquents d’une machine à café (et comment les résoudre !)",
    shortDescription: "Votre machine à café vous fait des misères ? Découvrez les 7 problèmes les plus courants et nos astuces pour y remédier !",
    keywords: ["machine à café", "panne", "réparation", "entretien", "café"],
    content: {
        introduction: {
            type: Components.TEXT,
            content: "Rien de pire que de se lever le matin et de découvrir que sa machine à café refuse de coopérer. Bruits suspects, café trop clair ou encore fuite d’eau, ces soucis sont courants. Heureusement, la plupart ont des solutions simples. Voici les 7 problèmes les plus fréquents et comment les régler ! Dans cet article, nous allons détailler chaque problème, expliquer ses causes possibles et vous proposer des solutions étape par étape. Suivez le guide !"
        },
        probleme1: {
            type: Components.TEXT_IMAGE,
            content: "Votre café a un goût étrange ? Il est peut-être temps de nettoyer votre machine. Le calcaire et les résidus de café peuvent altérer le goût. Utilisez un mélange de vinaigre blanc et d’eau pour détartrer votre appareil. Pensez aussi à nettoyer régulièrement le porte-filtre et le bac d’égouttage, car des dépôts de café et d’eau stagnante peuvent influencer le goût. Si l’odeur persiste après le nettoyage, utilisez un mélange d’eau et de bicarbonate pour neutraliser les résidus acides.",
            src: "/images/articles/les-7-problemes-les-plus-frequents-d-une-machine-a-cafe/gout-etrange.webp",
            alt: "Une tasse de café avec une grimace dessinée sur la mousse"
        },
        probleme2: {
            type: Components.TEXT_IMAGE,
            content: "Votre machine fuit ? Vérifiez si le réservoir est bien en place et si les joints ne sont pas usés. Un simple remplacement de joint peut souvent suffire. Parfois, une fuite peut être causée par un surplus de calcaire dans le circuit d’eau. Un bon détartrage peut résoudre ce problème. Si la fuite persiste, démontez soigneusement la machine pour vérifier s’il y a une fissure sur une des conduites internes. Il est également recommandé de ne pas trop remplir le réservoir pour éviter les débordements accidentels.",
            src: "/images/articles/les-7-problemes-les-plus-frequents-d-une-machine-a-cafe/fuite-eau.webp",
            alt: "Une machine à café avec de l’eau qui coule en dessous",
            left: true
        },
        probleme3: {
            type: Components.TEXT,
            content: "La machine fait un bruit anormal ? Il se peut qu’un élément soit encrassé ou qu’un détartrage soit nécessaire. Consultez également la notice pour identifier la source du problème. Un bruit anormal peut aussi provenir d’une pompe défectueuse ou d’un manque d’eau dans le réservoir. Essayez d’ajouter de l’eau et de redémarrer la machine. Si le bruit persiste, il peut être dû à une pièce mal fixée. Vérifiez les vis et les composants internes. Si votre machine fonctionne avec des capsules, un problème d’insertion incorrecte peut aussi être en cause.",
        },
        probleme4: {
            type: Components.TEXT,
            content: "Le café coule trop lentement ? Un filtre bouché peut être en cause. Nettoyez-le avec de l’eau chaude et une brosse douce. Si votre machine utilise un percolateur, pensez à vérifier la pression de l’eau. Un débit trop faible peut aussi indiquer un problème au niveau de la pompe ou du circuit hydraulique. Essayez de faire couler de l’eau claire sans café pour voir si le problème persiste. Dans certains cas, un changement de mouture du café peut également résoudre le problème : une mouture trop fine peut ralentir l’écoulement.",
        },
        probleme5: {
            type: Components.TEXT,
            content: "Votre machine ne s’allume plus ? Vérifiez le branchement et l’état du câble. Parfois, un simple reset suffit. Testez la prise avec un autre appareil pour vous assurer qu’elle fonctionne. Si votre machine dispose d’un fusible interne, il peut être nécessaire de le remplacer. Un problème électrique interne peut aussi être en cause : dans ce cas, il est conseillé de faire appel à un technicien qualifié plutôt que de démonter la machine soi-même.",
        },
        probleme6: {
            type: Components.TEXT_IMAGE,
            content: "Votre café est trop clair ? Vérifiez la quantité de café utilisée et ajustez la mouture. Un café trop grossier peut empêcher une extraction correcte. Si votre machine fonctionne avec des dosettes, essayez une autre marque ou un autre modèle de dosettes compatibles. Parfois, un problème de température d’eau peut aussi affecter l’extraction : un préchauffage insuffisant de la machine peut produire un café plus clair que d’habitude.",
            src: "/images/articles/les-7-problemes-les-plus-frequents-d-une-machine-a-cafe/cafe-clair.webp",
            alt: "Une tasse de café très clair",
            left: true
        },
        probleme7: {
            type: Components.TEXT,
            content: "Le café est froid ? Assurez-vous que la plaque chauffante fonctionne correctement et que votre tasse est préchauffée. Les machines à café modernes disposent souvent d’un réglage de température : vérifiez les paramètres. Si le problème persiste, il peut s’agir d’un dysfonctionnement du thermostat ou de la résistance chauffante, nécessitant une réparation ou un remplacement.",
        },
        conclusion: {
            type: Components.TEXT,
            content: "Avec un bon entretien et quelques vérifications régulières, votre machine à café peut durer des années. Nettoyez les pièces amovibles au moins une fois par semaine, faites un détartrage tous les mois et utilisez de l’eau filtrée pour limiter les dépôts de calcaire. Si un problème persiste malgré tout, il peut être temps de faire appel à un professionnel. Et si jamais votre machine vous lâche complètement… chez Click & Paf, on est là pour vous aider !"
        }
    },
    order: [
        "introduction",
        "probleme1",
        "probleme2",
        "probleme3",
        "probleme4",
        "probleme5",
        "probleme6",
        "probleme7",
        "conclusion"
    ],
    date: '2025-02-04 18:00:00',
};

export default septProblemesMachineACafe;
