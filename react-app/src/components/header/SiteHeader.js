import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './SiteHeader.css';

const CATEGORIES = gql`
    query GetCategories {
        categories {
            data {
                id,
                attributes {
                    name
                }
            }
        }
    }
`

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const { loading, error, data } = useQuery(CATEGORIES);

    // TODO: add loading component

    if (loading) {
        return <p>Loading</p>;
    }

    // TODO: add error component

    if (error) {
        return <p>Error</p>
    }

    const categories = data.categories.data;

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link link--neutral" to="/">Home</Link>
                    </li>
                    <li className="nav__item relative">
                        <div className="text-with-icon">
                            <Link className="nav__link link--neutral" to="/articles">Articles</Link>
                            <FontAwesomeIcon className="nav__dropdown-btn pointer" icon={solid('angle-down')} onClick={() => setIsOpen(!isOpen)} />
                        </div>
                        {isOpen &&
                            <div className="nav__dropdown">
                                <ul className="dropdown__list">
                                    {categories.map(({ id, attributes }) => (
                                        <li key={id} className="dropdown__item">
                                            <Link className="nav__link link--neutral" to={`/categories/${id}`}>{attributes.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                    </li>
                    {/* <li className="nav__item">
                        <Link className="nav__link link--neutral" to="/articles/:id">Post Details</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}