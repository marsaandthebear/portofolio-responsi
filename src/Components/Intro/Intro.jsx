import React, { useState, useEffect } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector3 from '../../img/Vector3.png';
import Vector4 from '../../img/Vector4.png';
import marsa from '../../img/Marsa.jpg';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true); // State untuk kontrol animasi
    const fullText = "Marsalina";
    const typingSpeed = 200; // Disarankan kecepatan lebih cepat untuk efek yang lebih halus
    const pauseBeforeRestart = 1800; // Waktu jeda sebelum mengetik ulang (ms)

    useEffect(() => {
        let index = 0;

        if (isTyping) {
            const typingInterval = setInterval(() => {
                setText((prev) => prev + fullText[index]);
                index++;
                if (index === fullText.length) {
                    clearInterval(typingInterval);
                    setIsTyping(false); // Selesai mengetik
                }
            }, typingSpeed);

            return () => clearInterval(typingInterval);
        } else {
            const restartTimeout = setTimeout(() => {
                setText(''); // Reset teks
                setIsTyping(true); // Mulai mengetik ulang
            }, pauseBeforeRestart);

            return () => clearTimeout(restartTimeout);
        }
    }, [isTyping]);

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hay! I am </span>
                    {/* Gunakan class .typing-effect */}
                    <span className="typing-effect">{text}</span>
                    <span>
                        ready to contribute to real projects in the tech industry 
                        with growing skills and an evolving mindset.
                    </span>
                </div>

                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <div className="pulse-container">
                    <img src={Vector3} alt="" />
                </div>
                <img src={Vector4} alt="" />
                <img src={marsa} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '62%' }}>
                    <FloatingDiv image={Crown} txt1="New Comers" txt2="Frontend Developer" />
                </div>
                <div style={{ top: '22rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1="UI/UX" txt2="Designers" />
                </div>
                <div
                    className="blur"
                    style={{ background: 'rgb(238 210 255)' }}
                ></div>
                <div
                    className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '18rem',
                        width: '21rem',
                        height: '12rem',
                        left: '-5.5rem',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
