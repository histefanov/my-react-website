import React from 'react'
import { useTranslation } from 'react-i18next';
import './homepage.css';

export default function Homepage() {
    const { t } = useTranslation();

    return (
        <div className='hero'>
            <h1>{t('Welcome')}</h1>
            <p>{t('Message')}</p>
        </div>
    )
}
