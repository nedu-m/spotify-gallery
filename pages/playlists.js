import Head from 'next/head';
import Main from '../components/Main'
import { getPlaylist } from './api/spotify';
import PlayList from '../components/PlayList'
import styles from '../styles/Home.module.css'

//getStaticProps
export async function getStaticProps() {
  const response = await getPlaylist();

  if (response.status === 204 || response.status > 400) {
    return {
      props: {
        error: `${response.status} ${response.statusText}`,
      },
    };
  }

  const playlists = await response.json();
  return {
    props: {
      playlists: playlists.items.map((playlist) => ({
        id: playlist.id,
        name: playlist.name,
        coverImage: playlist.images[0].url,
        url: playlist.external_urls.spotify,
      })),
    },
  }
}

export default function Playlists({ playlists, error }) {

  return (
    <>
      <Head>
        <title>Favify</title>
        <meta name="description" content="Spotify Favorites" />
        <meta name="keywords" lang='en' content="Spotify, favorites, music, artists" />
      </Head>
      <div className={styles.loading}>
        <Main />
        <PlayList playlists={playlists} />
      </div>
    </>
  )
}