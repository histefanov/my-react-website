import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";

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
    const { t } = useTranslation();
    const changeLanguage = (nextLanguage) => {
        const routes = i18n.getResourceBundle(i18n.language, 'routes');
        const currentPathname = window.location.pathname.replace(/\/+$/, '');
        const currentRouteKey = Object.keys(routes).find((key) => routes[key] === currentPathname);
    
        window.location.replace(t(`routes:${currentRouteKey}`, { lng: nextLanguage }));
      };

    const location = useLocation();
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const { loading, error, data } = useQuery(CATEGORIES);

    useEffect(() => {
        setIsOpen(false);
        const handler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [location])

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
                        <Link className="nav__link link--neutral" to="/">{t("Home")}</Link>
                    </li>
                    <li className="nav__item relative">
                        <div className="text-with-icon">
                            <Link className="nav__link link--neutral" to="/articles">{t("Articles")}</Link>
                            <FontAwesomeIcon className="nav__dropdown-btn pointer" icon={solid('angle-down')} onClick={() => setIsOpen(!isOpen)} />
                        </div>
                        {isOpen &&
                            <div className="nav__dropdown" ref={ref}>
                                <ul className="dropdown__list">
                                    {categories.map(({ id, attributes }) => (
                                        <li key={id} className="dropdown__item">
                                            <Link className="nav__link link--neutral" to={`/categories/${id}`}>{attributes.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                    </li>
                    <li className="nav__item">
                        <Menu>
                            <MenuButton>
                                <FontAwesomeIcon icon={solid('globe')} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => i18next.changeLanguage('en')}>English</MenuItem>
                                <MenuItem onClick={() => i18next.changeLanguage('bg')}>Български</MenuItem>
                            </MenuList>
                        </Menu>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
