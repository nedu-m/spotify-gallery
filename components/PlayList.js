import Image from 'next/image';
import artistStyle from '../styles/ArtistList.module.css'

export default function ArtistList({ playlists }) {
  return (
    <>
      <section className={artistStyle.item__wrap}>
        {playlists.map((playlist) => (
          <figure className={artistStyle.item} data-article="artist-1" key={playlist.id}>
            <Image
              src={playlist.coverImage}
              alt={playlist.name}
              width={250}
              height={200}
              className={artistStyle.item__img}
            />
            <figcaption className={artistStyle.item__caption}>
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