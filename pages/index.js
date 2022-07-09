import Main from '../components/Main'
import ArtistList from '../components/ArtistList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.loading}>
        <Main />
        <ArtistList />
      </div>
    </>
  )
}