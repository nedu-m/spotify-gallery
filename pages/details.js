import Head from 'next/head'
import Image from 'next/image'
import detailStyles from "../styles/Details.module.css"
import { CgArrowLongLeft } from 'react-icons/cg';

export default function Details({ artist, artist2, artist3 }) {
  console.log(artist)
  console.log(artist2)
  console.log(artist3)

  return (
    <>
      <Head>
        <title>Favify</title>
        <meta name="description" content="Spotify Favorites" />
        <meta name="keywords" lang='en' content="Spotify, favorites, music, artists" />
      </Head>

      <section className={detailStyles.article__wrap}>
        <button className={detailStyles.navigation} type='button'>
          <CgArrowLongLeft className={detailStyles.arrow} />
        </button>

      </section>
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

  // const res = await fetch('https://spotify23.p.rapidapi.com/artist_overview/?id=3wcj11K77LjEY1PkEazffa', options);
  // const data = await res.json();
  // const { artist } = data.data

  const urls = [
    'https://spotify23.p.rapidapi.com/artist_overview/?id=3wcj11K77LjEY1PkEazffa',
    'https://spotify23.p.rapidapi.com/artist_overview/?id=3TVXtAsR1Inumwj472S9r4',
    'https://spotify23.p.rapidapi.com/artist_overview/?id=3tVQdUvClmAT7URs9V3rsp',
  ]

  const responses = await Promise.all(urls.map(url => fetch(url, options)))
  const data = await Promise.all(responses.map(res => res.json()));
  const { artist } = data[0].data
  const { artist: artist2 } = data[1].data
  const { artist: artist3 } = data[2].data


  return {
    props: {
      artist: artist.profile,
      artist2: artist2.profile,
      artist3: artist3.profile,
    }
  }
};