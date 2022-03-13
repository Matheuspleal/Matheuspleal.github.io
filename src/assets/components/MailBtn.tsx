import mailLogo from '../img/mail.png'
import '../styles/MailBtn.css'

export function MailBtn() {
  return (
    <a href="mailto: matheusp.eng@gmail.com">
      <span >
        <img id='mail' src={mailLogo} />
      </span>
    </a>
  )
}