import NotFound from "@/app/not-found";
import Component from "@/components/Component";
import Header from "@/components/Header";
import { articles } from "@/data/articles";
import Link from "next/link";

const Article = async (props) => {
    const slug = (await props.params)?.slug ?? null;
    const article = articles[slug];    

    if (!article) {
        return <NotFound />
    }    

    return <>
        <Header title={article.title}>
            {article.shortDescription}
        </Header>
        <ul className="breadcrumb">
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <span>/</span>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <span>/</span>
            </li>
            <li className="active">
                <span>{article.title}</span>
            </li>
        </ul>
        <main className="article">
            {article.order.map(component => {
                const content = article.content[component];

                return <Component key={component} {...content} />;
            })}
        </main>
    </>
}

export default Article;
