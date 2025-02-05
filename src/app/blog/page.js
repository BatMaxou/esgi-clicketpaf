import Link from "next/link";

import NotFound from "@/app/not-found";
import Article from "@/components/Article";
import Header from "@/components/Header";
import { articles } from "@/data/articles";
import { baseMetadata } from "../layout";
import { LdJson } from "@/components/LdJson";

export const metadata = baseMetadata(
    'Blog & Actualités',
    'Découvrez des conseils pratiques, des astuces malines et des récits hilarants tirés de notre expérience sur le terrain.',
);

const Articles = () => {
    if (!articles) {
        return <NotFound />
    }

    const orderedArticles = Object.entries(articles).reverse();    

    return <>
        <Header title="Blog & Actualités">
          Découvrez des conseils pratiques, des astuces malines et des récits hilarants tirés de notre expérience sur le terrain.
          Que vous cherchiez à prolonger la vie de vos appareils, éviter les pires ratés en bricolage, ou simplifier vos démarches administratives, nous avons ce qu’il vous faut.
          Un espace plein d’idées pour rendre votre quotidien plus facile, une lecture à la fois !
        </Header>
        <ul className="breadcrumb">
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <span>/</span>
            </li>
            <li className="active">
                <span>Blog</span>
            </li>
        </ul>
        <main className="section">
            <h2>Blog</h2>
            <ul className="blog-grid">
                {orderedArticles.map(([slug, article]) => <li key={slug}>
                    <Article article={{ slug, ...article }} />
                </li>)}
            </ul>
        </main>
        <LdJson data={orderedArticles} type={'ARTICLE_LIST'} />
    </>
}

export default Articles;
