import Main from '../components/Main'
import Head from 'next/head'
import ArtistList from '../components/ArtistList'
import styles from '../styles/Home.module.css'

export default function Home({ artists, details }) {
  console.log(details);
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

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const res = await fetch('https://spotify23.p.rapidapi.com/artists/?ids=3wcj11K77LjEY1PkEazffa%2C1E5hfn5BduN2nnoZCJmUVG%2C1fYVmAFB7sC7eDoF3mJXla%2C3tVQdUvClmAT7URs9V3rsp%2C3TVXtAsR1Inumwj472S9r4%2C1RyvyyTE3xzB2ZywiAwp0i%2C5f7VJjfbwm532GiveGC0ZK%2C2LIk90788K0zvyj2JJVwkJ%2C2YZyLoL8N0Wb9xBt1NhZWg%2C6jGMq4yGs7aQzuGsMgVgZR%2C7bXgB6jMjp9ATFy66eO08Z%2C12kjvw4e3gLp6qVHO65n7W%2C20sxb77xiYeusSH8cVdatc%2C14CHVeJGrR5xgUGQFV5BVM', options);
  const data = await res.json();


  return {
    props: {
      artists: data.artists
    },
  };
}