import Head from 'next/head'
import Image from 'next/image'
import detailStyles from "../styles/Details.module.css"
import { CgArrowLongLeft } from 'react-icons/cg';

export default function Details({ artist }) {
  console.log(artist)

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

export const getServerSideProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const res = await fetch('https://spotify23.p.rapidapi.com/artist_overview/?id=3wcj11K77LjEY1PkEazffa', options);
  const data = await res.json();
  const { artist } = data.data

  return {
    props: {
      artist: artist
    },
  };
};