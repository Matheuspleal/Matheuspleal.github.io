import linkedinLogo from '../img/linkedin.svg'
import '../styles/LinkedinBtn.css'

export function LinkedinBtn() {
  return (
    <a href="https://www.linkedin.com/in/matheus-pimentel-leal-a07a38172/">
      <img id='linkedin' src={linkedinLogo} />
    </a>
  )
}