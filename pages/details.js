import Head from 'next/head'
import Image from 'next/image'
import detailStyles from "../styles/Details.module.css"
import { CgArrowLongLeft } from 'react-icons/cg';

export default function Details({ }) {
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
