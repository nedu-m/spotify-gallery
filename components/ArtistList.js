import Image from 'next/image';
import artistStyle from '../styles/ArtistList.module.css'

export default function ArtistList() {
  return (
    <>
      <section className={artistStyle.item__wrap}>
        <figure className={artistStyle.item} data-article="artist-1">
          {/* <Image className={artistStyle.item__img} src='' alt="artist-1" width={300} height={300} /> */}
          <figcaption className={artistStyle.item__caption}>
            <h3 className={artistStyle.item__title}>Artist 1</h3>
            <p className={artistStyle.item__description}>description</p>
          </figcaption>
        </figure>
      </section>
    </>
  )
}
