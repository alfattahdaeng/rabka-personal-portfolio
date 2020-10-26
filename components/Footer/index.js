import Link from 'next/link'
import React from 'react'

import styles from './Footer.module.css'
import linkedinLogo from './linkedin.svg'
import githubLogo from './github.svg'
import twitterLogo from './twitter.svg'
import instaLogo from './instagram.svg'

const Footer = ({ noBorder }) => (
  <footer className={styles.footer}>
    <div className={noBorder ? styles.containerNoBorder : styles.container}>
      <div className={styles.copy}>
        <p>&copy;2020.
          Built with <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">Next.js</a>
        </p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alfattahdaeng/"
            >
              <img src={linkedinLogo} alt="akbar alfattah on linkedin" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alfattahdaeng">
              <img src={githubLogo} alt="akbar alfattah on github" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rabqka"
            >
              <img src={instaLogo} alt="akbar alfattah on instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer
