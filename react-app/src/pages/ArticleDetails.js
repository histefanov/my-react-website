import React from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import useFetch from '../hooks/useFetch';

const ARTICLE = gql`
    query GetArticle($id: ID!) {
        article(id: $id) {
            data {
                id,
                attributes {
                    title,
                    body,
                    createdAt
                }
            }
        }
    }
`

export default function PostDetails() {
    const { id } = useParams();
    // const { loading, error, data } = useFetch(`http://localhost:1337/api/articles/${id}`);
    const { loading, error, data } = useQuery(ARTICLE, {
        variables: {
            id: id
        }
    });

    // TODO: add loading component

    if (loading) {
        return <p>Loading</p>;
    }

    // TODO: add error component

    if (error) {
        return <p>Error</p>
    }

    const { attributes } = data.article.data;

    return (
        <div>
            <h2>{attributes.title}</h2>
            <ReactMarkdown>{attributes.body}</ReactMarkdown>
            <p>{attributes.publishedAt}</p>
        </div>
    )
}
