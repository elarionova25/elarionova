import React from 'react';
import { useTranslationChange } from 'i18nano';

const LanguageChange = () => {
    const translation = useTranslationChange();

    const handleChange = () => {
        const newLanguage = translation.lang === 'ru' ? 'en' : 'ru';
        translation.change(newLanguage);
    }

    return (
        <label className="switch">
            <input className="switch-input" type="checkbox" onChange={ handleChange }/>
            <div className="switch-slider round">
                <span className="switch-slider_ru">RU</span>
                <span className="switch-slider_en">EN</span>
            </div>
        </label>
    );
}

export default LanguageChange;