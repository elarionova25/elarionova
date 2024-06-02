import React from "react";
import {telegramIcon, gmailIcon, hhIcon, githubIcon} from "../images/contacts";
import Heading from "../components/Heading";

const contacts = [
    {
        id: 1,
        title: 'Telegram',
        img: telegramIcon,
        href: 'https://t.me/eelarionova'
    },
    {
        id: 2,
        title: 'Gmail',
        img: gmailIcon,
        href: 'mailto: ekaterinalarionova25@gmail.com'
    },
    {
        id: 3,
        title: 'HH',
        img: hhIcon,
        href: 'https://spb.hh.ru/resume/88463f5bff08e0cda50039ed1f6e5a46736f41'
    },
    {
        id: 6,
        title: 'GitHub',
        img: githubIcon,
        href: 'https://github.com/elarionova25'
    }
];

const Contacts = () => {
    return (
        <section id="contacts" className="section contacts-section">
            <div className="contacts">
                <Heading text="Contact me!" className="contacts-title"></Heading>
                <div className="contacts-content">
                    {
                        contacts.map(contact => {
                            return (
                                <a className="contacts-card" key={contact.id} href={contact.href} target="_blank" rel='noreferrer noopener'>
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