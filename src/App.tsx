import { BigText } from './assets/components/BigText';
import Dev from './assets/img/developer.svg';
import Github from './assets/img/github.svg';
import Linkedin from './assets/img/linkedin.svg'
import Mail from './assets/img/mail.svg'
import './assets/styles/App.css';

export function App() {
    return(
        <section className='content'>
            <BigText />
            <img src={ Dev } className='bigImg'/>
            
            {/* Criar componente só para os icons */}
            <img src={ Github } className='icon'/>
            <img src={ Linkedin } className='icon'/>
            <img src={ Mail } className='icon'/>
        </section>
    )
}