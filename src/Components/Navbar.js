import React from 'react'
import {Link} from 'react-router-dom'
import github from '../assets/github_partner.png'
import githubLogo from '../assets/gh-logo.png'

const Navbar = () => {
  return(
    <nav className="grey lighten-1">
      <section className="container">
        <div className="nav-wrapper">
          <Link to="/"><img src={github} height="65"/></Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="https://github.com/Wyzardsleeves/js-exercise" target="_blank"><i className="ion-social-github black-text"></i></a></li>
          </ul>
        </div>
      </section>

    </nav>
  )
}

export default Navbar
