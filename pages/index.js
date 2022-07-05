import Head from "next/head";

export default function Home({ artists }) {
  console.log(artists);

  return (
    <>
      <Head>
        <title>Spotify Gallery</title>
        <meta name="keywords" content="spotify artists" />
      </Head>


    </>
  );
}

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '293967d804msh11125f294586c48p1cc50ajsnc41d7db86e92',
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
