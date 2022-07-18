// import useSWR from 'swr';
// import { useState } from 'react';
import Head from 'next/head';
import { getArtist } from './api/spotify';
import Main from '../components/Main'
import ArtistList from '../components/ArtistList'
// import ArtistDetails from '../components/ArtistDetails'
import styles from '../styles/Home.module.css'

//getStaticProps
export async function getStaticProps() {
  const response = await getArtist();

  if (response.status === 204 || response.status > 400) {
    return {
      props: {
        error: `${response.status} ${response.statusText}`,
      },
    };
  }

  const artists = await response.json();
  return {
    props: {
      artists: artists.artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
        genre: artist.genres[0],
        coverImage: artist.images[0].url,
        url: artist.external_urls.spotify,
      })),
    },
  }
}

export default function Home({ artists, error }) {
  return (
    <>
      <Head>
        <title>Favify</title>
        <meta name="description" content="Spotify Favorites" />
        <meta name="keywords" lang='en' content="Spotify, favorites, music, artists" />
      </Head>
      <div className={styles.loading}>
        <Main />
        <ArtistList artists={artists} />
      </div>
    </>
  )
}
