import Link from 'next/link'

import styles from './Intro.module.css'
import avatar from './avatar-akbar.png'

const Intro = () => (
  <>
     <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.txtFrame}>
            <h1>Hello</h1>
            <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
            <p>
            I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p>
              Currently working for full-time as frontend engineer at a media company
              based in Central of Jakarta, Indonesia.
            </p>
          </div>
          <div className={styles.boxFrame}>
              <img className={styles.avatar} src={avatar} alt="Akbar Alfattah"/>
              <h2 className={styles.name}>Akbar Alfattah</h2>
              <hr className={styles.line}></hr>
              <p className={styles.job}>Frontend Engineer</p>
              <Link href="/work">
                <a className={styles.c}>resume</a>
              </Link>
              <Link href="/work">
                <a className={styles.c}>works</a>
              </Link>
          </div>
        </div>   
      </div>  
    </section>
  </>
)

export default Intro
