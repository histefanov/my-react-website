import React from 'react';
// import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

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
    ;
    const articles = data.articles.data;

    return (
        <div>
            {articles.map(({ id, attributes }) => (
                <div key={id} style={{ marginBottom: 2 + 'rem' }}>
                    <h2>{attributes.title}</h2>
                    <p>{attributes.body.substring(0, 200)}...</p>
                    <Link to={`./${id}`}>Read more</Link>
                </div>
            ))}
        </div>
    )
}
