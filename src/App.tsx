import './assets/styles/App.css';
import Logo from './assets/img/logo.svg';
import { BigText } from './assets/components/BigText';

export function App() {
  return (
    //Logo MP
    <div>
      {/* Colocar dentro de um componente */}
      <img src={Logo} id='logo'/>
      <BigText />
    </div>
  )
}