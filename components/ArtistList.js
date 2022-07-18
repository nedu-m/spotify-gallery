import Image from 'next/image';
import artistStyle from '../styles/ArtistList.module.css'

export default function ArtistList({ artists }) {
  console.log(Array.isArray(artists));

  return (
    <>
      <section className={artistStyle.item__wrap}>
        {artists.map((artist) => (
          <figure className={artistStyle.item} data-article="artist-1" key={artist.id}>
            <Image
              src={artist.coverImage}
              alt={artist.name}
              width={250}
              height={200}
              className={artistStyle.item__img}
            />
            <figcaption className={artistStyle.item__caption}>
              <a href={artist.url}>
                <h3>{artist.name}</h3>
              </a>
              <p className={artistStyle.item__description}>{artist.genre}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}