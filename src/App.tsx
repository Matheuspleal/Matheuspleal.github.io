import { BigText } from './assets/components/BigText';
import Dev from './assets/img/developer.svg';
import './assets/styles/App.css'

export function App() {
    return(
        <section className='content'>
            <BigText />
            <img src={ Dev } className='bigImg'/>
        </section>
    )
}