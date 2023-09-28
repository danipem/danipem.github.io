import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export const FormationScreen = () => {
    const [t] = useTranslation();

    useEffect(() => {
        mostrarSaludo()
    })
    window.onresize = function() {
        document.body.height = window.innerHeight;
    }
    window.onresize();

    const mostrarSaludo = () => {
        let texto
        let fecha = new Date();
        let hora = fecha.getHours();
        let gm = t('gm')
        let ga = t('ga')
        let gn = t('gn')

        if (hora >= 5 && hora < 13) {
            texto = `¡${gm}!`;
        }
    
        if (hora >= 13 && hora < 19) {
            texto = `¡${ga}!`;
        }
    
        if ((hora >= 19 && hora < 24) || (hora >= 0 && hora <5)){
            texto = `¡${gn}!`;
        }
    
        document.getElementById('txtsaludo').innerHTML = texto;
    }


    const scrollLeft = () => {
        document.getElementById('scrollContent').scrollLeft -= 500;
    };
    const scrollRight = () => {
        document.getElementById('scrollContent').scrollLeft += 500;
    };

    const initialState = {
        menu: true,
        screen1: false,
        screen2: false,
        screen3: false,
        screen4: false,
        screen5: false
    }

    const [state, setState] = useState(initialState)

    const showMenu = () => { setState(initialState) }

    const showScreen1 = () => {
        setState({
            menu: false,
            screen1: true
        })
    }
    const showScreen2 = () => {
        setState({
            menu: false,
            screen2: true
        })
    }
    const showScreen3 = () => {
        setState({
            menu: false,
            screen3: true
        })
    }
    const showScreen4 = () => {
        setState({
            menu: false,
            screen4: true
        })
    }
    const showScreen5 = () => {
        setState({
            menu: false,
            screen5: true
        })
    }
    const menu = state.menu;
    return (

        <div className="formation">

            <nav className="formation__left-menu"  >
                <div className="formation__navbar">
                    <NavLink
                        className="formation__navbar-item"
                        exact
                        to="/home"
                    >
                        <svg viewBox="0 0 20 20">
                            <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
                        </svg>
                        <p>Home</p>
                    </NavLink>

                    <NavLink
                        className="formation__navbar-item"
                        exact
                        to="/experience"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px"><path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" /></svg>
                        <p className="firstMayus">{t('experience')}</p>
                    </NavLink>

                    <NavLink
                        className="formation__navbar-item formation__navbar-item-active"
                        exact
                        to="/formation"
                    >
                        <svg viewBox="0 0 20 20">
                            <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
                        </svg>
                        <p className="firstMayus">{t('education')}</p>
                    </NavLink>
                    <NavLink
                        className="formation__navbar-item"
                        exact
                        to="/more"
                    >
                        <svg viewBox="0 0 20 20">
                            <path d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"></path>
                        </svg>
                        <p className="firstMayus">{t('information')}</p>
                    </NavLink>
                    <NavLink
                        className="formation__navbar-item"
                        exact
                        to="/contact"
                    >
                        <svg viewBox="0 0 20 20">
                            <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                        </svg>
                        <p className="firstMayus">{t('contact')}</p>
                    </NavLink>
                </div>
                <div className="formation__second-menu">
                    <h4>PLAYLISTS</h4>
                    <span onClick={showScreen1}>Full stack web development</span>
                    <span onClick={showScreen2}>{t('form2title')}</span>
                    <span onClick={showScreen3}>{t('form3title')}</span>
                    <span onClick={showScreen4}>{t('form4title')}</span>
                    <span onClick={showScreen5}>{t('form5title')}</span>
                </div>
            </nav>

            <div className={menu ? "formation__main" : "display-none"}>
            <div className="formation__mobile">
                    <div className="formation__main-title">
                        <h3 id="txtsaludo" className="formation__main-title-text">h</h3>
                    </div>
                    <div className="formation__main-block-mobile">
                        <div onClick={showScreen1} className="formation__main-block-unit-mobile">
                            <img src="https://media.licdn.com/dms/image/C4D0BAQFGsxQfDDIKyQ/company-logo_200_200/0?e=2159024400&v=beta&t=3kb4aXnsD-UQCFhmrB63ZX7S4R6RQCU7MJ11OrbFSlA" alt="upgrade hub" />
                            <h3 >Full Stack bootcamp</h3>
                        </div>
                        <div onClick={showScreen2} className="formation__main-block-unit-mobile">
                            <img src="https://www.ucm.es/ext/apps/directo/img/carta.jpg" alt="UCM" />
                            <h3 >{t('form2title')}</h3>
                        </div>
                        <div onClick={showScreen3} className="formation__main-block-unit-mobile">
                            <img src="https://www.edarabia.com/wp-content/uploads/2018/02/university-silesia-katowice-poland.jpg" alt="U. Silesia" />
                            <h3 >{t('form3title')}</h3>
                        </div>
                        <div onClick={showScreen4} className="formation__main-block-unit-mobile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBuUrT-lz9LNkQ4MPqmT-QKyGdTVVuB-JBg&usqp=CAU" alt="Udemy" />
                            <h3 >{t('form4title')}</h3>
                        </div>
                        <div onClick={showScreen5} className="formation__main-block-unit-mobile">
                            <img src="https://www.intoconsulting.es/wp-content/uploads/2019/04/logo_urjc_.jpg" alt="URJC" />
                            <h3 >Community Management</h3>
                        </div>
                    </div>
                </div>
                <div className="formation__main-title">
                    <h3 className="formation__main-title-text">{t('recently')}</h3>
                    <div className="formation__main-title-arrows">
                        <svg onClick={scrollLeft} id="slideLeft" viewBox="0 0 20 20">
                            <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                        </svg>
                        <svg onClick={scrollRight} id="slideRight" viewBox="0 0 20 20">
                            <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                        </svg>
                    </div>
                </div>
                <div id="scrollContent" className="formation__main-bl">
                    <div className="formation__main-block">
                        <div className="formation__main-block-unit">
                            <img onClick={showScreen1} src="https://media.licdn.com/dms/image/C4D0BAQFGsxQfDDIKyQ/company-logo_200_200/0?e=2159024400&v=beta&t=3kb4aXnsD-UQCFhmrB63ZX7S4R6RQCU7MJ11OrbFSlA" alt="upgrade hub" />
                            <h3 onClick={showScreen1}>Full Stack Web Development Bootcamp</h3>
                            <h4>Upgrade Hub</h4>
                            <p>{t('form1text')}</p>
                        </div>
                        <div className="formation__main-block-unit">
                            <img onClick={showScreen2} src="https://www.ucm.es/ext/apps/directo/img/carta.jpg" alt="UCM" />
                            <h3 onClick={showScreen2}>{t('form2title')}</h3>
                            <h4>Universidad Complutense de Madrid</h4>
                            <p>{t('form2text1')}</p> 
                            <p>{t('form2text2')}</p>
                        </div>
                        <div className="formation__main-block-unit">
                            <img onClick={showScreen3} src="https://www.edarabia.com/wp-content/uploads/2018/02/university-silesia-katowice-poland.jpg" alt="U. Silesia" />
                            <h3 onClick={showScreen3}>{t('form3title')}</h3>
                            <h4>University of Silesia in Katowice</h4>
                            <p>{t('form3text')}</p>
                        </div>
                        <div className="formation__main-block-unit">
                            <img onClick={showScreen4} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBuUrT-lz9LNkQ4MPqmT-QKyGdTVVuB-JBg&usqp=CAU" alt="Udemy" />
                            <h3 onClick={showScreen4}>{t('form4title')}</h3>
                            <h4>Udemy</h4>
                            <p>{t('form4text')}</p>
                        </div>
                        <div className="formation__main-block-unit">
                            <img onClick={showScreen5} src="https://www.intoconsulting.es/wp-content/uploads/2019/04/logo_urjc_.jpg" alt="URJC" />
                            <h3 onClick={showScreen5}>{t('form5title')}</h3>
                            <h4>Universidad Rey Juan Carlos</h4>
                            <p>{t('form5text')}</p>
                        </div>
                    </div>
                </div>
            

            </div>

            <div className={state.screen1 ? "formation__detail" : 'display-none'}>
                <div onClick={showMenu} className=" spoti-back-arrow ">
                    <svg viewBox="0 0 20 20">
                        <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                    </svg>
                </div>
                <div className="formation__detail-top formation__detail-top-1">
                    <img src="https://media.licdn.com/dms/image/C4D0BAQFGsxQfDDIKyQ/company-logo_200_200/0?e=2159024400&v=beta&t=3kb4aXnsD-UQCFhmrB63ZX7S4R6RQCU7MJ11OrbFSlA" alt="upgrade hub" />
                    <div className="formation__detail-top-info">
                        <h4>PLAYLIST</h4>
                        <h2>Full Stack Development</h2>
                        <p>{t('en')}<span className="color-white">Upgrade Hub</span></p>
                        <p>{t('form1text')}</p>
                        <p>2019-2020</p>
                        <p className="formation__detail-top-info-play">PLAY</p>
                    </div>
                </div>
                <div className="formation__detail-list">
                    <div className="formation__detail-list-top">
                        <span>#</span>
                        <div className="formation__detail-list-left">
                            <span>{t('skills')} </span>
                            <span>{t('year')}</span>
                        </div>
                    </div>
                    <div className="formation__detail-list-top-mobile">
                        <p className="formation__detail-top-info-play">PLAY</p>
                        <p>{t('popular')}</p>
                    </div>
                    <ul className="formation__detail-list-skills">
                        <li className="formation__detail-list-skills-item">
                            <span>1</span>
                            <div className="formation__detail-list-left">
                                <span>HTML5</span>
                                <span>2019</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>2</span>
                            <div className="formation__detail-list-left">
                                <div><span>CSS3 - </span><span className="spoti-grey">ft. Sass</span></div>
                                <span>2019</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>3</span>
                            <div className="formation__detail-list-left">
                                <span>JavaScript</span>
                                <span>2019</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>4</span>
                            <div className="formation__detail-list-left">
                                <span>React</span>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>5</span>
                            <div className="formation__detail-list-left">
                                <div><span>Git - </span><span className="spoti-grey">Github, Gitlab, GitKraken</span></div>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>6</span>
                            <div className="formation__detail-list-left">
                                <span>Angular</span>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>7</span>
                            <div className="formation__detail-list-left">
                                <span>PHP</span>
                                <span>2019</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>8</span>
                            <div className="formation__detail-list-left">
                                <span>Node.js</span>
                                <span>2019</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>9</span>
                            <div className="formation__detail-list-left">
                                <span>MongoDB</span>
                                <span>2019</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>10</span>
                            <div className="formation__detail-list-left">
                                <span>MySQL</span>
                                <span>2019</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="formation__detail-information">
                    <p className="firstMayus">{t('information')}</p>
                    <div className="formation__detail-information-picture-1">
                        <p>{t('form1text')}</p>
                    </div>
                </div>
            </div>

            <div className={state.screen2 ? "formation__detail" : 'display-none'}>
                <div onClick={showMenu} className=" spoti-back-arrow ">
                    <svg viewBox="0 0 20 20">
                        <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                    </svg>
                </div>
                <div className="formation__detail-top formation__detail-top-2">
                    <img src="https://www.ucm.es/ext/apps/directo/img/carta.jpg" alt="UCM" />
                    <div className="formation__detail-top-info">
                        <h4>PLAYLIST</h4>
                        <h2>{t('form2title')}</h2>
                        <p>{t('en')} <span className="color-white">Universidad Complutense de Madrid</span></p>
                        <p>{t('form2text1')}</p> 
                        <p>{t('form2text2')}</p>
                        <p>2012-2017</p>
                        <p className="formation__detail-top-info-play">PLAY</p>
                    </div>
                </div>
                <div className="formation__detail-list">
                    <div className="formation__detail-list-top">
                        <span>#</span>
                        <div className="formation__detail-list-left">
                            <span>{t('skills')} </span>
                            <span>{t('year')}</span>
                        </div>
                    </div>
                    <div className="formation__detail-list-top-mobile">
                        <p className="formation__detail-top-info-play">PLAY</p>
                        <p>{t('popular')}</p>
                    </div>
                    <ul className="formation__detail-list-skills">
                        <li className="formation__detail-list-skills-item">
                            <span>1</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list1')}</span>
                                <span>2012</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>2</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list2')}</span>
                                <span>2012</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>3</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list3')}</span>
                                <span>2013</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>4</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list4')}</span>
                                <span>2014</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>5</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list5')}</span>
                                <span>2014</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>6</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list6')}</span>
                                <span>2016</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>7</span>
                            <div className="formation__detail-list-left">
                                <div><span>{t('form2list7')} <span className="spoti-grey">Photoshop, Premiere</span></span></div>
                                <span>2015</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>8</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list8')}</span>
                                <span>2016</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>9</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list9')}</span>
                                <span>2017</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="formation__detail-information">
                    <p className="firstMayus">{t('information')}</p>
                    <div className="formation__detail-information-picture-2">
                        <p>{t('form2text1')} {t('form2text2')}</p> 
                        {/* <p>{t('form2text2')}</p> */}
                    </div>
                </div>
            </div>

            <div className={state.screen3 ? "formation__detail" : 'display-none'}>
                <div onClick={showMenu} className=" spoti-back-arrow ">
                    <svg viewBox="0 0 20 20">
                        <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                    </svg>
                </div>
                <div className="formation__detail-top formation__detail-top-3">
                    <img src="https://www.edarabia.com/wp-content/uploads/2018/02/university-silesia-katowice-poland.jpg" alt="U. Silesia" />
                    <div className="formation__detail-top-info">
                        <h4>PLAYLIST</h4>
                        <h2>{t('form3title')}</h2>
                        <p>{t('en')} <span className="color-white">University of Silesia in Katowice</span></p>
                        <p>{t('form3text')}</p>
                        <p>2015-2016</p>
                        <p className="formation__detail-top-info-play">PLAY</p>
                    </div>
                </div>
                <div className="formation__detail-list">
                    <div className="formation__detail-list-top">
                        <span>#</span>
                        <div className="formation__detail-list-left">
                            <span>{t('skills')} </span>
                            <span>{t('year')}</span>
                        </div>
                    </div>
                    <div className="formation__detail-list-top-mobile">
                        <p className="formation__detail-top-info-play">PLAY</p>
                        <p>{t('popular')}</p>
                    </div>
                    <ul className="formation__detail-list-skills">
                        <li className="formation__detail-list-skills-item">
                            <span>1</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form3list1')}</span>
                                <span>2015</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>2</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list2')}</span>
                                <span>2016</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>3</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list3')}</span>
                                <span>2016</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>4</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form2list4')}</span>
                                <span>2016</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="formation__detail-information">
                    <p className="firstMayus">{t('information')}</p>
                    <div className="formation__detail-information-picture-3">
                        <p>{t('form3text')}</p>
                    </div>
                </div>
            </div>

            <div className={state.screen4 ? "formation__detail" : 'display-none'}>
                <div onClick={showMenu} className=" spoti-back-arrow ">
                    <svg viewBox="0 0 20 20">
                        <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                    </svg>
                </div>
                <div className="formation__detail-top formation__detail-top-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBuUrT-lz9LNkQ4MPqmT-QKyGdTVVuB-JBg&usqp=CAU" alt="Udemy" />
                    <div className="formation__detail-top-info">
                        <h4>PLAYLIST</h4>
                        <h2>{t('form4title')}</h2>
                        <p>{t('en')} <span className="color-white">Udemy</span></p>
                        <p>{t('form4text')}</p>
                        <p>2020-2021</p>
                        <p className="formation__detail-top-info-play">PLAY</p>
                    </div>
                </div>
                <div className="formation__detail-list">
                    <div className="formation__detail-list-top">
                        <span>#</span>
                        <div className="formation__detail-list-left">
                            <span>{t('skills')} </span>
                            <span>{t('year')}</span>
                        </div>
                    </div>
                    <div className="formation__detail-list-top-mobile">
                        <p className="formation__detail-top-info-play">PLAY</p>
                        <p>{t('popular')}</p>
                    </div>
                    <ul className="formation__detail-list-skills">
                        <li className="formation__detail-list-skills-item">
                            <span>1</span>
                            <div className="formation__detail-list-left">
                                <span>React</span>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>2</span>
                            <div className="formation__detail-list-left">
                                <span>Hooks</span>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>3</span>
                            <div className="formation__detail-list-left">
                                <span>Sass</span>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>4</span>
                            <div className="formation__detail-list-left">
                                <span>JavaScript</span>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>5</span>
                            <div className="formation__detail-list-left">
                                <span>HTML5</span>
                                <span>2020</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>6</span>
                            <div className="formation__detail-list-left">
                                <span>CSS3</span>
                                <span>2020</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="formation__detail-information">
                    <p className="firstMayus">{t('information')}</p>
                    <div className="formation__detail-information-picture-4">
                        <p>{t('form4text')}</p>
                    </div>
                </div>
            </div>

            <div className={state.screen5 ? "formation__detail" : 'display-none'}>
                <div onClick={showMenu} className=" spoti-back-arrow ">
                    <svg viewBox="0 0 20 20">
                        <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                    </svg>
                </div>
                <div className="formation__detail-top formation__detail-top-5">
                    <img src="https://www.intoconsulting.es/wp-content/uploads/2019/04/logo_urjc_.jpg" alt="URJC" />
                    <div className="formation__detail-top-info">
                        <h4>PLAYLIST</h4>
                        <h2>{t('form5title')}</h2>
                        <p>{t('en')} <span className="color-white">Universidad Rey Juan Carlos</span></p>
                        <p>{t('form5text')}</p>
                        <p>2018</p>
                        <p className="formation__detail-top-info-play">PLAY</p>
                    </div>
                </div>
                <div className="formation__detail-list">
                    <div className="formation__detail-list-top">
                        <span>#</span>
                        <div className="formation__detail-list-left">
                            <span>{t('skills')} </span>
                            <span>{t('year')}</span>
                        </div>
                    </div>
                    <div className="formation__detail-list-top-mobile">
                        <p className="formation__detail-top-info-play">PLAY</p>
                        <p>{t('popular')}</p>
                    </div>
                    <ul className="formation__detail-list-skills">
                        <li className="formation__detail-list-skills-item">
                            <span>1</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form5list1')}</span>
                                <span>2018</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>2</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form5list2')}</span>
                                <span>2018</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>3</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form5list3')}</span>
                                <span>2018</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>4</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form5list4')}</span>
                                <span>2018</span>
                            </div>
                        </li>
                        <li className="formation__detail-list-skills-item">
                            <span>5</span>
                            <div className="formation__detail-list-left">
                                <span>{t('form5list5')}</span>
                                <span>2018</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="formation__detail-information">
                    <p className="firstMayus">{t('information')}</p>
                    <div className="formation__detail-information-picture-5">
                        <p>{t('form5text')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
