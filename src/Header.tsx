import Logo from './assets/img/logo.svg'
import './assets/styles/Header.css'

export function Header() {
    return (
        <header>
            <div className='container'>
                <img src={ Logo } className='logo'/>
            </div>
        </header>
    )
}