import useSWR from 'swr';
// import { useState } from 'react';
import Main from '../components/Main'
import Head from 'next/head'
import ArtistList from '../components/ArtistList'
// import ArtistDetails from '../components/ArtistDetails'
import styles from '../styles/Home.module.css'

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher)
  console.log(data)

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