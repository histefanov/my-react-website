import React from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.css';

export default function SiteHeader() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link link--neutral" to="/">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link link--neutral" to="/articles">Posts</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link link--neutral" to="/articles/:id">Post Details</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
