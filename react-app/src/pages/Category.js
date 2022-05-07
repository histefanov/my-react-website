import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

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
                                createdAt
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

    return (
        <div>Category</div>
    )
}
