'use client';

import { useEffect, useState } from "react"

const formatData = (type, data, originUrl) => {
  switch (type) {
    case 'ARTICLE':
      return formatArticleData(data)
    case 'ARTICLE_LIST':
      return formatArticleListData(data, originUrl)
    default:
      return {}
  }
}

const formatArticleListData = (articles, originUrl) => {
  return {
    '@type': 'ItemList',
    name: 'Blog',
    itemListElement: articles.map(([slug, _], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${originUrl}/blog/${slug}`,
    })),
  }
}

const formatArticleData = (article) => {
  return {
    '@type': 'Article',
    author: 'Click & Paf',
    name: article.title,
    description: article.shortDescription,
    contentReferenceTime: (new Date(article.date)).toISOString(),
  }
}

export const LdJson = ({ data, type }) => {
  const [originUrl, setOriginUrl] = useState("");

  useEffect(() => {
    setOriginUrl(window.location.host);
  }, []);

  if (!originUrl) return null;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    ...formatData(type, data, originUrl),
  }) }} />
}
