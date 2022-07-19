import Image from 'next/image';
import { onEnter, onLeave } from './Animate';
import listStyle from '../styles/Listing.module.css'

export default function PlayList({ playlists }) {
  return (
    <>
      <section className={listStyle.item__wrap}>
        {playlists.map((playlist) => (
          <figure className={listStyle.item} data-article="artist-1"
            key={playlist.id}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Image
              src={playlist.coverImage}
              alt={playlist.name}
              width={250}
              height={200}
              className={listStyle.item__img}
            />
            <figcaption className={listStyle.item__caption}>
              <a href={playlist.url}>
                <h3>{playlist.name}</h3>
              </a>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}