import { BigText } from './assets/components/BigText';
import { Iconbar } from './assets/components/Iconbar';
import Dev from './assets/img/developer.svg';
import './assets/styles/App.css';

export function App() {
    return(
        <section className='content'>
            <div className='socials'>
                <BigText />
                <Iconbar />
            </div>
            <img src={ Dev } className='bigImg'/> 
        </section>
    )
}