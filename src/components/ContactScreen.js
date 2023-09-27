import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import arrow from '../styles/assets/wa-img/arrow.png'
import pp from '../styles/assets/wa-img/FotoCV.jpg'
import video from '../styles/assets/wa-img/video.png'
import phone from '../styles/assets/wa-img/phone.png'
import more from '../styles/assets/wa-img/more.png'
import check2 from '../styles/assets/wa-img/check-2.png'
import attach from '../styles/assets/wa-img/attach file.png'
import mic from '../styles/assets/wa-img/mic.png'
import camera from '../styles/assets/wa-img/camera.png'
import emo from '../styles/assets/wa-img/emo.png'
import send from '../styles/assets/wa-img/send.png'


export const ContactScreen = () => {
	const [t] = useTranslation();

	const initialState = {
		messages: [],
		inputText: '',
		menu: false
	}

	const [state, setState] = useState(initialState)
	const { inputText, messages = []} = state;


	useEffect(() => {
		showTime()
	})
	useEffect(() => {
		textA()
	})
	useEffect(() => {
		mostrarSaludo()
	})


	const textA = () => {
		const { inputText } = state;
		const text = inputText;
		if (text.length !== 0) {
			document.getElementById("mic").style.display = "none"
			document.getElementById("send").style.display = "block"
			document.getElementById("send").style.height = "30px"
		}
		if (text.length === 0) {
			document.getElementById("mic").style.display = "block"
			document.getElementById("send").style.display = "none"
		}

	}

	const showTime = () => {
		let date = new Date();
		let hours = date.getHours();
		let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

		let realTime = hours + ':' + minutes

		const classSelection = document.getElementsByClassName('contact__time');
		for (let i = 0; i < classSelection.length; i++) {
			classSelection[i].innerHTML = realTime;
		}
	}



	const mostrarSaludo = () => {
		let texto
		let fecha = new Date();
		let hora = fecha.getHours();

		if (hora >= 5 && hora < 13) {
			texto = t('gm');
		}

		if (hora >= 13 && hora < 19) {
			texto = t('ga');
		}

		if ((hora >= 19 && hora < 24) || (hora >= 0 && hora < 5)) {
			texto = t('gn');
		}

		document.getElementById('txtsaludowa').innerHTML = texto;
	}
	const handleAdd = (e) => {
        const {inputText} = state;
        const text = inputText;

        if (text.trim().length < 2) return 
        const newMessage = {
            text
        };
		if(e.charCode === 13) {
			setState(()=> ({messages: [ ...messages, newMessage], inputText: ''}))
		}
    }

	const handleClick =() => {
		const {inputText} = state;
        const text = inputText;
		if (text.trim().length < 2) return 
        const newMessage = {
            text
        };
		setState(()=> ({messages: [ ...messages, newMessage], inputText: ''}))
	}
	useEffect(() => {
		divBottom()
	}, [messages])

	const divBottom = () => {
		let myDiv = document.getElementById('myDiv')
		myDiv.scrollTop = myDiv.scrollHeight;
	}
	// useEffect(() => {
	// 	showMenu()
	// })

	const showMenu = () => {
		setState({...state, menu: !state.menu})
	}
	return (

		<>
			<div  className="contact">
				<div  className="contact__chat">
					<div className="contact__chat-header">
						<div className="contact__profile">
							<div className="contact__profile-left">
								<img onClick={showMenu} src={arrow} alt="arrow" className="contact__arrow" />
								<img src={pp} className="contact__pp" alt="pp" />
								<div className="contact__profile-left-text">
									<h2>Daniel Peña</h2>
									<span>{t('online')}</span>
								</div>
							</div>
							<div onClick={showMenu} className="contact__profile-right">
								<img src={video} className="contact__icon" alt="video" />
								<img src={phone} className="contact__icon" alt="phone" />
								<img  src={more} className="contact__icon" alt="moreicon" />
							</div>
							<div className={ state.menu ? "contact__navbar" : "display-none"}>
								<NavLink
									className="contact__navbar-item firstMayus"
									exact
									to="/home"
								>
									Home
								</NavLink>

								<NavLink
									className="contact__navbar-item firstMayus"
									exact
									to="/experience"
								>
									 {t('experience')}
								</NavLink>

								<NavLink
									className="contact__navbar-item contact__navbar-item-active firstMayus"
									exact
									to="/formation"
								>
									 {t('education')}
								</NavLink>
								<NavLink
									className="contact__navbar-item firstMayus"
									exact
									to="/more"
								>
									 {t('moreinfo')}
								</NavLink>
								<NavLink
									className="contact__navbar-item firstMayus"
									exact
									to="/contact"
								>
									 {t('contact')}
								</NavLink>
							</div>
						</div>
					</div>
					<div id="myDiv" className="contact__chat-box" onChange={divBottom}>
						<div  className="contact__chat-r">
							<div className="contact__sp"></div>
							<div className="contact__mess contact__mess-r">
								<p id="txtsaludowa">

								</p>
								<div className="contact__check">
									<span className="contact__time">16:00</span>
									<img src={check2} alt="check2" />
								</div>
							</div>
						</div>
						<div className="contact__chat-l">
							<div className="contact__mess">
								<p>
									{t('contacttext1')}
								</p>
								<div className="contact__check">
									<span className="contact__time">4:00 PM</span>
								</div>
							</div>
							<div className="contact__sp"></div>
						</div>

						<div className="contact__chat-r">
							<div className="contact__sp"></div>
							<div className="contact__mess contact__mess-r">
								<p>
									{t('contacttext2')}
								</p>
								<div className="contact__check">
									<span className="contact__time">16:00</span>
									<img src={check2} alt="check2" />
								</div>
							</div>
						</div>
						<div className="contact__chat-l">
							<div className="contact__mess">
								<p>{t('contacttext3')}</p>
								<div className="contact__check">
									<span className="contact__time">16:00</span>
								</div>
							</div>
							<div className="contact__sp"></div>
						</div>

						<div className="contact__chat-r">
							<div className="contact__sp"></div>
							<div className="contact__mess contact__mess-r">
								<p>
									{t('contacttext4')}
								</p>
								<div className="contact__check">
									<span className="contact__time">4:00 </span>
									<img src={check2} alt="check2" />
								</div>
							</div>
						</div>
						<div className="contact__chat-l">
							<div className="contact__mess">
								<a href="mailto:danielpemiranda@gmail.com">
									danielpemiranda@gmail.com
								</a>
								<div className="contact__check">
									<span className="contact__time">4:00 </span>
								</div>
							</div>
							<div className="contact__sp"></div>
						</div>

						<div className="contact__chat-r">
							<div className="contact__sp"></div>
							<div className="contact__mess contact__mess-r">
								<p>{t('contacttext5')} <a href="tel:+34678070380">{t('tlf')}</a>?</p>
								<div className="contact__check">
									<span className="contact__time">4:00 </span>
									<img src={check2} alt="check2" />
								</div>
							</div>
						</div>
						<div className="contact__chat-l">
							<div className="contact__mess">
								<p>
									{t('contacttext6')} <a href="tel:+34678070380">{t('tlf')}</a>.
								</p>
								<div className="contact__check">
									<span className="contact__time">4:00 </span>
								</div>
							</div>
							<div className="contact__sp"></div>
						</div>
						<div className="contact__chat-r">
							<div className="contact__sp"></div>
							<div className="contact__mess contact__mess-r">
								<p>
									{t('contacttext7')}
								</p>
								<div className="contact__check">
									<span className="contact__time">4:00 </span>
									<img src={check2} alt="check1" />
								</div>
							</div>
						</div>
						<div className="contact__chat-l">
							<div className="contact__mess">
								<p>
									{t('contacttext8')}
								</p>
								<div className="contact__check">
									<span className="contact__time">4:00 </span>
								</div>
							</div>
							<div className="contact__sp"></div>
						</div>

						{
							messages.map((m, i) => (
								<div key={m.text+i} className="contact__chat-r">
									<div className="contact__sp"></div>
									<div className="contact__mess contact__mess-r">
										<p >{m.text}</p>
										<div className="contact__check">
											<span className="contact__time">4:00 </span>
											<img src={check2} alt="check2" />
										</div>
									</div>
								</div>
							))
						}
					</div>

					<div className="contact__chat-footer">
						<img src={emo} className="contact__emo" alt="emojiarea" />

						<input
							value={inputText}
							onChange={(e) => setState({ inputText: e.target.value, messages: messages })}
							type="text"
							placeholder={t('placeholderwa')}
							id="field"
							autoComplete="off"
							onKeyPress={(e) =>  handleAdd(e) }
						/>
						<div className="contact__footer-icons">
							<img src={attach} alt="attach" />
							<img src={camera} alt="cameraicon" />
						</div>
						<div className="contact__mic">
							<img src={mic} id="mic" alt="micicon" />
							<img onClick={handleClick} src={send} id="send" alt="sendicon" />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="contact">

                <div className="contact__msg">
                    <div className="contact__bubble">
                        <div className="contact__txt">
                            <span className="contact__name">Mike</span>
                            <span className="contact__timestamp">10:20 pm</span>
                            <span className="contact__message">
                                Can you believe this amazing chat bubbles? It's all CSS.
                            </span>

                        </div>
                        <div className="contact__bubble-arrow"></div>
                    </div>
                </div>

                <div className="contact__msg">
                    <div className="contact__bubble follow">
                        <div className="contact__txt">
                            <span className="contact__timestamp">10:21 pm</span>
                            <span className="contact__message contact__follow">Think of the possibilities. &#x1f60d; </span>
                        </div>
                    </div>
                </div>

                <div className="contact__msg">
                    <div className="contact__bubble contact__alt">
                        <div className="contact__txt">
                            <span className="contact__name contact__alt">My Name
                            </span>
                            <span className="contact__timestamp">10:22 pm</span>
                            <p className="contact__message">It's nuts, dude. Nuts</p>
                        </div>
                        <div className="contact__bubble-arrow contact__alt"></div>
                    </div>
                </div>

                <div className="contact__msg">
                    <div className="contact__bubble">
                        <div className="contact__txt">
                            <span className="contact__name">+353 87 1234 567<span> ~ John</span></span>
                            <span className="contact__timestamp">10:20 pm</span>
                            <p className="contact__message">Hey, check out this Pure CSS speech bubble...</p>
                        </div>
                        <div className="contact__bubble-arrow"></div>
                    </div>
                </div>

                <div className="contact__msg">
                    <div className="contact__bubble altfollow">
                        <div className="contact__txt">
                            <span className="contact__timestamp">10:22 pm</span>
                            <p className="contact__message contact__follow">Nice... this will work great for my new project.</p>
                        </div>
                        <div className="contact__bubble-arrow contact__alt"></div>
                    </div>
                </div>

                <div className="contact__msg">
                    <div className="contact__bubble contact__altfollow">
                        <div className="contact__txt">
                            <span className="contact__timestamp">10:21 pm</span>
                            <p className="contact__message contact__follow">
                                Thanks Benni! You the real mvp
                            </p>
                        </div>
                    </div>
                </div>

            </div> */}
		</>
	)
}
