import Link from 'next/link'

import styles from './Header.module.css'
import logo from './logo-head.svg'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link href="/">
        <a>
          <img className={styles.logo} src={logo} width="62" alt="" />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/resume">
          <a>
            resume
          </a>
        </Link>
        <Link href="/work">
          <a>
            work
          </a>
        </Link>
        <a
          className={styles.contactLink}
          href="mailto:alfattahcorp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </nav>
    </div>
  </header>
)

export default Header
