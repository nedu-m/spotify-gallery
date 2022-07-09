import styles from '../styles/Home.module.css'

const Main = () => {
  return (
    <>
      <main className={styles.main__tagline}>
        <div className={styles.type} data-type-transition aria-hidden={true}>
          <div className={styles.type__line}>spotify spotify spotify</div>
          <div className={styles.type__line}>favorite favorite favorite</div>
          <div className={styles.type__line}>artist artist artist</div>
          <div className={styles.type__line}>spotify spotify spotify</div>
          <div className={styles.type__line}>favorite favorite favorite</div>
          <div className={styles.type__line}>artist artist artist</div>
        </div>
        <div className={styles.frame}>
          <div className={styles.frame__title_wrapper}>
            <h1 className={styles.frame__title}>Spotify Random Artists</h1>
            {/* <p className={styles.frame__tagline}>Inspired by this <a className={styles.link} href="https://dribbble.com/shots/16174007-Kinetic-Typography">shot</a></p> */}
          </div>
          {/* <div className={styles.frame__author}><a className={styles.link__alt} href="https://github.com/nedu-m">@Nedum</a></div> */}
          <nav className={styles.frame__links}>
            <a href='#'> Playlists</a>
            <a href='#'> Podcasts</a>
            <a href='#'> Search</a>
          </nav>
        </div>
      </main>
    </>
  )
}

export default Main