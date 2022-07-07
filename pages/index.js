import Head from "next/head";
import Image from "next/image";

export default function Home({ artists }) {
  const names = Array.from(artists.artists.map((artist) => artist.name));
  // const randomNames = names[Math.floor(Math.random() * names.length)];
  const followers = Array.from(artists.artists.map((artist) => artist.followers.total));
  const images = Array.from(artists.artists.map((artist) => artist.images[0].url));
  const genres = Array.from(artists.artists.map((artist) => artist.genres[0]));

  return (
    <>
      <Head>
        <title>Spotify Gallery</title>
        <meta name="keywords" content="spotify artists" />
      </Head>

      {names.map((name, index) => {
        return (
          <div key={name}>
            <h3>{name}</h3>
            <Image src={images[index]} alt={name} width={200} height={200} />
            <h5>Genres: {genres[index]}</h5>
            <p>{followers[index]}</p>
          </div>
        )
      })}
    </>
  );
}

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const res = await fetch('https://spotify23.p.rapidapi.com/artists/?ids=3wcj11K77LjEY1PkEazffa%2C1E5hfn5BduN2nnoZCJmUVG%2C1fYVmAFB7sC7eDoF3mJXla%2C3tVQdUvClmAT7URs9V3rsp%2C3TVXtAsR1Inumwj472S9r4%2C1RyvyyTE3xzB2ZywiAwp0i%2C5f7VJjfbwm532GiveGC0ZK%2C2LIk90788K0zvyj2JJVwkJ%2C2YZyLoL8N0Wb9xBt1NhZWg%2C6jGMq4yGs7aQzuGsMgVgZR%2C7bXgB6jMjp9ATFy66eO08Z%2C12kjvw4e3gLp6qVHO65n7W%2C20sxb77xiYeusSH8cVdatc%2C14CHVeJGrR5xgUGQFV5BVM', options);
  const artists = await res.json();


  return {
    props: {
      artists,
    },
  };
}
