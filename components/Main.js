import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Main = () => {
  return (
    <>
      <main className={styles.main__tagline}>
        <div className={styles.type} data-type-transition aria-hidden={true}>
          <div className={styles.type__line}>spotify spotify spotify</div>
          <div className={styles.type__line}>favorite favorite favorite</div>
          <div className={styles.type__line}>artists artists artists</div>
          <div className={styles.type__line}>playlists playlists playlists</div>
          <div className={styles.type__line}>podcasts podcasts podcasts</div>
          <div className={styles.type__line}>favify favify favify</div>
        </div>
        <div className={styles.frame}>
          <div className={styles.frame__title_wrapper}>
            <h1 className={styles.frame__title}>Favify</h1>
            {/* <p className={styles.frame__tagline}>Inspired by this <a className={styles.link} href="https://dribbble.com/shots/16174007-Kinetic-Typography">shot</a></p> */}
          </div>
          <div className={styles.frame__author}><a className={styles.link__alt} href="https://github.com/nedu-m">@Nedum</a></div>
          <nav className={styles.frame__links}>
            <Link href="/">
              <a>Artists</a>
            </Link>
            <Link href="/playlists">
              <a>Playlists</a>
            </Link>
            <Link href="/podcasts">
              <a>Podcasts</a>
            </Link>
          </nav>
        </div>
      </main>
    </>
  )
}

export default Main