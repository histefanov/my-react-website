import React from 'react';
// import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import ArticleCard from '../components/article-card/ArticleCard';

const ARTICLES = gql`
    query GetArticles {
        articles {
            data {
                id,
                attributes {
                    title,
                    body,
                    createdAt,
                    categories {
                        data {
                            id,
                            attributes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`

export default function Posts() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/articles');

    const { loading, error, data } = useQuery(ARTICLES);

    // TODO: add loading component

    if (loading) {
        return <p>Loading</p>;
    }

    // TODO: add error component

    if (error) {
        return <p>Error</p>
    }

    // TODO: create card component

    const articles = data.articles.data;

    return (
        <>
            {articles.map(({ id, attributes }) => {
                const article = {
                    id,
                    title: attributes.title,
                    body: attributes.body,
                    categories: attributes.categories.data
                }

                return <ArticleCard key={id} {...article} />;
            })}
        </>
    )
}
