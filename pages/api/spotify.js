import queryString from 'query-string';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const ENDPOINT = `https://api.spotify.com/v1/artists?ids=3tVQdUvClmAT7URs9V3rsp%2C3wcj11K77LjEY1PkEazffa%2C3TVXtAsR1Inumwj472S9r4%2C2YZyLoL8N0Wb9xBt1NhZWg%2C75VKfyoBlkmrJFDqo1o2VY%2C1fYVmAFB7sC7eDoF3mJXla%2C1RyvyyTE3xzB2ZywiAwp0i%2C2IK173RXLiCSQ8fhDlAb3s`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getArtist = async () => {
  const { access_token } = await getAccessToken();

  return fetch(ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const response = await getArtist();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json(`${response.status} ${response.statusText}`);
  }

  const artist = await response.json();

  return res.status(200).json({
    artist: artist.artists.map((_artist) => ({
      name: _artist.name,
      id: _artist.id,
      url: _artist.external_urls.spotify,
      coverImage: _artist.images[1],
      genre: _artist.genres[0],
    })),
  });
};