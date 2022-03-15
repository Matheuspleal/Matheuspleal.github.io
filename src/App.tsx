import { BigText } from './assets/components/BigText';
import { Iconbar } from './assets/components/Iconbar';
import Dev from './assets/img/developer.svg';
import './assets/styles/App.css';

export function App() {
    return(
        <section className='content'>
            <BigText />
            <img src={ Dev } className='bigImg'/>
            <Iconbar /> 
        </section>
    )
}