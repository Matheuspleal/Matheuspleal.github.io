import './assets/styles/App.css';
import Logo from './assets/img/logo.svg';
import Developer from './assets/img/developer.svg'
import { BigText } from './assets/components/BigText';
import { GithubBtn } from './assets/components/GithubBtn';
import { MailBtn } from './assets/components/MailBtn';
import { LinkedinBtn } from './assets/components/LinkedinBtn';

export function App() {
  return (
    //Logo MP
    <div>
      {/* Colocar dentro de um componente */}
      <img src={Developer} id='bigImg'/>
      <img src={Logo} id='logo'/>
      <BigText />
      <GithubBtn />
      <MailBtn />
      <LinkedinBtn />
    </div>
  )
}