import { onEnter, onLeave } from './Animate';
import Image from 'next/image';
import listStyle from '../styles/Listing.module.css'

export default function ArtistList({ artists }) {
  return (
    <>
      <section className={listStyle.item__wrap}>
        {artists.map((artist) => (
          <figure className={listStyle.item}
            key={artist.id}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Image
              src={artist.coverImage}
              alt={artist.name}
              width={250}
              height={200}
              className={listStyle.item__img}
            />
            <figcaption className={listStyle.item__caption}>
              <a href={artist.url}>
                <h3>{artist.name}</h3>
              </a>
              <p className={listStyle.item__description}>{artist.genre}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}