import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleCard({ id, title, body, categories }) {
    return (
        <article key={id} style={{ marginBottom: 2 + 'rem' }}>
            {categories.map(({ id, attributes }) => (
                <span key={id}>{attributes.name}</span>
            ))}
            <h2>{title}</h2>
            <p>{body.substring(0, 200)}...</p>
            <Link to={`/articles/${id}`}>Read more</Link>
        </article>
    )
}
