import { useState } from 'react';
import Main from '../components/Main'
import Head from 'next/head'
import ArtistList from '../components/ArtistList'
import ArtistDetails from '../components/ArtistDetails'
import styles from '../styles/Home.module.css'

export default function Home({ artists, artist1, artist2, artist3, artist4 }) {
  //set state to track which artist is selected
  const [selectedArtist, setSelectedArtist] = useState(artist1);
  const [selectedArtist2, setSelectedArtist2] = useState(artist2);
  const [selectedArtist3, setSelectedArtist3] = useState(artist3);
  const [selectedArtist4, setSelectedArtist4] = useState(artist4);

  //

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
        <ArtistDetails artist1={artist1} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const urls = [
    'https://spotify23.p.rapidapi.com/artists/?ids=3tVQdUvClmAT7URs9V3rsp%2C2YZyLoL8N0Wb9xBt1NhZWg%2C3TVXtAsR1Inumwj472S9r4%2C3wcj11K77LjEY1PkEazffa',
    'https://spotify23.p.rapidapi.com/artist_overview/?id=3wcj11K77LjEY1PkEazffa',
    'https://spotify23.p.rapidapi.com/artist_overview/?id=3TVXtAsR1Inumwj472S9r4',
    'https://spotify23.p.rapidapi.com/artist_overview/?id=3tVQdUvClmAT7URs9V3rsp',
    'https://spotify23.p.rapidapi.com/artist_overview/?id=2YZyLoL8N0Wb9xBt1NhZWg',
  ]

  const responses = await Promise.all(urls.map(url => fetch(url, options)))
  const data = await Promise.all(responses.map(res => res.json()));
  const artists = data[0].artists
  const { artist } = data[1]
  const { artist: artist2 } = data[2]
  const { artist: artist3 } = data[3]
  const { artist: artist4 } = data[4]

  return {
    props: {
      artists: artists,
      artist1: artist,
      artist2: artist2,
      artist3: artist3,
      artist4: artist4,
    }
  }
};