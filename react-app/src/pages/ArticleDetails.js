import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

export default function PostDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch(`http://localhost:1337/api/articles/${id}`);

    // TODO: add loading component

    if (loading) {
        return <p>Loading</p>;
    }

    // TODO: add error component

    if (error) {
        return <p>Error</p>
    }

    const { attributes } = data.data;

    return (
        <div>
            <h2>{attributes.title}</h2>
            <p>{attributes.body}</p>
            <p>{attributes.publishedAt}</p>
        </div>
    )
}
