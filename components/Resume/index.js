import Link from 'next/link'
import SEO from '../SEO'
import styles from './Resume.module.css'

const Resume = () => (
  <>
    <SEO
      title="Resume | Akbar Alfattah"
      description="Resume of Akbar Alfattah, a Frontend Web Developer"
    />
     <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.txtFrame}>
            <h1>Resume</h1>
            <div className={styles.info}>
            <hr></hr>
            <hr></hr>
            <h2>Experience</h2>
            <p>
              The Jakarta Post <br></br>
              Jun 2020 - Now <br></br>
              Frontend Developer
            </p>
            <p>
              STUCEL <br></br>
              Nov 2018 - May 2020 <br></br>
              Frontend Developer
            </p>
            <hr></hr>
            <hr></hr>
            <h2>Education</h2>
            <p>
              Politeknik Negeri Sriwijaya <br></br>
              2015 - 2018 <br></br>
              Computer Engineering
            </p>
            <hr></hr>
            <hr></hr>
            </div>
          </div>
        </div>   
      </div>  
    </section>
  </>
)
export default Resume
