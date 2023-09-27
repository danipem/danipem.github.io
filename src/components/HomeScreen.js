import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import i18n from '../i18n'
import { useTranslation } from 'react-i18next';

const changeLanguage = (lng) => {
	i18n.changeLanguage(lng);
  }

export const HomeScreen = () => {

	const [t] = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		if(language.includes('en')){
			document.getElementsByClassName('home__button')[0].style.display = 'none'
			document.getElementsByClassName('home__button')[1].style.display = 'inline-block'
		}
		else{
			document.getElementsByClassName('home__button')[1].style.display = 'none'
			document.getElementsByClassName('home__button')[0].style.display = 'inline-block'
		}
	})

    return (
        <div className="home">
			<div className="home__down">

            <div className="home__mode">
                <div className="home__mode-text">
                    <p>Daniel Peña</p>
                </div>
                <div className="home__mode-background">

                </div>
            </div>
				<div className="home__navbar">
					<NavLink
						className="home__navbar-item"
						exact
						to="/experience"
					>
						<div className="home__navbar-item-picture1">
							<p className="allMayus">{t('experience')}</p>
						</div>
					</NavLink>
					<NavLink
						className="home__navbar-item "
						exact
						to="/formation"
					>
						<div className="home__navbar-item-picture2">
							<p className="allMayus">{t('education')}</p>
						</div>
					</NavLink>
					<NavLink
						className="home__navbar-item"
						exact
						to="/more"
					>
						<div className="home__navbar-item-picture3">
							<p className="allMayus">{t('information')}</p>
						</div>
					</NavLink>
					<NavLink
						className="home__navbar-item"
						exact
						to="/contact"
					>
						<div className="home__navbar-item-picture4">
							<p className="allMayus">{t('contact')}</p>
						</div>
					</NavLink>
				</div>
				<div className="home__btn">
					<button className={ 'home__button'} onClick={()=>changeLanguage('en')}>English</button>
					<button className={'home__button'} onClick={()=>changeLanguage('es')}>Español</button>
				</div>
			</div>
        </div>
	)
}
