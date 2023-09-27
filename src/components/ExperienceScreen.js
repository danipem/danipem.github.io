import React, { useState } from 'react'
import twitter from '../icons/twitter/icons8-twitter.svg'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export const ExperienceScreen = () => {
    const [t] = useTranslation();

    const [state, setState] = useState({
        dark: false
    })

    const setOpen = () => {
        setState({
            dark: !state.dark
        })
        console.log('clicked', state.dark);
    }

    return (
        <>
            <div className={(state.dark ? 'experience' : 'dark-experience')} id="firstTweet">

                <div className={state.dark ? "experience__navbar" : 'dark-experience__navbar'}>
                    <div className="experience__navbar-item-img">
                        <img alt="twitter-logo" src={twitter} className="experience__navbar-item experience__navbar-item-img" />
                    </div>
                    <nav className="">
                        <div className={state.dark ? "experience__navbar" : 'dark-experience__navbar'}>
                            <NavLink
                                className={state.dark ? "experience__navbar-item" : 'dark-experience__navbar-item'}
                                exact
                                to="/home"
                            >
                                <svg viewBox="0 0 20 20">
                                    <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
                                </svg>                        <p>Home</p>
                            </NavLink>

                            <NavLink
                                className={state.dark ? "experience__navbar-item experience__navbar-item-active" : ' experience__navbar-item-active dark-experience__navbar-item'}
                                exact
                                to="/experience"
                            >
                                <svg className="experience__navbar-item-active" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px"><path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" /></svg>
                                <p className="firstMayus">{t('experience')}</p>
                            </NavLink>

                            <NavLink
                                className={state.dark ? "experience__navbar-item" : 'dark-experience__navbar-item'}
                                exact
                                to="/formation"
                            >
                                <svg viewBox="0 0 20 20">
                                    <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
                                </svg>
                                <p className="firstMayus">{t('education')}</p>
                            </NavLink>
                            <NavLink
                                className={state.dark ? "experience__navbar-item" : 'dark-experience__navbar-item'}
                                exact
                                to="/more"
                            >
                                <svg viewBox="0 0 20 20">
                                    <path d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"></path>
                                </svg>
                                <p className="firstMayus">{t('information')}</p>
                            </NavLink>
                            <NavLink
                                className={state.dark ? "experience__navbar-item" : 'dark-experience__navbar-item'}
                                exact
                                to="/contact"
                            >
                                <svg viewBox="0 0 20 20">
                                    <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                                </svg>
                                <p className="firstMayus">{t('contact')}</p>
                            </NavLink>
                            {/* <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
						</svg> */}
                        </div>
                    </nav>
                    <button onClick={setOpen} data-day={t('day')} data-night={t('night')} className={state.dark ? 'experience__navbar-button' : 'dark-experience__navbar-button'}></button>
                </div>

                <div className="experience__center-block">
                    <div className={(state.dark ? 'experience__top' : 'dark-experience__top')}>
                        <Link activeClass="active" className={(state.dark ? 'experience__exp' : 'dark-experience__exp')} to="firstTweet" spy={true} smooth={true} duration={1000}>
                            <span className="firstMayus">{t('experience')}</span>
                        </Link>

                        <svg onClick={setOpen} className={state.dark ? "experience__dark-item" : 'dark-experience__dark-item'} viewBox="0 0 20 20">
                            <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                        </svg>

                        {/* <a href="#firstTweet" className="experience__exp" >Experiencia</a> */}

                    </div>
                    {/* <hr className="experience__exp-hr"/> */}
                    <blockquote className="experience__tweet" >

                        <div className="experience__tweet-head">
                            <div className="experience__tweet-pic">
                                <img alt="logo" src="https://hedyla.com/wp-content/uploads/2019/06/logo-horizontal-e1606605500919.png" />
                            </div>
                            <div>
                                <h2 className="experience__tweet-title" >
                                    {t('exp5title')}
                                </h2>
                                <h2 className="experience__tweet-company">
                                    @Hedyla
                                </h2>
                            </div>
                        </div>
                        <div className="experience__tweet-description">
                            <p>{t('exp5text1')} <span>#REACT</span>, <span>#ReactNative</span>, <span>#JavaScript</span>, <span>#TypeScript</span>, <span>#SQL</span></p>
                        </div>
                        <div className="experience__tweet-date">
                            <span>{t('exp5month')}</span> · <span>Twitter for iPhone</span>
                        </div>
                        <hr />
                        <div className="experience__tweet-data">
                            <span><strong>50</strong> Retweets</span>
                            <span><strong>63</strong> {t('likes')}</span>
                        </div>
                        <hr />

                    </blockquote>
                    <blockquote className="experience__tweet" >

                        <div className="experience__tweet-head">
                            <div className="experience__tweet-pic">
                                <img alt="logo" src="https://i.ytimg.com/vi/1YXeVYQyohU/maxresdefault.jpg" />
                            </div>
                            <div>
                                <h2 className="experience__tweet-title" >
                                    {t('exp6title')}
                                </h2>
                                <h2 className="experience__tweet-company">
                                    @Ilerna
                                </h2>
                            </div>
                        </div>
                        <div className="experience__tweet-description">
                            <p>{t('exp6text1')} <span>#JavaScript</span>, <span>#PHP</span>, <span>#GIT</span></p>
                        </div>
                        <div className="experience__tweet-date">
                            <span>{t('exp6month')}</span> · <span>Twitter for iPhone</span>
                        </div>
                        <hr />
                        <div className="experience__tweet-data">
                            <span><strong>34</strong> Retweets</span>
                            <span><strong>43</strong> {t('likes')}</span>
                        </div>
                        <hr />

                    </blockquote>
                    <blockquote className="experience__tweet" >

                        <div className="experience__tweet-head">
                            <div className="experience__tweet-pic">
                                <img alt="logo" src="https://media-exp1.licdn.com/dms/image/C560BAQEdIVyJx43jUA/company-logo_200_200/0/1570120170257?e=2159024400&v=beta&t=oCdkZNdEzD0pQVNaS_uMwa7VDGFhWvvQ6q4kf4ryhfE" />
                            </div>
                            <div>
                                <h2 className="experience__tweet-title" >
                                    {t('exp1title')}
                                </h2>
                                <h2 className="experience__tweet-company">
                                    @GlobalAlumni
                                </h2>
                            </div>
                        </div>
                        <div className="experience__tweet-description">
                            <p>{t('exp1text1')} <span>#MITxPRO</span>, <span>#ChicagoBooth</span>, <span>#UniversityofChicago</span></p>
                            <p>{t('exp1text2')} <span>#HTML</span>, <span>#CSS</span>, <span>#JavaScript</span></p>
                        </div>
                        <div className="experience__tweet-date">
                            <span>{t('exp1month')}</span> · <span>Twitter for iPhone</span>
                        </div>
                        <hr />
                        <div className="experience__tweet-data">
                            <span><strong>28</strong> Retweets</span>
                            <span><strong>43</strong> {t('likes')}</span>
                        </div>
                        <hr />

                    </blockquote>
                    <blockquote className="experience__tweet">

                        <div className="experience__tweet-head">
                            <div className="experience__tweet-pic">
                                <img alt="logo" src="https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/3f/3fb51f4b-558a-4f49-938e-ac8c43e424cc?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1MjQ2NTI0NjksImV4cCI6MTczNjc2NzI0NSwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzLzNmLzNmYjUxZjRiLTU1OGEtNGY0OS05MzhlLWFjOGM0M2U0MjRjYyIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.IUyUPlXeulcCpDSYWDX-mSk2DYqWFqlJdhtwGDTqT1vATAACBcW_sWZ6jQGjzPqSjDgZvhKeexFiu1ZGtKH-1AzFEuqW4RiIRI68LzR7SUOGTdiKK0dfbr3qfrBrioSv2qsdrJ1JTSdlc5cUeNanKHmsxJ62NbBkJChjEjfqI4mfGGtyKEEHftXoQ5jstxXle9d49Xre_9GShjI7ZzmSTVr4KWK3_RWST9gdzxwHYJbn-zwHwBjFAmG0qoSIF8s9xFOuIk5rIk87yG1IWcTK4AZiwePz-cjQ2ForZE4qrkUkhM0zhdW8r-vVuBejdCuJL-Y7EVuvwvmpju6yqeCGhA&AccessKeyId=d724d9a53d95a810" />
                            </div>
                            <div>
                                <h2 className="experience__tweet-title">
                                    {t('exp2title')}
                                </h2>
                                <h2 className="experience__tweet-company">
                                    @Yumping.com
                                </h2>
                            </div>
                        </div>
                        <div className="experience__tweet-description">
                            <p>{t('exp2text1')} <span>#SEO</span></p>
                            <p>{t('exp2text2')}</p>
                        </div>
                        <div className="experience__tweet-date">
                            <span>{t('exp2month')}</span> · <span>Twitter for Android</span>
                        </div>
                        <hr />
                        <div className="experience__tweet-data">
                            <span><strong>13</strong> Retweets</span>
                            <span><strong>35</strong> {t('likes')}</span>
                        </div>
                        <hr />

                    </blockquote>
                    <blockquote className="experience__tweet">

                        <div className="experience__tweet-head">
                            <div className="experience__tweet-pic">
                                <img alt="logo" src="https://padelworldpress.es/wp-content/uploads/2014/04/padelworld-logo.jpg" />
                            </div>
                            <div>
                                <h2 className="experience__tweet-title">
                                    {t('exp3title')}
                                </h2>
                                <h2 className="experience__tweet-company">
                                    @PadelWorldPress
                                </h2>
                            </div>
                        </div>
                        <div className="experience__tweet-description">
                            <p>{t('exp3text1')}</p>
                            <p><span>#Copywriter </span><span>#SEO </span></p>
                        </div>
                        <div className="experience__tweet-date">
                            <span>{t('exp3month')}</span> · <span>Twitter for iPhone</span>
                        </div>
                        <hr />
                        <div className="experience__tweet-data">
                            <span><strong>12</strong> Retweets</span>
                            <span><strong>22</strong> {t('likes')}</span>
                        </div>
                        <hr />

                    </blockquote>
                    <blockquote className="experience__tweet">

                        <div className="experience__tweet-head">
                            <div className="experience__tweet-pic">
                                <img alt="logo" src="https://is2-ssl.mzstatic.com/image/thumb/Purple49/v4/62/c3/a3/62c3a3de-1366-c7e8-3b0f-a7298eff38f8/source/512x512bb.jpg" />
                            </div>
                            <div>
                                <h2 className="experience__tweet-title">
                                    {t('exp4title')}
                                </h2>
                                <h2 className="experience__tweet-company">
                                    @GrupoSiena
                                </h2>
                            </div>
                        </div>
                        <div className="experience__tweet-description">
                            <p>{t('exp4text1')}</p>
                            <p><span>#{t('exp4h1')} </span><span>#{t('exp4h2')} </span><span>#{t('exp4h3')} </span></p>
                        </div>
                        <div className="experience__tweet-date">
                            <span>{t('exp4month')}</span> · <span>Twitter Web App</span>
                        </div>
                        <hr />
                        <div className="experience__tweet-data">
                            <span><strong>56</strong> Retweets</span>
                            <span><strong>103</strong> {t('likes')}</span>
                        </div>
                        <hr />

                    </blockquote>

                </div>

            </div>
        </>
    )
}
