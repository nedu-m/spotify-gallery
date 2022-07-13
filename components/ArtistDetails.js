import Image from 'next/image'
import detailStyles from "../styles/Details.module.css"
import { CgArrowLongLeft } from 'react-icons/cg';

export default function Details({ artist1 }) {
  // const artistDiscography = artist1.discography.albums.items[0].releases.items[0]
  // console.log(artistDiscography);
  return (
    <>
      <section className={detailStyles.article__wrap}>
        <button className={detailStyles.navigation} type='button'>
          <CgArrowLongLeft className={detailStyles.arrow} />
        </button>
        {/* <h2>{artistDiscography.name}</h2>
        <p>{artistDiscography.release_date}</p> */}
      </section>
    </>
  )
}
