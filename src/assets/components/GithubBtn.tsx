import githubLogo from '../img/github.svg'
import '../styles/GithubBtn.css'

export function GithubBtn() {
  return (
    <a href="https://github.com/Matheuspleal">
      <img id='github' src={githubLogo} />
    </a>
  )
}