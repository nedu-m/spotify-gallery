import Image from 'next/image';
import artistStyle from '../styles/ArtistList.module.css'

export default function ArtistList({ artists }) {
  return (
    <>
      <section className={artistStyle.item__wrap}>
        {artists.map((artist) => (
          <figure className={artistStyle.item} data-article="artist-1" key={artist.id}>
            <Image
              src={artist.images[0].url}
              alt={artist.name}
              width={232}
              height={200}
              className={artistStyle.item__img}
            />
            <figcaption className={artistStyle.item__caption}>
              <h3 className={artistStyle.item__title}>{artist.name}</h3>
              <p className={artistStyle.item__description}>{artist.genres[0]}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}