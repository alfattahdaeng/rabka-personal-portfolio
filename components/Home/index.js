import Link from 'next/link'
import SEO from '../SEO'
import styles from './Home.module.css'
import avatar from './avatar-akbar.png'

const Home = () => (
  <>
    <SEO
      title="Home | Akbar Alfattah"
      description="Information of Akbar Alfattah, a Frontend Web Developer"
    />
     <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.txtFrame}>
            <h1>Hello</h1>
            <p>
            I'm a frontend developer based in Jakarta, Indonesia. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
            <p>
            Trying catch up with the modern libraries that we know are always evolving :) 
            </p>
            <p>
              Currently working for full-time as frontend developer at a media company
              in Central of Jakarta, Indonesia.
            </p>
          </div>
          <div className={styles.boxFrame}>
              <img className={styles.avatar} src={avatar} alt="Akbar Alfattah"/>
              <h2 className={styles.name}>Akbar Alfattah</h2>
              <hr className={styles.line}></hr>
              <p className={styles.job}>Front End Developer</p>
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
export default Home
