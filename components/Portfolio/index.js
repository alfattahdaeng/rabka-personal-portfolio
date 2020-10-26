import SEO from '../SEO'
import Link from 'next/link'
import WorkList from '../WorkList'
import styles from './Portfolio.module.css'

const Portfolio = () => (
  <>
    <SEO
      title="Portfolio | Akbar Alfattah"
      description="Portfolio of Akbar Alfattah, a Frontend Web Developer"
    />

    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.txtFrame}>
            <h1>Work</h1>
            <p>Here are a few website projects I've worked on recently.</p>
          </div>
        </div>   
      </div>  
    </section>

    <WorkList />
  </>
)

export default Portfolio
