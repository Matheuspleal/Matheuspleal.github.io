import Github from '../img/github.svg';
import Linkedin from '../img/linkedin.svg'
import Mail from '../img/mail.svg'
import '../styles/Iconbar.css'

export function Iconbar() {
    return (
        <section className='iconbar'>
            <a href='https://github.com/Matheuspleal'>
                <img src={ Github }  className='icon'/>
            </a>
            <a href='https://www.linkedin.com/in/matheus-pimentel-leal-a07a38172/'>
                <img src={ Linkedin } className='icon'/>
            </a>
            <a href='mailto: matheusp.eng@gmail.com'>
                <img src={ Mail } className='icon'/>
            </a>
        </section>
    )
}