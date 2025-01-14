import Link from 'next/link';

import style from './Article.module.scss';

const Article = ({article}) => {
    return <article className={style.card}>
        <Link href={`/blog/${article.slug}`} title={`Lire : ${article.title}`}>
            <h3>{article.title}</h3>
            <p>{article.shortDescription}</p>
        </Link>
    </article>
}

export default Article;
