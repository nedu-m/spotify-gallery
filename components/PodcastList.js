import Image from 'next/image';
import { onEnter, onLeave } from './Animate';
import listStyle from '../styles/Listing.module.css'

export default function PodcastList({ podcasts }) {
  return (
    <>
      <section className={listStyle.item__wrap}>
        {podcasts.map((podcast) => (
          <figure className={listStyle.item}
            key={podcast.id}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Image
              src={podcast.coverImage}
              alt={podcast.name}
              width={250}
              height={200}
              className={listStyle.item__img}
            />
            <figcaption className={listStyle.item__caption}>
              <a href={podcast.url}>
                <h3>{podcast.name}</h3>
              </a>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}