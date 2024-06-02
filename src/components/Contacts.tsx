import React from "react";
import {telegramIcon, gmailIcon, hhIcon, instIcon, linkedinIcon} from "../images/contacts";

const contacts = [
    {
        title: 'Telegram',
        img: telegramIcon,
        href: 'https://t.me/eelarionova'
    },
    {
        title: 'Gmail',
        img: gmailIcon,
        href: 'mailto: ekaterinalarionova25@gmail.com'
    },
    {
        title: 'HH',
        img: hhIcon,
        href: 'https://spb.hh.ru/resume/88463f5bff08e0cda50039ed1f6e5a46736f41'
    },
    {
        title: 'Instagram',
        img: instIcon,
        href: ''
    },
    {
        title: 'Linkedin',
        img: linkedinIcon,
        href: ''
    }
];

const Contacts = () => {
    return (
        <section id="contacts" className="section contacts-section">
            <div className="contacts">
                <h1 className="contacts-title" data-aos="zoom-in">Contact Me !</h1>
                <div className="contacts-content">
                    {
                        contacts.map(contact => {
                            return (
                                <a className="contacts-card" href={contact.href} target="_blank" rel='noreferrer noopener'>
                                    <img className="contacts-card_logo" src={contact.img} alt={contact.title}/>
                                    <div className="contacts-card_title">
                                        {contact.title}
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Contacts;