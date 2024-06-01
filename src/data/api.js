export async function getAlbums() {
  const url =
    "https://spotify23.p.rapidapi.com/search/?q=albums&type=multi&offset=0&limit=12&numberOfTopResults=5";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);

  const data = await res.json();

  return data;
}

export async function getAlbumById({ id }) {
  const url = `https://spotify23.p.rapidapi.com/albums/?ids=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
}

export async function getSongs() {
  const url =
    "https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=20";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
}

export async function getArtists() {
  const url =
    "https://spotify23.p.rapidapi.com/search/?q=a&type=artists&offset=0&limit=20&numberOfTopResults=20";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
}

export async function getArtistById({ id }) {
  const url = `https://spotify23.p.rapidapi.com/artists/?ids=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
}

export async function getArtistAlbums({ id }) {
  const url = `https://spotify23.p.rapidapi.com/artist_albums/?id=${id}&offset=0&limit=100`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
}

export async function getSearch({ search }) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=multi&offset=0&limit=20&numberOfTopResults=10`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}

export async function getSongId(id) {
  const url = `https://spotify23.p.rapidapi.com/tracks/?ids=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fb1dda323mshf70ec6e37e1c3d9p1c8f62jsn8b5b502e4aa2",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}
