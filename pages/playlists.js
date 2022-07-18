import Head from 'next/head';
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Playlists({ artists, error }) {
  // const [showArtist, setShowArtist] = useState(null);
  // const list = Object.keys(artists);
  // console.log(list)

  return (
    <>
      <Head>
        <title>Favify</title>
        <meta name="description" content="Spotify Favorites" />
        <meta name="keywords" lang='en' content="Spotify, favorites, music, artists" />
      </Head>
      <div className={styles.loading}>
        <Main />
      </div>
    </>
  )
}