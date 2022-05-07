import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import ArticleCard from '../components/article-card/ArticleCard'

const CATEGORY = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            data {
                id,
                attributes {
                    name,
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
            }
        }
    }  
`

export default function Category() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(CATEGORY, {
        variables: {
            id: id
        }
    })

    if (loading) {
        return <p>Loading</p>;
    }

    // TODO: add error component

    if (error) {
        return <p>Error</p>
    }

    const { attributes } = data.category.data;

    return (
        <>
            <h2>{attributes.name}</h2>
            {attributes.articles.data.map(({ id, attributes }) => {
                const props = {
                    id,
                    title: attributes.title,
                    body: attributes.body,
                    categories: attributes.categories.data
                };
                return <ArticleCard key={id} {...props} />
            })}
        </>
    )
}
