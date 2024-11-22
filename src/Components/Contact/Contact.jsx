import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault(); // Mencegah pengiriman form default

        // Kirim form menggunakan emailjs
        emailjs
            .sendForm('service_evf6l46', 'template_0ni9dcc', form.current, {
                publicKey: 'hMHn2cn6BhKIbt5fo',
            })
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    setDone(true);
                },
                (error) => {
                    console.log('Error occurred:', error.text);
                }
            );
    };

    return (
        <div className="contact-form" id='Contact'>
            {/* Bagian kiri */}
            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>

            {/* Bagian kanan */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name"/>
                    <input type="email" name="user_email" className="user" placeholder="Email"/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button"/>
                    <span>{done && "Thanks for contactin me!"}</span>
                    <div 
                    className="blur c-blur1"
                    style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
