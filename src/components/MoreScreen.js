import React from 'react'
import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next';

export const MoreScreen = () => {

    const [t] = useTranslation();

    const showMore = () => {
        let p = document.getElementById('secondP')
        p.style.display = 'block'
        document.getElementById('readLess').style.display = 'block'
        document.getElementById('readMore').style.display = 'none'
    }
    const showLess = () => {
        let p = document.getElementById('secondP')
        p.style.display = 'none'
        document.getElementById('readLess').style.display = 'none'
        document.getElementById('readMore').style.display = 'block'
    }
    return (
        <div className="movie">
            <div className="movie__navbar">
				<NavLink
					className="movie__navbar-item"
					exact
					to="/home"
				>
                    <div className="movie__navbar-item-picture1">
					    <p>home</p>
                    </div>
				</NavLink>
				<NavLink
					className="movie__navbar-item "
					exact
					to="/experience"
				>
                    <div className="movie__navbar-item-picture2">
					    <p>{t('experience')}</p>
                    </div>
				</NavLink>
				<NavLink
					className="movie__navbar-item"
					exact
					to="/formation"
				>
                    <div className="movie__navbar-item-picture3">
					    <p>{t('education')}</p>
                    </div>
				</NavLink>
                <NavLink
					className="movie__navbar-item"
					exact
					to="/more"
				>
                    <div className="movie__navbar-item-active">
					    <p >{t('information')}</p>
                    </div>
				</NavLink>
				<NavLink
					className="movie__navbar-item"
					exact
					to="/contact"
				>
                    <div className="movie__navbar-item-picture4">
					    <p>{t('contact')}</p>
                    </div>
				</NavLink>
            </div>
            <div className="movie-top">
                <h1>
                    {t('moreinfo')}
                </h1>
            </div>
            <div id="movie-card-list">
                <div className="movie-card" data-movie="Project">
                    <div className="movie-card__overlay"></div>
                    <div className="movie-card__content">
                        <div className="movie-card__header">
                            <h1 className="movie-card__title">{t('more1title')}</h1>
                            <h4 className="movie-card__info">(2021) Sci-Fi, Thriller</h4>
                        </div>
                        <p className="movie-card__desc">{t('more1text1')}</p>
                        <p id="secondP" className="movie-card__desc">{t('more1text2')}</p>
                        <button id="readMore" onClick={showMore} className="btn btn-outline movie-card__button" type="button">{t('readmore')}</button>
                        <button id="readLess" onClick={showLess} className="btn btn-outline movie-card__button" type="button">{t('readless')}</button>

                    </div>
                </div>
                <div className="movie-card" data-movie="Me">
                    <div className="movie-card__overlay"></div>
                    <div className="movie-card__content">
                        <div className="movie-card__header">
                            <h1 className="movie-card__title">{t('more2title')}</h1>
                            <h4 className="movie-card__info">(1994) {t('more2info')}</h4>
                        </div>
                        <p className="movie-card__desc">{t('more2text')}</p>
                    </div>
                </div>
                <div className="movie-card" data-movie="English">
                    <div className="movie-card__overlay"></div>
                    <div className="movie-card__content">
                        <div className="movie-card__header">
                            <h1 className="movie-card__title">{t('more3title')}</h1>
                            <h4 className="movie-card__info">(2018) Drama</h4>
                        </div>
                        <p className="movie-card__desc">{t('more3text')}</p>
                    </div>
                </div>
                <div className="movie-card" data-movie="Handball">
                    <div className="movie-card__overlay"></div>
                    <div className="movie-card__content">
                        <div className="movie-card__header">
                            <h1 className="movie-card__title">{t('more4title')}</h1>
                            <h4 className="movie-card__info">(2009) {t('more4info')}</h4>
                        </div>
                        <p className="movie-card__desc">{t('more4text')}</p>
                    </div>
                </div>
                <div className="movie-card" data-movie="Guitar">
                    <div className="movie-card__overlay"></div>
                    <div className="movie-card__content">
                        <div className="movie-card__header">
                            <h1 className="movie-card__title">{t('more5title')}</h1>
                            <h4 className="movie-card__info">(2008) Musical</h4>
                        </div>
                        <p className="movie-card__desc">{t('more5text')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
