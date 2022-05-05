import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';

export default function Posts() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/articles');

    // TODO: add loading component

    if (loading) {
        return <p>Loading</p>;
    }

    // TODO: add error component

    if (error) {
        return <p>Error</p>
    }

    // TODO: create card component

    const articles = data.data;

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
