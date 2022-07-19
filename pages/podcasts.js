import Head from 'next/head';
import Main from '../components/Main'
import { getPodcastList } from './api/spotify';
import Error from '../components/Error';
import PodcastList from '../components/PodcastList'
import styles from '../styles/Home.module.css'

//getStaticProps
export async function getStaticProps() {
  const response = await getPodcastList();

  if (response.status === 204 || response.status > 400) {
    return {
      props: {
        error: `${response.status} ${response.statusText}`,
      },
    };
  }

  const podcasts = await response.json();
  return {
    props: {
      //loop through the podcasts and create an array of objects
      podcasts: podcasts.episodes.map((podcast) => ({
        id: podcast.id,
        name: podcast.name,
        coverImage: podcast.images[0].url,
        url: podcast.external_urls.spotify,
      })),
    },
  }
}

export default function Podcasts({ podcasts, error }) {

  return (
    <>
      <Head>
        <title>Favify</title>
        <meta name="description" content="Spotify Favorites" />
        <meta name="keywords" lang='en' content="Spotify, favorites, music, artists" />
      </Head>
      <div className={styles.loading}>
        <Main />
        {/* If error show component */}
        {error && <Error error={error} />}
        {/* If no error show component */}
        {!error && <PodcastList podcasts={podcasts} />}
      </div>
    </>
  )
}